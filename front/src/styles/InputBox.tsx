import { styled } from "styled-components";

const InputBox = styled.div`
    width: 100%;
    position: relative;

    span {
        position: absolute;
        right: 20px;
        top: calc(50% - 15px);
    }
`
const InBoxColl = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    & input, & select {
        width: 48%;
    }
`

export {
    InputBox,
    InBoxColl,
}