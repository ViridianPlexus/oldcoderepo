//parse from external file
const fs = require('fs');
const path = require('path');

// Construct the path to the file
const filePath = path.join(__dirname, 'rosalind_rna.txt');
let obj = {}

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

        // console.log(data)
        let modifiedData = data.replace(/T/g, 'U');
        console.log(modifiedData)


});