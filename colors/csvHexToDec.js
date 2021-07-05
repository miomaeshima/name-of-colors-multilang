const fastcsv = require('fast-csv');
const fs = require('fs');

//read csv file with HEX color code, convert it into an array of objects with DECIMAL color code into an js file. To run this file, cd into colors folder then enter "node csvHexToDec.js" on terminal Do this for colors csv for all the languages

let stream = fs.createReadStream('colors_english.csv');
let csvData = [];
let csvStream = fastcsv
    .parse()
    //.on("data"...)means the function runs everytone a line of data comes in
    .on('data', function (data) {
        //Use Regex to split Hex into rgb values
        let dec = data[1].slice(1).match(/.{2}/g);
            let object = {
            name: data[0],
            r: Number.parseInt(dec[0], 16),
            g: Number.parseInt(dec[1], 16),
            b: Number.parseInt(dec[2], 16),
        };
        csvData.push(object);
    })
    //.on("end"...) means the function runs when all the lines have been processed.
    .on('end', function () {
        fs.writeFile(
            './colors_english.js',
            JSON.stringify(csvData),
            function (err) {
                if (err) throw err;
                console.log('done!');
            }
        );
    });

stream.pipe(csvStream);
