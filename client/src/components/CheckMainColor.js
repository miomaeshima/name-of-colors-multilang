import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Header from './Header';
import { getMainRgb, Refresh, findFontColor } from '../utility';
import { useSelector } from 'react-redux';
import { clearConfigCache } from 'prettier';

const CheckMainColor = () => {
    const [previewPic, setPreviewPic] = useState(null);
    const [picSrc, setPicSrc] = useState(null);
    const [picName, setPicName] = useState('');
    const [colorData, setColorData] = useState({});
    const [backgroundColor, setBackgroundColor] = useState('transparent');
    //State "wide" means pic's width > height
    const [wide, setWide] = useState(true);

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
        console.log(lang);
        let data = await getMainRgb(e, lang);
        setColorData(data);
        setBackgroundColor(`rgb(${data.r}, ${data.g}, ${data.b})`);
    };

    const refresh = () => {
        setPreviewPic(null);
        setBackgroundColor('transparent');
        setColorData({});
        setPicSrc(null);
    };

    let fontColor = findFontColor(colorData);

    let clickable = false;
    if (Object.keys(colorData).length === 0) {
        clickable = true;
    }

    let clickableCursor = { cursor: 'revert' };
    if (clickable) {
        clickableCursor = { cursor: 'pointer' };
    }

    let dimension = { width: 'auto', height: '100%' };
    if (wide) {
        dimension = { width: '60vw', height: 'auto' };
    }

    let imgStyles = { ...clickableCursor, ...dimension };

    const lang = useSelector((state) => state.language[0]);

    let text;
    let buttonText;
    let textToClick;

    if (lang === 'en') {
        text =
            'You can look up the name of the most used color in the image you select.';
        buttonText = 'Select an image.';
        textToClick =
            'Click on the image to find out the name of the most used color. You can also look up the name in Japanese or French by chaging the select menu above.';
    } else if (lang === 'fr') {
        text =
            "Vous pouvez rechercher le nom de la couleur la plus utilisée dans l'image que vous sélectionnez.";
        buttonText = 'Sélectionnez une image.';
        textToClick =
            "Cliquez sur l'image pour connaître le nom de la couleur la plus utilisée. Vous pouvez également rechercher le nom en japonais ou en français en modifiant le menu de sélection ci-dessus.";
    } else {
        text = '選んだ画像に一番使われている色の名前を調べます。';
        buttonText = '画像を選ぶ。';
        textToClick =
            '画像をクリックすると色の名前が分かります。上のメニューを変えると英語、フランス語でも名前が調べられます。';
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
                    <Box>
                        <img
                            id="chosenPic"
                            style={imgStyles}
                            alt={picName}
                            src={picSrc}
                            onClick={getMainColor}
                            tabIndex="0"
                        />
                    </Box>
                    <Box className="nameBox">
                        {clickable ? (
                            <p>{textToClick}</p>
                        ) : (
                            <div>
                                <div id="selectNameBox" style={fontColor}>
                                    {colorData.name}
                                </div>
                                <Refresh
                                    fontColor={fontColor}
                                    onClick={() => refresh()}
                                />
                            </div>
                        )}
                    </Box>
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
        border-radius: 4px;
        border-bottom: solid 4px rgb(0, 181, 222);
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
    height: calc(100% - 32px);
    display: flex;
`;

const Box = styled.div`
    &.nameBox {
        flex: auto;
        display: flex;
        justify-content: center;
        padding-top: 32px;

        position: relative;

        p {
            max-width: 50ch;
        }

        Refresh {
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
`;

export default CheckMainColor;
