const fs = require("fs");
function loadDictionary() {
    console.log("Loading dictionary file...");  
    const dictText = fs.readFileSync("transformed_dictionary.txt", "utf8");
    // STEP 1 — Split into lines
    const lines = dictText.split("\n")
    const nodes = [];
    const nodeMap = new Map();
    console.log("Total lines:", lines.length);
    console.log("Dictionary file loaded.");
    // console.log(dictText);
    // STEP 2 — Process each line
  for (let i = 0; i < lines.length; i++){
        const rawLine = lines[i];
        const line = rawLine.trim();
        // Skip empty lines
        if (line === "") {
            continue;
        }
        // console.log("Processing line:", line);
        // STEP 3 — Split word from rest
        const colonIndex = line.indexOf(":");
        if (colonIndex === -1) {
        //   console.log("No colon found, skipping.");
            continue;
        }
        const word = line.substring(0, colonIndex).trim();
        // console.log("Extracted word:", word);
        const remainder = line.substring(colonIndex + 1).trim();
        // console.log("Remainder:", remainder);
        // STEP 4 — Extract part of speech
        const openParen = remainder.indexOf("(");
        const closeParen = remainder.indexOf(")");
        let pos = "";
        let definition = "";
        if (openParen !== -1 && closeParen !== -1) {
        pos = remainder.substring(openParen + 1, closeParen).trim();
        definition = remainder.substring(closeParen + 1).trim();
        }
        // console.log("Extracted POS:", pos);
        // console.log("Extracted definition:", definition);
        // STEP 5 — Create node
        const node = {
        id: word,
        pos: pos,
        definition: definition
        };
        nodes.push(node);
        nodeMap.set(word.toLowerCase(), node);
    }
//   console.log("Total nodes created:", nodes.length);
//   console.log("nodeMap size:", nodeMap.size);
  return { nodes, nodeMap };
}
function loadSynonyms(){
    const synonymMap = new Map();
    // STEP 1: Read file
    const text = fs.readFileSync("synonyms.txt", "utf8");
    // console.log("Raw text loaded");
    // STEP 2: Split
    const rawBlocks = text.split("=");
    // console.log("STEP 1 - rawBlocks:", rawBlocks);
    // STEP 3: Trim
    const trimmedBlocks = [];
    for (let i = 0; i < rawBlocks.length; i++) {
        // console.log("pre trim: ", rawBlocks[i]);
      const trimmed = rawBlocks[i].trim();
    //   console.log("Trimming:", trimmed);
      trimmedBlocks.push(trimmed);
    }
    // STEP 4: Remove empty
    const nonEmptyBlocks = [];
    for (let i = 0; i < trimmedBlocks.length; i++) {
      if (trimmedBlocks[i] !== "") {
        // console.log("removing empty blocks, Keeping:", trimmedBlocks[i]);
        nonEmptyBlocks.push(trimmedBlocks[i]);
      }
    }
    // console.log("FINAL blocks:", nonEmptyBlocks);
    for (const block of nonEmptyBlocks) {
        const lines = block.split("\n");
        // console.log(lines);
        let key = null;
        let synonyms = [];
        for (const line of lines) {
          if (line.startsWith("KEY:")) {
            key = line.replace("KEY:", "").replace(".", "").trim();
          }
        //   console.log("extracted key: ",key)
          if (line.startsWith("SYN:")) {
            const synText = line.replace("SYN:", "");
            synonyms = synText.split(",")
              .map(s => s.trim().replace(".", ""))
              .filter(Boolean);
          }
        //   console.log("extracted synonyms: ",synonyms)
        }
        if (key) {
          synonymMap.set(key.toLowerCase(), synonyms.map(s => s.toLowerCase()));
        }
      }
    //   console.log("the whole kahuna", synonymMap);
      return synonymMap;
}
function buildLinks(nodes, nodeMap, synonymMap) {
    console.log("Starting buildLinks...");
    const links = [];
    const linkSet = new Set();
    // Review Arrays
    const wordsWithNoSynonyms = [];      // Words that found nothing in synonymMap
    const wordsWithSynonyms = [];        // Words that successfully found at least one synonym
    const brokenSynonymLinks = [];       // Synonyms found in map, but missing from dictionary file
    // Pre-calculate keys for fuzzy matching
    const synonymKeys = Array.from(synonymMap.keys());
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      const word = node.id.toLowerCase();
      // STEP 1: Look up synonyms (Exact match)
      let synonyms = synonymMap.get(word);
      // STEP 2: Fuzzy Match (If exact match fails)
      if (!synonyms) {
        const fuzzyKey = synonymKeys.find(key =>
          word.startsWith(key) || key.startsWith(word.substring(0, Math.max(4, word.length - 3)))
        );
        if (fuzzyKey) {
          synonyms = synonymMap.get(fuzzyKey);
        }
      }
      // STEP 3: Validate results and categorize
      if (!synonyms || synonyms.length === 0) {
        wordsWithNoSynonyms.push(node.id);
        continue; // Move to the next word in the dictionary
      }
      // If we reached here, synonyms WERE found
      wordsWithSynonyms.push(node.id);
      // STEP 4: Loop through each found synonym to create links
      for (let j = 0; j < synonyms.length; j++) {
        const syn = synonyms[j];
        const targetNode = nodeMap.get(syn);
        // Handle synonyms that don't exist in your dictionary file
        if (targetNode === undefined) {
          brokenSynonymLinks.push(`${syn}`);
          continue;
        }
        // STEP 5: Prepare unique link key (alphabetical sort to avoid A|B and B|A duplicates)
        const a = word;
        const b = targetNode.id.toLowerCase();
        const key = (a < b) ? `${a}|${b}` : `${b}|${a}`;
        // STEP 6: Save unique links
        if (!linkSet.has(key)) {
          linkSet.add(key);
          links.push({
            source: node.id,
            target: targetNode.id
          });
        }
      }
    }
    console.log("Finished building links.");
    return { 
      links, 
      wordsWithNoSynonyms, 
      wordsWithSynonyms, 
      brokenSynonymLinks 
    };
}
console.log("=== STARTING FULL TEST ===");
const dictionaryData = loadDictionary();
const nodes = dictionaryData.nodes;
const nodeMap = dictionaryData.nodeMap;
const synonymMap = loadSynonyms();
console.log("Nodes count:", nodes.length);
console.log("SynonymMap size:", synonymMap.size);
const { links, wordsWithNoSynonyms } = buildLinks(nodes, nodeMap, synonymMap);
console.log("Final links count:", links.length);
console.log("Words with no synonyms count:", wordsWithNoSynonyms);
// console.log("Sample links:", links.slice(0, 10));
// console.log("=== TEST COMPLETE ===");
// --- HOW TO EXECUTE AND SAVE ---
const results = buildLinks(dictionaryData.nodes, dictionaryData.nodeMap, synonymMap);
// Save results to files
fs.writeFileSync("no_synonyms_found.txt", results.wordsWithNoSynonyms.join("\n"));
fs.writeFileSync("synonyms_found.txt", results.wordsWithSynonyms.join("\n"));
fs.writeFileSync("broken_dictionary_links.txt", results.brokenSynonymLinks.join("\n"));
console.log(`Processing Complete:
- Total Links: ${results.links.length}
- No Synonyms Found: ${results.wordsWithNoSynonyms.length}
- Synonyms Found: ${results.wordsWithSynonyms.length}
- Broken Links: ${results.brokenSynonymLinks.length}`);


