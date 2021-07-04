import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { pink } from 'color-name';

let styles = {
    border: '1px solid pink',
    background: pink,
};
const Home = () => {
    return (
        <>
            <Header style={{background: pink}} />
            <Main />
            <Footer />
        </>
    );
};

export default Home;
