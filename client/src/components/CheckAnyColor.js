import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import Header from './Header';
import SelectButton from './SelectButton';
import { getRgb, Refresh, findFontColor } from '../utility.js';
import { useSelector } from 'react-redux';
import Tooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';
import { DIMENSIONS } from '../constants';

const CheckAnyColor = () => {
    const [previewPic, setPreviewPic] = useState(null);
    const [picSrc, setPicSrc] = useState(null);
    const [colorData, setColorData] = useState({});
    const [backgroundColor, setBackgroundColor] = useState('transparent');
    const [colorArray, setColorArray] = useState([]);

    const lang = useSelector((state) => state.language[0]);

    const preview = (e) => {
        e.preventDefault();
        setPreviewPic(e.target.files[0]);
    };

    if (previewPic !== null) {
        let reader = new FileReader();
        reader.readAsDataURL(previewPic);
        let image = new Image();
        reader.onload = function () {
            setPicSrc(reader.result);
            image.src = reader.result;
        };
    }

    useEffect(() => {
        if (picSrc !== null) {
            let canvas = document.getElementById('canvas');
            let canvasContainer = document.getElementById('canvasContainer');
            canvas.width = canvasContainer.clientWidth;
            canvas.height = canvasContainer.clientHeight;

            let context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = 'transparent';
            context.fillRect(0, 0, canvas.width, canvas.height);

            let img = new Image();
            img.src = picSrc;
            img.onload = function () {
                if (img.width >= img.height) {
                    context.drawImage(
                        img,
                        0,
                        0,
                        canvas.width,
                        img.height * (canvas.width / img.width)
                    );
                } else {
                    context.drawImage(
                        img,
                        0,
                        0,
                        img.width * (canvas.height / img.height),
                        canvas.height
                    );
                }
            };

            const getColor = async (data) => {
                let response = await getRgb(data, lang);
                setColorData(response);
                setBackgroundColor(
                    `rgb(${response.r}, ${response.g}, ${response.b})`
                );

                //Cannot use push for React state array
                setColorArray(colorArray.concat([response]));
            };

            let colorSample = document.getElementById('colorSample');
            canvas.addEventListener('mousemove', (event) => {
                let x = event.offsetX;
                let y = event.offsetY;
                let imageData = context.getImageData(x, y, 1, 1);
                let data = imageData.data;

                colorSample.style.background = `rgb(${data[0]}, ${data[1]}, ${data[2]}`;
            });

            const sendCanvasDataToGetColor = (event) => {
                let x = event.offsetX;
                let y = event.offsetY;
                let imageData = context.getImageData(x, y, 1, 1);
                let data = imageData.data;
                getColor(data);
            };
            canvas.addEventListener('click', sendCanvasDataToGetColor);

            //Need the codes below to clean up the above eventListner to avoid that eventListner with the previous language remaining after the language is changed. Otherwise there will be plural number of eventLisnters would run.

            return () => {
                canvas.removeEventListener('click', sendCanvasDataToGetColor);
            };
        }
    }, [picSrc, lang, colorArray]);

    //Limit to only five colors in colorArray (Cannot use unshift on React state)
    if (colorArray.length > 5) {
        let idxToRemove = 0;
        setColorArray(colorArray.filter((item, idx) => idx !== idxToRemove));
    }

    const refresh = () => {
        setPreviewPic(null);
        setBackgroundColor('transparent');
        setPicSrc(null);
        setColorData({});
        setColorArray([]);
    };

    let fontColor = findFontColor(colorData);

    let text, buttonText, textToClick, tooltipText;

    if (lang === 'en') {
        text =
            'You can look up the name of the color of any part of the image you select.';
        buttonText = 'Select an image.';
        textToClick =
            'You can also look up the name in Japanese or French by chaging the select menu above. Click any part of the image to find out the name of the color.';
        tooltipText = 'Refresh the image';
    } else if (lang === 'fr') {
        text =
            "Vous pouvez rechercher le nom de la couleur de n'importe quelle partie de l'image que vous sélectionnez.";
        buttonText = 'Sélectionnez une image.';
        textToClick =
            "Vous pouvez également rechercher le nom en japonais ou en français en modifiant le menu de sélection ci-dessus. Cliquez sur n'importe quelle partie de l'image pour connaître le nom de la couleur.";
        tooltipText = "Rafraîchir l'image";
    } else {
        text =
            '下のボタンから画像を選び、好きな場所をクリックして色の名前を調べられます。';
        buttonText = '画像を選ぶ。';
        textToClick =
            '上のメニューを変えると英語、フランス語でも名前が調べられます。画像の好きなところをクリックして、色の名前を調べられます。';
        tooltipText = '画像をリフレッシュ';
    }

    return (
        <Wrapper>
            <Header />
            {previewPic === null ? (
                <SelectButton
                    text={text}
                    buttonText={buttonText}
                    preview={preview}
                />
            ) : (
                <Container>
                    <PreviewWrapper style={{ background: backgroundColor }}>
                        <Box>
                            <CanvasContainer id="canvasContainer">
                                <canvas id="canvas"></canvas>
                            </CanvasContainer>
                        </Box>
                        <Box className="nameBox">
                            {colorArray.length === 0 ? (
                                <div>
                                    <p>{textToClick}</p>
                                </div>
                            ) : (
                                <></>
                            )}
                            <div style={fontColor}>{colorData.name}</div>
                        </Box>
                    </PreviewWrapper>
                    <BottomWrapper>
                        <ColorSample id="colorSample" />
                        {colorArray.map((color, index) => (
                            <Tooltip label={color.name}>
                                <ClickedColor
                                    key={index}
                                    style={{
                                        background: `rgb(${color.r}, ${color.g}, ${color.b})`,
                                    }}
                                />
                            </Tooltip>
                        ))}
                        <Tooltip label={tooltipText}>
                            <IconWrapper>
                                <Refresh onClick={() => refresh()} />
                            </IconWrapper>
                        </Tooltip>
                    </BottomWrapper>
                </Container>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: beige;
`;

const Container = styled.div`
    width: 100%;
    --colorSampleHeight: 48px;
    height: calc(100% - ${DIMENSIONS.headerHeight} - var(--colorSampleHeight));
`;

const PreviewWrapper = styled.div`
    height: 100%;
    display: flex;
`;

const Box = styled.div`
    p {
        max-width: 50ch;
    }
`;

const CanvasContainer = styled.div`
    width: 60vw;
    height: 100%;
`;

const BottomWrapper = styled.div`
    display: flex;
    gap: 16px;
    padding-left: 16px;
`;

const ColorSample = styled.div`
    width: var(--colorSampleHeight);
    height: var(--colorSampleHeight);
    border-radius: 50%;
    margin-right: 32px;
`;

const ClickedColor = styled.div`
    width: var(--colorSampleHeight);
    height: var(--colorSampleHeight);
    border-radius: 50%;
`;

const IconWrapper = styled.div`
    position: absolute;
    bottom: 7px;
    right: 10px;
`;

export default CheckAnyColor;
