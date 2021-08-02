import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../constants';

const Footer = () => {
    return <Wrapper id="about"><div>About</div><p>data sources</p><p>Github</p><p>Credit for photo, logomark, twitter</p></Wrapper>;
};

const Wrapper = styled.div`
    height: 250px;
    background: ${COLORS.Awafujiiro};
`;
export default Footer;
