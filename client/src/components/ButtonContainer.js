import React from 'react';
import styled from 'styled-components/macro';

const ButtonContainer = () => {
    return (
        <Wrapper>
            <button>Main Color</button>
            <button>Any Color</button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
`;
export default ButtonContainer;
