import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import styled from 'styled-components/macro';

const Home = () => {
    return (
        <>
            <Wrapper>
                <Picture>
                    <source
                        srcset="background-img.avif"
                        type="image/avif"
                    ></source>
                    <source
                        srcset="background-img.webp"
                        type="image/webp"
                    ></source>
                    <img src="background-img.jpg" alt="" />
                </Picture>
                <Header />
                <Main />
            </Wrapper>
            <Footer />
        </>
    );
};

const Wrapper = styled.div`
    height: 100vh;
    /* background-image: url('background-img.avif'); */

    /* background-image: -webkit-image-set(
        url('background-img.avif') 1x,
        url('background-img.webp') 1x,
        url('background-img.jpg') 1x
    );
    background-image: image-set(
        url('background-img.avif') type('image/avif'),
        url('background-img.webp') type('image/webp'),
        url('background-img.jpg') type('image/jpg')
    ); */
    /* background-size: cover; */
    color: white;
`;

const Picture = styled.picture`
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;

export default Home;
