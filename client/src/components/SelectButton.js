import styled from 'styled-components/macro';
import { COLORS } from '../constants';

const SelectButton = (props) => {
    return (
        <FormWrapper>
            <P>{props.text}</P>
            <Form name="selectFileForm">
                <label htmlFor="selectFile" tabIndex="0">
                    {props.buttonText}
                </label>
                <input
                    type="file"
                    id="selectFile"
                    accept="image/*"
                    onChange={props.preview}
                ></input>
            </Form>
        </FormWrapper>
    );
};

const FormWrapper = styled.div`
    height: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    justify-content: center;
    padding: 32px;
`;

const P = styled.p`
    max-width: 50ch;
`;

const Form = styled.form`
    /* By giving a specific height to Form, one can avoid translating label affecting the P above */
    height: 100px;
    label {
        padding: 8px;
        width: clamp(300px, 70vw, 500px);
        border-radius: 4px;
        border-bottom: solid 4px ${COLORS.ButtonDarkBlue};
        background: ${COLORS.ButtonLightBlue};
        display: flex;
        align-items: center;
        justify-content: center;
        word-spacing: 0.2rem;
        cursor: pointer;
    }
    label:active {
        -webkit-transform: translateY(4px);
        transform: translateY(2px); /*δΈγ«εγ*/
        border-bottom: solid 2px rgb(0, 181, 222);
    }

    input {
        display: none;
    }
`;
export default SelectButton;
