import ColorThief from 'colorthief';
import styled from 'styled-components/macro';
import { RefreshCw } from 'react-feather';

//Function to get rgb and name of color based on original rgb
const getName = async (rgbValue, lang) => {
    let res = await fetch(`/color/${lang}/${rgbValue}`);
    const color = await res.json();
    return color;
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

//JS library color-thief that returns main color used in image;
const colorThief = new ColorThief();

//Function to
//1)Extract rgb of most used color in image using JS library "color-thief",
//2)Then, pass "rgb" and "lang" to getRgb which returns "color data" which includes rgb and name
const getMainRgb = async (e, lang, setOriginalColor) => {
    let pic = e.target;
    if (pic.complete) {
        let data = colorThief.getColor(pic);
        setOriginalColor(data);
        return getRgb(data, lang);
    }
};

//1) Run getRgb and get color data, trigger setColorData, setBackgroundColor, and setColorArray
const getColor = async (
    data,
    lang,
    setColorData,
    setBackgroundColor,
    setColorArray,
    colorArray
) => {
    if (data) {
        let response = await getRgb(data, lang);
        setColorData(response);
        setBackgroundColor(`rgb(${response.r}, ${response.g}, ${response.b})`);
        //Use concat instead of push as original array cannot be changed = need to create new array for React state array
        if (setColorArray && colorArray) {
            setColorArray(colorArray.concat([response]));
        }
    }
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
