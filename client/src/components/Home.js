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
    color: white;
`;

const Picture = styled.picture`
    img {
        position: absolute;  
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;

export default Home;
