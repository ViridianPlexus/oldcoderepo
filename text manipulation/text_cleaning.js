const fs = require('fs').promises; // Use the promise-based version of fs

// Helper function to create a pause
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let hard_limit = 20000;

async function processFile(fileName) {
    try {
        const data = await fs.readFile(fileName, 'utf8');
        let currentIndex = 0;
         // 3. This will hold our Array of Arrays
            const chunkDataStructure = [];

        while (currentIndex < hard_limit) {
            let end = currentIndex + 500;

            // Move pointer to the next space/newline
            while (end < data.length && data[end] !== ' ' && data[end] !== '\n') {
                end++;
            }

            let chunk = data.slice(currentIndex, end);

            cleanChunk = chunk
                .replace(/(\r?\n){2,}/g, '\n') // Reduce 2+ newlines to 1
                .replace(/\.{2,}/g, '.')       // Reduce 2+ periods to 1
                .replace(/!{2,}/g, '!')         // Reduce 2+ exclamation marks to 1
                .replace(/,{2,}/g, ',')
                .replace(/\?{2,}/g, '?')
                .trim();
            
            console.log("--- CHUNK START ---");
            console.log(chunk);
            console.log("--- CHUNK END ---\n");


            // 2. Split chunk into sentences based on . ! or ?
            // We use a "Lookbehind" (?<=[.!?]) to keep the punctuation with the sentence
            const sentenceList = cleanChunk.split(/(?<=[.!?])/g);

        

            sentenceList.forEach(sentence => {
                // Remove whitespace
                const trimmed = sentence.trim();

                // Validation: Only proceed if there are actual letters/numbers
                // This ignores sentences that are just punctuation or empty spaces
                if (/[a-zA-Z0-9]/.test(trimmed)) {

                    // 1. Split into words as usual
                     const rawWords = trimmed.split(/\s+/);
                    
                    // Split the sentence into an array of words
                    const wordsArray = rawWords.filter(word => /[a-zA-Z0-9]/.test(word));
                    console.log(wordsArray);
                    
                    // 3. Only push if the sentence still has words left after filtering
                    if (wordsArray.length > 0) {
                        chunkDataStructure.push(wordsArray);
                    }
                }
 });

 console.log("--- PROCESSED CHUNK STRUCTURE ---");
            console.log(chunkDataStructure);


            currentIndex = end;

            // --- THE PAUSE ---
            // Adjust 2000 (2 seconds) to whatever speed you like
            await sleep(10000); 
        }

        console.log("✅ Processing complete.");
    } catch (err) {
        console.error("Error reading file:", err.message);
    }
}

// Run the function
processFile("(A People's History of the United States 1) Howard Zinn - A People's History of the United States-HarperCollins (2009).txt"); 