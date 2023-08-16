import styled from "styled-components"

const Login = styled.section`
    height: 100vh;
    width: calc(50vw - 80px);
    position: absolute;
    right: 80px;

    background-color: #73737320;
    transition: all 0.5s ease;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;

    @media(max-width: 815px) {
        height: 80vh;
        width: 100vw;
        right: 0;
        border-radius: 50px 50px 0 0;
        bottom: 0;
        
        & form {
            margin: 80px 0 20px 0;
        }
    }

    @media(max-height: 540px) {
        height: 80vh;
    }
`

export {
    Login
}