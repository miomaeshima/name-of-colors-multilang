import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import styled from 'styled-components/macro';
import { COLORS } from '../constants';

const Home = () => {
    return (
        <>
            <Wrapper>
                <Picture>
                    <source
                        srcSet="background-img.avif"
                        type="image/avif"
                    ></source>
                    <source
                        srcSet="background-img.webp"
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
    background: ${COLORS.HomeWrapper};
    color: white;
    padding-bottom: 100px;
    min-height: 100vh;
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
