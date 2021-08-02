import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

const titleJa = '色の名前';
const titleEn = 'Names of Colors';
const titleFr = 'Noms de Couleurs';

const Main = () => {
    const lang = useSelector((state) => state.language[0]);

    let title;
    if (lang === 'en') {
        title = titleEn;
    } else if (lang === 'fr') {
        title = titleFr;
    } else {
        title = titleJa;
    }

    let text;
    if (lang === 'en') {
        text = (
            <>
                <p>
                    Names of colors are fascinating. Words like cerulean,
                    bittersweet shimmer, and lavender blush can evoke moods and
                    emotions. On this website, you can look up the names of the
                    colors in any image on your device by simply selecting it
                    and clicking on it.
                </p>

                <p>
                    Interesting names exist in different languages. Here you can
                    look up names in English, French, or Japanese* by switching
                    between different languages/palettes on the select menu in
                    the right top corner of the screen.
                </p>

                <p>
                    You can search color names in two different ways. On the
                    "Main Color" page, you can look up the name of the most used
                    color in an image. The other way is to click on any part
                    (i.e., pixel) within a picture to get the color name. You do
                    that on the "Any Color" page.
                </p>
                <p>
                    The way it works is that the app finds the exact match to
                    the color you want to know the name of, or if the exact
                    match doesn't exist in the palette, the closest color and
                    returns its name.* As the number and the types of colors are
                    not the same among the palettes, you can get a different
                    result depending on the palette.
                </p>
                <p>
                    * Regarding Japanese, you get names of traditional Japanese
                    colors used in the country's classical arts. <br /> * The
                    app sends only the RGB value of a particular color and not
                    your image over the Internet.
                </p>
            </>
        );
    } else if (lang === 'fr') {
        text = (
            <>
                <p>
                    Les noms des couleurs sont fascinants. Des mots comme bleu
                    de minuit, framboise ou queue-de-renard peuvent évoquer des
                    images. Sur ce site, vous pouvez rechercher les noms des
                    couleurs dans n'importe quelle image sur votre appareil en
                    la sélectionnant et en cliquant dessus.
                </p>
                <p>
                    Des noms intéressants existent dans différentes langues.
                    Ici, vous pouvez rechercher des noms en anglais, en français
                    ou en japonais* en passant d'une palette à l'autre dans le
                    menu de sélection situé dans le coin supérieur droit de
                    l'écran.
                </p>
                <p>
                    Vous pouvez rechercher des noms de couleurs de deux manières
                    différentes. Sur la page "Main Color", vous pouvez
                    rechercher le nom de la couleur la plus utilisée dans une
                    image. L'autre méthode consiste à cliquer sur n'importe
                    quelle partie (c'est-à-dire un pixel) d'une image pour
                    obtenir le nom de la couleur. Vous pouvez le faire sur la
                    page "Any Color".
                </p>
                <p>
                    L'application trouve la correspondance exacte de la couleur
                    dont vous voulez connaître le nom ou, si ça exacte n'existe
                    pas dans la palette, la couleur la plus proche et renvoie
                    son nom. Comme le nombre et les types de couleurs ne sont
                    pas les mêmes d'une palette à l'autre, vous pouvez obtenir
                    un résultat différent selon la palette.
                </p>
                <p>
                    * En ce qui concerne le japonais, vous obtenez les noms des
                    couleurs traditionnelles japonaises utilisées dans l’art et
                    l’artisanat japonais.
                    <br />* L'application envoie uniquement la valeur RVB d'une
                    couleur particulière et pas votre image sur internet.
                </p>
            </>
        );
    } else {
        text = (
            <>
                <p>
                    日本の伝統色には味わい深い名前がいっぱい。こちらのサイトでは、お手持ちの画像の中にどんな伝統色があるのか、画像を選び、クリックするだけで調べられます。
                </p>
                <p>
                    趣のある色の名前を持つのは日本語だけではありません。画面右上の「日本の伝統色」と出ているプルダウンメニューから、英語、フランス語のパレットにも切り替えられます。
                </p>
                <p>
                    このサイトでは、色について二つの選び方を用意しています。一つはMain
                    Colorというページで、画像で一番使われている色について調べられます。もう一つはAny
                    Colorというページで、こちらでは、画像上のどこでもクリックした場所の色について調べることができます。どちらのページも、選んだパレットから、調べたい色か、その色がなければ、それに一番近い色が選びだされて返ってきます。
                </p>
                <p>
                    「日本の伝統色」、「English」、「Français」の各パレットにある色の数や種類が違うのでパレットによって「一番近い色」も変わってきます。実際にパレット／言語を切り替えると、返ってくる色と名前が変わるのに気づかれるでしょう。
                </p>
            </>
        );
    }

    return (
        <Wrapper>
            <Title>{title}</Title>
            <Intro>{text}</Intro>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    width: clamp(500px, 68vw, 1030px);    
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px 64px 32px 64px;
    background: rgba(0, 0, 150, 0.125);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`;

const Title = styled.div`
    font-family: '游明朝', 'Yu Mincho', YuMincho, 'Hiragino Mincho Pro', serif;
    font-size: 56px;
`;

const Intro = styled.div`
    padding-left: 5px;
    column-width: 300px;
    column-gap: 48px;
    color: white;
    p {
        margin-bottom: 16px;
    }
`;

export default Main;
