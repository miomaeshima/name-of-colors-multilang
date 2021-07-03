import React from 'react';
import styled from 'styled-components/macro';
import Header from './Header';

const MainColor = () => {
    return <Wrapper><Header/></Wrapper>;
};

const Wrapper = styled.div`
    width: 100%;
    height: 500px;
    background: pink;
`;

export default MainColor;
