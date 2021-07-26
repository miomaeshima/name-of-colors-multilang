import ColorThief from 'colorthief';
import styled from 'styled-components/macro';
import { RefreshCw } from 'react-feather';

const colorThief = new ColorThief();

const getName = async (rgbValue, lang) => {
    let res = await fetch(`http://localhost:5000/color/${lang}/${rgbValue}`);
    const color = await res.json();

    return color;
};
//function to get the dominant rgb value of an image and then get the name of closest color
//using the function above

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

const getRgb = async (data, lang) => {
    let rgb = { r: data[0], g: data[1], b: data[2] };
    let rgbToBeSent = JSON.stringify(rgb);
    let color = await getName(rgbToBeSent, lang);
    return color;
};

const Refresh = ({ fontColor, onClick }) => {
    return (
        <RefreshWrapper tabIndex="0">
            <RefreshCw
                size={'1.5rem'}
                strokeWidth={1}
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

export { getMainRgb, getRgb, Refresh, findFontColor };
