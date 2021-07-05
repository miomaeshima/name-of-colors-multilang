const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const japaneseColorNames = require('./colors/colors_japanese');
const englishColorNames = require('./colors/colors_english');
const frenchColorNames = require('./colors/colors_french');

app.use(cors());
app.use(express.json());

//turn an array of objects {name, r, g, b} into an array of objects {name, distance}

const getDistance = (array, re, gr, bl) =>
    array.map((color) => {
        let distance = Math.sqrt(
            (color.r - re) ** 2 + (color.g - gr) ** 2 + (color.b - bl) ** 2
        );
        return { ...color, distance: distance };
    });

//function to return color that has smallest distance
const findClosest = (colors) => {
    let result = colors[0];
    for (let i = 1; i < colors.length; i++) {
        if (colors[i].distance < result.distance) {
            result = colors[i];
        }
    }
    return result;
};

app.get('/color/:lang/:rgb', (req, res) => {
    let lang = req.params.lang;
    console.log(lang);   

    let value = req.params.rgb;
    console.log(value)
    value = JSON.parse(value);
    console.log(value)

    let colorArray= japaneseColorNames;

    if (lang === 'ja') {
        colorArray = japaneseColorNames;
    } else if (lang === 'en') {
        colorArray = englishColorNames;
    } else if (lang === 'fr') {
        colorArray = frenchColorNames;
    } else {
        console.log('error');
    }

    let arrayOfDistance = getDistance(colorArray, value.r, value.g, value.b);

    let chosenColor = findClosest(arrayOfDistance);

    res.send(JSON.stringify(chosenColor));
});

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});
