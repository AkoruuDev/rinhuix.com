import { styled } from "styled-components";

const Input = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 80px;
    border: transparent;
    font-family: 'Julius Sans One', sans-serif;

    margin: 8px 0;
    padding: 0 55px 0 24px;
`;

const InSelect = styled.select`
    width: 100%;
    height: 50px;
    border-radius: 80px;
    border: transparent;

    margin: 8px 0;
    padding: 0 15px;
    font-family: 'Julius Sans One', sans-serif;
`;

export {
    Input,
    InSelect,
}