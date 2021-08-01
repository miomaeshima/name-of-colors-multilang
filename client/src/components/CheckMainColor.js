import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Header from './Header';
import SelectButton from './SelectButton';
import { getMainRgb, Refresh, findFontColor, refreshPage } from '../utility';
import { useSelector } from 'react-redux';
import { COLORS, nameStyles } from '../constants';
import Tooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';

const CheckMainColor = () => {
    const [previewPic, setPreviewPic] = useState(null);
    const [picSrc, setPicSrc] = useState(null);
    const [picName, setPicName] = useState('');
    const [colorData, setColorData] = useState({});
    const [backgroundColor, setBackgroundColor] = useState('transparent');
    //State "wide" means pic's width > height
    const [wide, setWide] = useState(true);
    const [originalColor, setOriginalColor] = useState(null);

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
                if (image.width <= image.height) {
                    setWide(false);
                }
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

    let dimension = { width: 'auto', height: '100%' };
    if (wide) {
        dimension = { width: '60vw', height: 'auto' };
    }

    let imgStyles = { ...clickableCursor, ...dimension };

    const lang = useSelector((state) => state.language[0]);

    let text, buttonText, textToClick, tooltipText, styles;

    if (lang === 'en') {
        text =
            'You can look up the name of the most used color in the image you select.';
        buttonText = 'Select an image.';
        textToClick =
            'Click on the image to find out the name of the most used color. You can also look up the name in Japanese or French by chaging the select menu above.';
        tooltipText = 'Refresh the image';
        styles = nameStyles;
    } else if (lang === 'fr') {
        text =
            "Vous pouvez rechercher le nom de la couleur la plus utilisée dans l'image que vous sélectionnez.";
        buttonText = 'Sélectionnez une image.';
        textToClick =
            "Cliquez sur l'image pour connaître le nom de la couleur la plus utilisée. Vous pouvez également rechercher le nom en japonais ou en français en modifiant le menu de sélection ci-dessus.";
        tooltipText = "Rafraîchir l'image";
        styles = nameStyles;
    } else {
        text = '選んだ画像に一番使われている色の名前を調べます。';
        buttonText = '画像を選ぶ。';
        textToClick =
            '画像をクリックすると色の名前が分かります。上のメニューを変えると英語、フランス語でも名前が調べられます。';
        tooltipText = '画像をリフレッシュ';
        styles = { ...nameStyles, ...{ writingMode: 'vertical-rl' } };
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
                            <SelectNameBox style={{ ...fontColor, ...styles }}>
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
    background: ${COLORS.UsukumonezuGray};
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
        p {
            margin-top: 96px;
            max-width: 50ch;
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
`;

const IconWrapper = styled.div`
    position: absolute;
    bottom: 7px;
    right: 10px;
`;

export default CheckMainColor;
