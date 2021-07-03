import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const ButtonContainer = () => {
    return (
        <Wrapper>
            <Link to="/main_color">Main Color</Link>
            <Link to="/any_color">Any Color</Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
`;
export default ButtonContainer;
