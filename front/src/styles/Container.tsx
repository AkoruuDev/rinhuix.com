import { styled } from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #010202;
    color: #e4e2e2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    overflow: hidden;
    overflow-y: auto;

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Bruno Ace SC', cursive;
    }

    p, span {
        font-family: 'Julius Sans One', sans-serif;
    }

    &::-webkit-scrollbar {
        width: 6px;
        background-color: #000000;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #926f0f;
        border-radius: 20px;
        border: none;
    }
`;

export {
    Container,
}