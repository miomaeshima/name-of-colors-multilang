import ColorThief from 'colorthief';
import styled from 'styled-components/macro';
import { RefreshCw } from 'react-feather';

//JS library color-thief that returns main color used in image;
const colorThief = new ColorThief();

//Function to get rgb and name of color based on original rgb
const getName = async (rgbValue, lang) => {
    let res = await fetch(`http://localhost:5000/color/${lang}/${rgbValue}`);
    const color = await res.json();
    return color;
};

//Function to
//1)Extract rgb of most used color in image using JS library "color-thief",
//2)Pass "rgb" and "lang" to getName funtion and receive and return "color data" which includes rgb and name

const getMainRgb = async (e, lang) => {
    let pic = e.target;
    if (pic.complete) {
        let result = colorThief.getColor(pic);
        let rgb = { r: result[0], g: result[1], b: result[2] };
        let rgbToBeSent = JSON.stringify(rgb);
        let color = await getName(rgbToBeSent, lang);
        return color;
    }
};

//1) Receive "original color data" and "lang",
//2) extract "rgb" from "original color data",
//3) pass "rgb" and "lang" to getName function and receive and return "color data" which includes rgb and name
const getRgb = async (data, lang) => {
    let rgb = { r: data[0], g: data[1], b: data[2] };
    let rgbToBeSent = JSON.stringify(rgb);
    let color = await getName(rgbToBeSent, lang);
    return color;
};

const getColor = async (
    data,
    lang,
    setColorData,
    setBackgroundColor,
    setColorArray,
    colorArray
) => {
    let response = await getRgb(data, lang);
    setColorData(response);
    setBackgroundColor(`rgb(${response.r}, ${response.g}, ${response.b})`);
    //Use concat instead of push as original array cannot be changed = need to create new array for React state array
    setColorArray(colorArray.concat([response]));
};

const Refresh = ({ fontColor, onClick }) => {
    return (
        <RefreshWrapper tabIndex="0">
            <RefreshCw
                size={'1.2rem'}
                strokeWidth={2}
                style={fontColor}
                onClick={onClick}
            />
        </RefreshWrapper>
    );
};

const RefreshWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
`;

const findFontColor = (data) => {
    if ((data.r * 299 + data.g * 587 + data.b * 114) / 1000 < 128) {
        return { color: 'white' };
    } else {
        return { color: 'black' };
    }
};

const refreshPage = (
    setPreviewPic,
    setBackgroundColor,
    setPicSrc,
    setColorData,
    setColorArray,
    setAdjustment,
    setOriginalColor
) => {
    setPreviewPic(null);
    setBackgroundColor('transparent');
    setPicSrc(null);
    setColorData({});
    if (setColorArray) {
        setColorArray([]);
    }
    if (setAdjustment) {
        setAdjustment(0);
    }
    if (setOriginalColor) {
        setOriginalColor(null);
    }
};

export { getMainRgb, getRgb, Refresh, findFontColor, refreshPage, getColor };
