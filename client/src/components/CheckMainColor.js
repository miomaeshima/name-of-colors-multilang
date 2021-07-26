import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Header from './Header';
import { getMainRgb, Refresh } from '../utility';
import { useSelector } from 'react-redux';

const CheckMainColor = () => {
    const [previewPic, setPreviewPic] = useState(null);
    const [picSrc, setPicSrc] = useState(null);
    const [picName, setPicName] = useState('');
    const [colorData, setColorData] = useState({});

    //State "wide" means pic's width > height
    const [wide, setWide] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState('transparent');

    //Put data of selected image to PreviewPic
    const preview = (e) => {
        e.preventDefault();
        setPreviewPic(e.target.files[0]);
    };

    //If previewPic has data, display the image
    if (previewPic !== null) {
        let reader = new FileReader();
        reader.readAsDataURL(previewPic);
        let image = new Image();
        reader.onload = function () {
            setPicSrc(reader.result);
            setPicName(previewPic.name);
            image.src = reader.result;
            image.onload = function () {
                if (image.width < image.height) {
                    setWide(false);
                }
            };
        };
    }

    // Get main color data and populate ColorData and BackcgroundColor
    const getMainColor = async (e) => {
        let data = await getMainRgb(e);
        setColorData(data);
        setBackgroundColor(`rgb(${data.r}, ${data.g}, ${data.b})`);
    };

    const refresh = () => {
        setPreviewPic(null);
        setBackgroundColor('transparent');
        setColorData({});
        setPicSrc(null);
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

    let clickable = false;
    if (Object.keys(colorData).length === 0) {
        clickable = true;
    }

    let clickableCursor = { cursor: 'revert' };
    if (clickable) {
        clickableCursor = { cursor: 'pointer' };
    }

    let dimension = {
        width: '60vw',
        height: '60vw',
        objectFit: 'contain',
        objectPosition: 'left top',
    };

    let imgStyles = { ...dimension, ...clickableCursor };

    const lang = useSelector((state) => state.language[0]);
    let text;
    let buttonText;

    if (lang === 'en') {
        text =
            'You can look up the name of the most used color in the image you select.';
        buttonText = 'Select an image.';
    } else if (lang === 'fr') {
        text =
            "Vous pouvez rechercher le nom de la couleur la plus utilisée dans l'image que vous sélectionnez.";
        buttonText = 'Sélectionnez une image.';
    } else {
        text = '選んだ画像に一番使われている色の名前を調べます。';
        buttonText = '画像を選ぶ。';
    }

    return (
        <Wrapper>
            <Header />
            {previewPic === null ? (
                <FormWrapper>
                    <P>{text}</P>
                    <Form name="selectFileForm">
                        <label htmlFor="selectFile" tabIndex="0">
                            {buttonText}
                        </label>
                        <input
                            type="file"
                            id="selectFile"
                            accept="image/*"
                            onChange={preview}
                        ></input>
                    </Form>
                </FormWrapper>
            ) : (
                <PreviewWrapper style={{ background: backgroundColor }}>
                    <div className="previewContainer">
                        <img
                            id="chosenPic"
                            style={imgStyles}
                            alt={picName}
                            src={picSrc}
                            onClick={getMainColor}
                            tabIndex="0"
                        />
                    </div>
                    <div>
                        {clickable ? (
                            <div>
                                写真をクリックすると、この写真で一番使われている色の名前が分かります。
                            </div>
                        ) : (
                            <div>
                                <div id="selectNameBox" style={fontColor}>
                                    {colorData.name}
                                </div>
                                <div>
                                    <Refresh
                                        fontColor={fontColor}
                                        onClick={() => refresh()}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </PreviewWrapper>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: beige;
`;

const FormWrapper = styled.div`
    height: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    justify-content: center;
`;

const P = styled.p`
    max-width: 50ch;
`;

const Form = styled.form`
    /* With a specific height to Form, translating label does not affect the P above */
    height: 100px;
    label {
        padding: 8px;
        width: 500px;
        border-bottom: solid 4px rgb(0, 181, 222);
        border-radius: 4px;
        color: white;
        background: rgb(2, 196, 240);
        display: flex;
        align-items: center;
        justify-content: center;
        word-spacing: 0.2rem;
    }
    label:active {
        -webkit-transform: translateY(4px);
        transform: translateY(2px); /*下に動く*/
        border-bottom: solid 2px rgb(0, 181, 222);
    }

    input {
        display: none;
    }
`;

const PreviewWrapper = styled.div`
    display: flex;
`;

export default CheckMainColor;
