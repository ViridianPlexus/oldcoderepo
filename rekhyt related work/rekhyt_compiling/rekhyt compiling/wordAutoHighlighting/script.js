// List of words to display
const words = ["Hello", "World", "This", "is", "a", "test"];
let index = 0;

// Function to display the words one by one as separate elements
function displayWord() {
    const wordContainer = document.getElementById("word-container");

    // Create a new span element for the word
    const wordElement = document.createElement("span");
    wordElement.className = "word";
    wordElement.textContent = words[index];
    
    // Append the new word element to the container
    wordContainer.appendChild(wordElement);
    index++;

    // Loop through the words list
    if (index < words.length) {
        setTimeout(displayWord, 1000);  // Call displayWord after 1000ms (1 second)
    } else {
        // After all words are displayed, start the highlighting process
        setTimeout(highlightWords, 1000);
    }
}
// add Audio 

function playSound () {
    let audio = new Audio('../REKHYT/Assets/thunder1.mp3');
    audio.preload = "auto";  // Ensure the audio is preloaded
    audio.play().catch(error => {
        console.error("Audio playback failed: ", error);
    });
}

// Function to highlight words one by one
function highlightWords(highlightIndex = 0) {
    const wordElements = document.getElementsByClassName("word");

    if (highlightIndex > 0) {
        // Remove highlight from the previous word
        wordElements[highlightIndex - 1].classList.remove("highlight");
       
    }

    if (highlightIndex < wordElements.length) {
        // Add the highlight class to the current word
        wordElements[highlightIndex].classList.add("highlight");
        playSound()
        
        // Move to the next word after a delay
        setTimeout(() => highlightWords(highlightIndex + 1), 1000);
    }
}


// Start displaying words when the page loads
window.onload = function() {
    displayWord();
};
