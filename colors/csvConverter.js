const fastcsv = require('fast-csv');
const fs = require('fs');

//read csv file, convert it into an array of objects into an js file. To run this file, cd into colors folder then enter "node csvConverter.js" on terminal Do this for colors csv for all the languages

let stream = fs.createReadStream('colors_french.csv');
let csvData = [];
let csvStream = fastcsv
    .parse()
    //.on("data"...)means the function runs everytone a line of data comes in 
    .on('data', function (data) {
        let object = {
            name: data[0],
            r: Number.parseInt(data[1]),
            g: Number.parseInt(data[2]),
            b: Number.parseInt(data[3]),
        };
        csvData.push(object);
    })
    //.on("end"...) means the function runs when all the lines have been processed. 
    .on('end', function () {
        fs.writeFile(
            './colors_french.js',
            JSON.stringify(csvData),
            function (err) {
                if (err) throw err;
                console.log('done!');
            }
        );
    });

stream.pipe(csvStream);
