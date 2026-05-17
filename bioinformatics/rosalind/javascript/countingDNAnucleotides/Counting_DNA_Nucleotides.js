// A string is simply an ordered collection of symbols selected from some alphabet and formed into a word; the length of a string is the number of symbols that it contains.

// An example of a length 21 DNA string (whose alphabet contains the symbols 'A', 'C', 'G', and 'T') is "ATGCTTCAGAAAGGTCTTACG."

// Given: A DNA string s
//  of length at most 1000 nt.

//parse from external file
const fs = require('fs');
const path = require('path');

// Construct the path to the file
const filePath = path.join(__dirname, 'rosalind_dna.txt');
let obj = {}

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // console.log(data); // This will log the content of the file as a string
   
    let dataArr = data.split('');

    console.log(dataArr);


    for(x in dataArr){
        // console.log(dataArr[x])
        if(dataArr[x] in obj)
            {
                obj[dataArr[x]]++
            }
            else{
                obj[dataArr[x]] = 1
            }
    }

    console.log(obj['A'],  obj['C'],  obj['G'],  obj['T'])
    

});




//turn file into string into array

// object search ya ya