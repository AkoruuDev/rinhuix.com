import { useNavigate } from "react-router-dom"
import { keyframes, styled } from "styled-components"

function CommingSoon() {
    const navigate = useNavigate();

    return(
        <Container>
            <Text>
                <h1>
                    RINHUIX CALL YOU
                </h1>
                <span>
                    COMMING SOON
                </span>
            </Text>

            <Back onClick={() => navigate('/')}>back home</Back>
        </Container>
    )
}

const bgKey = keyframes`
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100% ;
    }
    100% {
        background-position: 0% 0%;
    }
`

const Container = styled.div`
    width: 100vw;
    margin: 0;
    padding: 0;
    font-family: 'Tomorrow', sans-serif;
    height: 100vh;
    background-image: linear-gradient(to top, #636909, #5b690a, #464e0e, #38380e, #191905);
    background-size: 400% 400%;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transform: all 6s ease;
    animation: ${bgKey} 6s ease infinite;
`

const Text = styled.div`
    text-align:center;
    color:#fff;
    position: absolute;
    h1{
        letter-spacing:-1px;
        line-height:.9em;
        font-weight:bold;
        font-size:36px;
    }

    span{
        position:relative;
        z-index:1;
        &:before{
            content:"";
            position:absolute;
            bottom:0;
            left:0;
            right:0;
            margin:auto;
            z-index:-1;
            background: black;
            opacity:.5;
            clip-path:polygon(
                0 0%,
                100% 0%,
                100% 100%,
                0 100%
            );
            transition:all cubic-bezier(.5,-0.5,.5,1).3s
        }
        &--active::after,&--active::before{
            height:100%
        }
        &--active::before{
            width:40%;
            left:-20%;
            top:-20%
        }
        &--active::after{
            top:inherit;
            bottom:-20%;width:40%
        }
    }
`

const Back = styled.div`
    position: fixed;
    bottom: 5em;

    color: black;
    background-color: #2e3100;
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
        border: 3px solid #2e3100;
        background-color: transparent;
        color: #000000;
        transform: scale(1.1);
    }
`

export {
    CommingSoon
}