const TOGGLE_BTN = document.getElementById("toggleBtn")
const USER_VISUALIZER = document.getElementById("userVisualizer")
const CHAT_HISTORY = document.getElementById("chatHistory")
const chatSendbtn = document.getElementById("sendBtn")

const VOICE = window.speechSynthesis

let isChatting = false;
let speechObj = null;
let stream = null
let animationId = null
let currentlySpeaking = null

const chatHistory = [{
  role: "system",
  content: "You are a professor and give long indepth responses of no less than 3 sentences and you always cite the source of your responses."
}]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition // SpeechRecognition | undefined
async function startChat() {
  TOGGLE_BTN.innerText = "Stop"
  speechObj = new SpeechRecognition()
  letUserSpeak()
}
function appendContent({ role, content }) {
  chatHistory.push({ role, content })
  const contentEl = document.createElement('p')
  contentEl.innerText = content;
  contentEl.classList.add('speechBubble', role)
  CHAT_HISTORY.append(contentEl)
}
async function letUserType() {
  
  currentlySpeaking = "user";
  const inputField = document.getElementById('userInput'); 
  const sendButton = document.getElementById('sendBtn'); 

  // Function to handle the user's input
  const handleUserInput = () => {
    const transcript = inputField.value.trim()  // Get the input value and trim whitespace
    console.log(transcript)
    if (transcript) {
      appendContent({ role: currentlySpeaking, content: transcript }); // Append the typed content
      inputField.value = ''; // Clear the input field after submitting
      // stopUserRecording(); // You can adjust this for typing if necessary
      letAISpeak(); // Proceed with AI's response
    }
  };

  // Add event listener to handle the 'Enter' key
  inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleUserInput(); // Process the input when the user presses 'Enter'
    }
  });

  // Add event listener to handle the 'Send' button
  sendButton.addEventListener('click', handleUserInput);
}


async function letAISpeak() {
  currentlySpeaking = "assistant"
  const response = await (await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: chatHistory
    }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_API_KEY}`
    }
  })).json()
  const { content } = response.choices[0].message
  appendContent({ role: currentlySpeaking, content })

  // const spokenResponse = new SpeechSynthesisUtterance(content)
  // spokenResponse.onend = () => letUserSpeak()
  // VOICE.speak(spokenResponse)
}

function updateUserBubble(analyzer) {
  const fbcArray = new Uint8Array(analyzer.frequencyBinCount)
  analyzer.getByteFrequencyData(fbcArray)
  const level = fbcArray.reduce((accum, val) => accum + val, 0) / fbcArray.length

  USER_VISUALIZER.style.transform = `scale(${level / 10})`
  
  animationId = requestAnimationFrame(() => updateUserBubble(analyzer))
}

function stopUserRecording() {
  cancelAnimationFrame(animationId)
  animationId = null
  stream.getTracks().forEach(s => s.stop())
  stream = null
  USER_VISUALIZER.style.transform = 'scale(0)'
}


//first to execute, responds to user input click
// TOGGLE_BTN.addEventListener("click", () => {
//   isChatting = !isChatting;
//   isChatting ? startChat() : stopChat()
// })


chatSendbtn.addEventListener("click", () => {
  letUserType();
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    letUserType();   // Process the input when the user presses 'Enter'
  }
});
// load500 word
const content_Text = document.querySelector(".content_Text")
let currentOffset = 0;
const chunkSize = 500;
let textChunks = 0

  let currentDiv = document.createElement("div");
  currentDiv.className = "word-group";
function loadNextChunk() {
  let storedValue = LZString.decompress(localStorage.getItem("compressedData"));
  let nextChunk = storedValue.replace(/\s+/g, ' ').trim().split(" ").slice(currentOffset, currentOffset + chunkSize);
  currentOffset += chunkSize;
  if (nextChunk.length > 0) {
      nextChunk.forEach((word, i) => {
          const wordElement = document.createElement("span");
          wordElement.className = "word";
          wordElement.textContent = word;
          currentDiv.appendChild(wordElement);
          
          // Check for word group completion every 500 words
          if ((i + 1) % chunkSize === 0) {
             textChunks++
              content_Text.appendChild(currentDiv);  // Append current div to the container
              currentDiv = document.createElement("div");  // Create a new div for the next group
              currentDiv.className = "word-group";
          }
      });

      // If there are leftover words in currentDiv after the loop, append it to the container
      if (currentDiv.childNodes.length > 0) {
        textChunks++
          content_Text.appendChild(currentDiv);
      }
  }
}
loadNextChunk();
// load500 word

///start read text with highlight 


const sentence =LZString.decompress(localStorage.getItem("compressedData"))  
const words = sentence.replace(/\s+/g, ' ').trim().split(" ");  
let utterance; 
let synth = window.speechSynthesis; 
let wordIndex = 0; 
let isPlaying = false; 
function displayWords() {
  const wordContainer = document.querySelector("#word-container");
  const prevSlideArrow = document.getElementById('prevArrow');
const nextSlideArrow = document.getElementById('nextArrow');
let currentChunkIndex = 0;
  function showChunk(index) {
      wordContainer.style.transform = `translateX(-${index * 100}%)`;
    }

  showChunk(currentChunkIndex);

  // Navigate to the previous chunk
  prevArrow.addEventListener('click', () => {
    loadNextChunk()
      if (currentChunkIndex > 0) {
          currentChunkIndex--;
          showChunk(currentChunkIndex);
      }
  });
  
  // Navigate to the next chunk
  nextArrow.addEventListener('click', () => {
    loadNextChunk()
      if (currentChunkIndex < textChunks -1) {
          currentChunkIndex++;
          showChunk(currentChunkIndex);
      }
  });
}
// Function to play or resume speech
let isPaused = false;  // To track if speech is paused

function playSpeech() {
 
    if (!isPlaying) {
      if (isPaused) {
        synth.resume();
            isPaused = false;
      }
      else{
        startSpeaking(wordIndex);  // Start speech from the current word
      }
       
        isPlaying = true;
        document.getElementById("playPauseIcon").className = "fa fa-pause";  // Update icon to pause
       
    } else {
        pauseSpeech();  // Pause if already playing
    }
}

// Function to pause speech
function pauseSpeech() {
    synth.pause();
    isPlaying = false;
    isPaused = true;  // Set pause state
    document.getElementById("playPauseIcon").className = "fa fa-play";  // Update icon to play
}
const maxWordsPerChunk = 200;
let currentChunkIndex = 0;
function startSpeaking(startIndex) {
  if (!synth.speaking) {
      synth.cancel(); // Cancel any ongoing speech if it's already speaking
  }

  wordIndex = startIndex; // Set the word index to start speaking from
  currentChunkIndex = Math.floor(wordIndex / maxWordsPerChunk); 
  function speakChunk() {
      // Determine the start and end of the current chunk
      const start = currentChunkIndex * maxWordsPerChunk;
      const end = Math.min(start + maxWordsPerChunk, words.length);

      // If there are still words to speak
      if (start < words.length) {
          const chunk = words.slice(start, end).join(" ");
          console.log(chunk)
          const utterance = new SpeechSynthesisUtterance(chunk);

          // Set up word highlighting during the speech
          utterance.onboundary = (event) => {
              if (event.name === "word" || event.charIndex !== undefined) {
                  const wordElements = document.getElementsByClassName("word");

                  // Clear previous highlights
                  if (wordIndex > 0 && wordIndex - 1 < wordElements.length) {
                      wordElements[wordIndex - 1].classList.remove("highlight");
                  }

                  // Highlight the current word
                  if (wordIndex < wordElements.length) {
                      wordElements[wordIndex].classList.add("highlight");
                      wordIndex++;
                  }
              }
          };

          // When the utterance (chunk) ends, go to the next chunk
          utterance.onend = () => {
              currentChunkIndex++;
              if (currentChunkIndex * maxWordsPerChunk < words.length) {
                  speakChunk(); 
              } else {
                  resetSpeech();
              }
          };
          synth.speak(utterance);
      } else {
          resetSpeech();
      }
  }

  currentChunkIndex = Math.floor(startIndex / maxWordsPerChunk); 
  speakChunk(); // Begin speaking the first chunk
}

function resetSpeech() {
    synth.cancel();  // Stop any current speech
    const wordElements = document.getElementsByClassName("word");
    for (let i = 0; i < wordElements.length; i++) {
        wordElements[i].classList.remove("highlight");  // Remove highlighting from all words
    }
    wordIndex = 0;
    currentChunkIndex = 0; 
    isPlaying = false;
    isPaused = false;
    document.getElementById("playPauseIcon").className = "fa fa-play";  // Reset play icon
}

function moveForward() {
    if (wordIndex < words.length - 1) {
        wordIndex++;
        highlightWord();
        if (isPlaying) {
          console.log("index",wordIndex)
            startSpeaking(wordIndex);
        }
    }
}

function moveBackward() {
    if (wordIndex > 0) {
        wordIndex--;
        highlightWord();  // Highlight the previous word
        if (isPlaying) {
            startSpeaking(wordIndex -1);  // Continue speaking from the new word index
        }
    }
}

function highlightWord() {
    const wordElements = document.getElementsByClassName("word");
    for (let i = 0; i < wordElements.length; i++) {
        wordElements[i].classList.remove("highlight");  // Clear previous highlights
    }
    if (wordIndex < wordElements.length) {
      console.log('hight')
        wordElements[wordIndex].classList.add("highlight");  // Highlight the current word
    }
}

document.getElementById("playPauseBtn").addEventListener("click", playSpeech);
document.getElementById("forwardBtn").addEventListener("click", moveForward);
document.getElementById("backwardBtn").addEventListener("click", moveBackward);

window.onload = function() {
  console.log("hello world")
    displayWords();
};


// select work 



document.oncontextmenu =  (event) => {
  event.preventDefault();
  let selectedText = ""
  const activeEl = document.activeElement;
  const activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
      console.log(activeElTagName)
  if (
  (activeElTagName == "textarea") || (activeElTagName == "input" &&
  /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
  (typeof activeEl.selectionStart == "number")
  ) {
    selectedText = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
     
  } else if (window.getSelection) {
    selectedText = window.getSelection().toString();
  }
  if (selectedText) {
    selectedText = selectedText.replace(/[\r\n]+/g, " ").trim();
    
    currentlySpeaking = "user"; // Set the role to user
    appendContent({ role: currentlySpeaking, content: selectedText}); // Append the typed content
    letAISpeak(); 
}
  
}

document.getElementById("chat_history").addEventListener("click", () => {
  const aiChatContainer = document.getElementById("chatHistory").innerHTML.trim();
  console.log(aiChatContainer.length)
  const blob = new Blob([aiChatContainer], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "ai-chat-history.txt";
  link.click();
});