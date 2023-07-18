import { styled } from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 200px);
    width: 80%;
    margin: auto;

    span {
        cursor: pointer;
    }
`;

export {
    Form,
}