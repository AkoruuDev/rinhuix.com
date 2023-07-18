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

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Bruno Ace SC', cursive;
    }

    p, span {
        font-family: 'Julius Sans One', sans-serif;
    }
`;

export {
    Container,
}