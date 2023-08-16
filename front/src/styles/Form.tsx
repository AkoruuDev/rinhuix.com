import { styled } from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%;
    width: 80%;
    padding: 0 12px 25px 12px;
    margin: auto;

    overflow: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 6px;
        background-color: #000000;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #926f0f;
        border-radius: 20px;
        border: none;
    }

    span {
        cursor: pointer;
    }
`;

export {
    Form,
}