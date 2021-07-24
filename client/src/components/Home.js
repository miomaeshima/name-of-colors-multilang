import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import styled from 'styled-components/macro';

const Home = () => {
    return (
        <>
            <Wrapper>
                <Header />
                <Main />
            </Wrapper>
            <Footer />
        </>
    );
};

const Wrapper = styled.div`
    height: 100vh;
    background-image: url('backgroundImg.jpg');
    background-size: cover;
    color: white;
`;

export default Home;
