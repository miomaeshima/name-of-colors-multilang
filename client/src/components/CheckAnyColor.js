import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import Header from './Header';
import { getRgb, Refresh } from '../utility.js';
import { useSelector } from 'react-redux';

const CheckAnyColor = () => {
    const [previewPic, setPreviewPic] = useState(null);
    const [picSrc, setPicSrc] = useState(null);
    const [colorData, setColorData] = useState({});
    const [backgroundColor, setBackgroundColor] = useState('transparent');
    const lang = useSelector((state) => state.language[0]);
    console.log(lang)

    const placeCheckAnyColorPage = () => {
        window.location.href = '#checkCheckAnyColor';
    };

    const preview = (e) => {
        e.preventDefault();
        setPreviewPic(e.target.files[0]);
        placeCheckAnyColorPage();
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

            let colorSample = document.getElementById('colorSample');
           
            const getColor = async (data) => {
                
                let response = await getRgb(data, lang);
                setColorData(response);
                setBackgroundColor(
                    `rgb(${response.r}, ${response.g}, ${response.b})`
                );

                placeCheckAnyColorPage();
            };

            canvas.addEventListener('mousemove', (event) => {
                let x = event.offsetX;
                let y = event.offsetY;
                let imageData = context.getImageData(x, y, 1, 1);
                let data = imageData.data;

                colorSample.style.background = `rgb(${data[0]}, ${data[1]}, ${data[2]}`;
            });

            canvas.addEventListener('click', (event) => {
                let x = event.offsetX;
                let y = event.offsetY;
                let imageData = context.getImageData(x, y, 1, 1);
                let data = imageData.data;
                
                getColor(data);
            });
        }
    }, [picSrc]);

    const refresh = () => {
        setPreviewPic(null);
        setBackgroundColor('transparent');
        setPicSrc(null);
        setColorData({});
    };

    let fontColor;
    if (
        (colorData.r * 299 + colorData.g * 587 + colorData.b * 114) / 1000 <
        128
    ) {
        fontColor = { color: 'white' };
    } else {
        fontColor = { color: 'black' };
    }

    return (
        <>
            <Header />
            <div id="checkCheckAnyColor">
                {previewPic === null ? (
                    <form name="selectFileForm">
                        <label
                            className="label"
                            htmlFor="selectFileCheckAnyColor"
                            tabIndex="0"
                        >
                            ここをクリックして、画像を選んでください。
                        </label>
                        <input
                            type="file"
                            id="selectFileCheckAnyColor"
                            accept="image/*"
                            onChange={preview}
                        ></input>
                    </form>
                ) : (
                    <div
                        id="previewBoxCheckAnyColor"
                        style={{ background: backgroundColor }}
                    >
                        <div className="previewOuterContainer">
                            <div id="previewContainerCheckAnyColor">
                                <div id="instructionCheckAnyColor">
                                    クリックしたところの色の名前が分かります。
                                    <ColorSample id="colorSample" />
                                </div>
                                <div id="canvasContainer">
                                    <canvas id="canvas"></canvas>
                                </div>
                            </div>
                        </div>

                        <div id="selectNameBoxCheckAnyColor" style={fontColor}>
                            {colorData.name}
                        </div>
                    </div>
                )}
                <div id="linkContainer3">
                    <Refresh fontColor={fontColor} onClick={() => refresh()} />
                </div>
            </div>
        </>
    );
};

const ColorSample = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
`;
export default CheckAnyColor;
