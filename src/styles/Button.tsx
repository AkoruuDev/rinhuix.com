import { styled } from "styled-components";

const Button = styled.div`
    color: #010202;
    background-color: #e4e2e2;
    border: 3px solid #010202;
    border: 3px solid transparent;
    padding: 16px 32px;
    text-align: center;
    font-size: 16px;
    margin: 35px 0;
    border-radius: 32px;
    width: fit-content;
    transition:.3s ease all;
    cursor: pointer;
    font-weight: 700;
    font-family: 'Julius Sans One', sans-serif;

    &:hover {
        border: 3px solid #e4e2e2;
        background-color: transparent;
        color: #e4e2e2;
        transform: scale(1.1);
    }
`;

export {
    Button,
}