import { styled } from "styled-components";

const Button = styled.div`
    color: #000000;
    background-color: #646464;
    border: 3px solid #000000;
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

    &:hover {
        border: 3px solid #646464;
        background-color: transparent;
        color: #646464;
        transform: scale(1.1);
    }
`;

export {
    Button,
}