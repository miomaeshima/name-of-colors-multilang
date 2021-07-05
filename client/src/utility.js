import ColorThief from 'colorthief';
import styled from 'styled-components/macro';
import { RefreshCw } from 'react-feather';
const colorThief = new ColorThief();

const getName = async (rgbValue) => {
    
    let res = await fetch(`http://localhost:5000/color/en/${rgbValue}`);
    const color = await res.json();
    console.log(color);
    return color;
};
//function to get the dominant rgb value of an image and then get the name of closest color
//using the function above

const getMainRgb = async (e) => {
    let pic = e.target;
    if (pic.complete) {
        let result = colorThief.getColor(pic);
        let rgb = { r: result[0], g: result[1], b: result[2] };
        let rgbToBeSent = JSON.stringify(rgb);
        console.log(rgbToBeSent)
        let color = await getName(rgbToBeSent);
        return color;
    }
};

const getRgb = async (data) => {
    let rgb = { r: data[0], g: data[1], b: data[2] };
    let rgbToBeSent = JSON.stringify(rgb);
    let color = await getName(rgbToBeSent);
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

export { getMainRgb, getRgb, Refresh };
