import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Header from './Header';
import SelectButton from './SelectButton';
import { getMainRgb, Refresh, findFontColor, refreshPage } from '../utility';
import { useSelector } from 'react-redux';
import { COLORS, DIMENSIONS, nameStyles } from '../constants';
import Tooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';

const CheckMainColor = () => {
    const [previewPic, setPreviewPic] = useState(null);
    const [picSrc, setPicSrc] = useState(null);
    const [picName, setPicName] = useState('');
    const [colorData, setColorData] = useState({});
    const [backgroundColor, setBackgroundColor] = useState('transparent');
    const [widthAdjustment, setWidthAdjustment] = useState(0);
    const [heightAdjustment, setHeightAdjustment] = useState(0);
    const [originalColor, setOriginalColor] = useState(null);
    const [nameBoxHeightSmallScreen, setNameBoxHeightSmallScreen] = useState(0);

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
                let imageBox = document.getElementsByClassName('imageBox')[0];
                setWidthAdjustment(
                    Math.min(
                        0,
                        image.width * (imageBox.clientHeight / image.height) -
                            imageBox.clientWidth
                    )
                );
                setHeightAdjustment(
                    Math.min(
                        0,
                        image.height * (imageBox.clientWidth / image.width) -
                            imageBox.clientHeight
                    )
                );
                setNameBoxHeightSmallScreen(
                    document.getElementById('previewWrapper').clientHeight -
                        document.getElementById('renderedPic').clientHeight
                );
            };
        };
    }

    // Get main color data and populate ColorData and BackcgroundColor
    const getMainColor = async (e) => {
        let data = await getMainRgb(e, lang, setOriginalColor);
        setColorData(data);
        setBackgroundColor(`rgb(${data.r}, ${data.g}, ${data.b})`);
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

    let imgStyles = { clickableCursor };
    const lang = useSelector((state) => state.language[0]);

    let text, buttonText, textToClick, tooltipText, writingMode;

    if (lang === 'en') {
        text =
            'You can look up the name of the most used color in the image you select.';
        buttonText = 'Select an image.';
        textToClick =
            'Click on the image to find out the name of the most used color. You can also look up the name in Japanese or French by chaging the select menu above.';
        tooltipText = 'Refresh the image';
        writingMode = 'revert';
    } else if (lang === 'fr') {
        text =
            "Vous pouvez rechercher le nom de la couleur la plus utilisée dans l'image que vous sélectionnez.";
        buttonText = 'Sélectionnez une image.';
        textToClick =
            "Cliquez sur l'image pour connaître le nom de la couleur la plus utilisée. Vous pouvez également rechercher le nom en japonais ou en français en modifiant le menu de sélection ci-dessus.";
        tooltipText = "Rafraîchir l'image";
        writingMode = 'revert';
    } else {
        text = '選んだ画像に一番使われている色の名前を調べます。';
        buttonText = '画像を選ぶ。';
        textToClick =
            '画像をクリックすると色の名前が分かります。上のメニューを変えると英語、フランス語でも名前が調べられます。';
        tooltipText = '画像をリフレッシュ';
        writingMode = 'vertical-rl';
    }

    return (
        <Wrapper>
            <Header
                mainActivated={previewPic}
                setPreviewPic={setPreviewPic}
                setBackgroundColor={setBackgroundColor}
                setPicSrc={setPicSrc}
                setColorData={setColorData}
                originalColor={originalColor}
            />
            {previewPic === null ? (
                <SelectButton
                    text={text}
                    buttonText={buttonText}
                    preview={preview}
                />
            ) : (
                <PreviewWrapper
                    id="previewWrapper"
                    style={{ background: backgroundColor }}
                >
                    <Box className="imageBox">
                        <img
                            id="renderedPic"
                            style={imgStyles}
                            alt={picName}
                            src={picSrc}
                            onClick={getMainColor}
                            tabIndex="0"
                        />
                    </Box>

                    <Box
                        className="nameBox"
                        style={{
                            '--widthAdjustment': `${widthAdjustment}px`,
                            '--heightAdjustment': `${heightAdjustment}px`,
                            '--nameBoxHeightSmallScreen': `${nameBoxHeightSmallScreen}px`,
                        }}
                    >
                        {clickable ? (
                            <p>{textToClick}</p>
                        ) : (
                            <SelectNameBox
                                style={{
                                    ...fontColor,
                                    ...nameStyles,
                                    '--writingMode': writingMode,
                                }}
                            >
                                {colorData.name}
                            </SelectNameBox>
                        )}
                    </Box>
                    <Tooltip label={tooltipText}>
                        <IconWrapper>
                            <Refresh
                                fontColor={fontColor}
                                onClick={() =>
                                    refreshPage(
                                        setPreviewPic,
                                        setBackgroundColor,
                                        setPicSrc,
                                        setColorData
                                    )
                                }
                            />
                        </IconWrapper>
                    </Tooltip>
                </PreviewWrapper>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: ${COLORS.Gray};
`;

const PreviewWrapper = styled.div`
    height: calc(100% - 32px);
    display: flex;
    @media (max-width: 550px) {
        flex-direction: column;
    }
`;

const Box = styled.div`
    &.imageBox {
        width: ${DIMENSIONS.imageBoxWidthForLargerScreen};
        height: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: left top;
        }
        @media (max-width: 550px) {
            width: 100vw;
            height: 100vw;
        }
    }
    &.nameBox {
        flex: auto;
        display: flex;
        justify-content: center;

        /*margin-left to stretch nameBox when image is narrow.*/
        margin-left: var(--widthAdjustment);

        @media (max-width: 550px) {
            align-items: center;
            margin-left: 0px;
            /*margin-top to stretch nameBox when image is short.*/
            margin-top: var(--heightAdjustment);
        }
        p {
            padding: 32px;
            padding-top: 96px;
            max-width: 50ch;

            @media (max-width: 550px) {
                margin: 0px;
                padding: 32px;
            }
        }
    }
`;

const SelectNameBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    padding: 48px;
    writing-mode: var(--writingMode);

    @media (max-width: 550px) {
        padding: 24px;
        font-size: 24px;
        height: var(--nameBoxHeightSmallScreen);
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    bottom: 7px;
    right: 10px;
`;

export default CheckMainColor;
