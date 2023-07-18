import { styled } from "styled-components";

function LogoWhite() {
    return (
        <ImageW src="https://github.com/AkoruuDev/rinhuix.com/blob/main/src/assets/logo-white.png?raw=true" alt="" />
    )
}

function LogoBlack() {
    return (
        <ImageB src="https://github.com/AkoruuDev/rinhuix.com/blob/main/src/assets/logo-black.png?raw=true" alt="" />
    )
}

const ImageW = styled.img`
    width: 100%;
`;

const ImageB = styled.img`
    width: 120%;

    @media(min-width: 650px) {
        height: 80%;
        width: auto;
    }
`;

export {
    LogoWhite,
    LogoBlack,
}