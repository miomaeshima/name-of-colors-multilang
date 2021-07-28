import styled from 'styled-components/macro';

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
`;

const P = styled.p`
    max-width: 50ch;
`;

const Form = styled.form`
    /* With a specific height to Form, translating label does not affect the P above */
    height: 100px;
    label {
        padding: 8px;
        width: 500px;
        border-radius: 4px;
        border-bottom: solid 4px rgb(0, 181, 222);
        background: rgb(2, 196, 240);
        display: flex;
        align-items: center;
        justify-content: center;
        word-spacing: 0.2rem;
        cursor: pointer;
    }
    label:active {
        -webkit-transform: translateY(4px);
        transform: translateY(2px); /*下に動く*/
        border-bottom: solid 2px rgb(0, 181, 222);
    }

    input {
        display: none;
    }
`;
export default SelectButton;
