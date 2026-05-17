
//reverse compliment

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'rosalind_revc.txt');

fs.readFile(filePath, 'utf8',(err, data)=>{
    if(err){
        console.error('big fat thick girthy error', err);
        return
    }


    let dataArr = data.split('');
    reversed = dataArr.reverse();
    joined = reversed.join('')
    console.log('here is joined:' + joined);
    let modifiedData = joined.replace(/A|T/g, (match) => {
        return match === 'A' ? 'T' : 'A';
    });

    let modifiedData2 = modifiedData.replace(/C|G/g, (match) => {
        return match === 'C' ? 'G' : 'C';
    });

    
    console.log(modifiedData2)


})