import { useNavigate } from "react-router-dom";
import { CommingSoon } from "../services/CommingSoon";
import { Button, Container, LogoBlack, Space } from "../styles";
import { AiOutlineMenu } from 'react-icons/ai';
import { styled } from "styled-components";
import { IconContext } from "react-icons";
import { Footer } from "./Footer";

function Home() {
    const wait = false;
    const navigate = useNavigate();

    return (
        <div>
            {
                wait ?
                <CommingSoon /> :
                <ContainerHome>
                    <Nav>
                        <div>
                            <IconContext.Provider value={{ color: "#f7f7f7", size: "50px", style: { cursor: "pointer" } }}>
                                <AiOutlineMenu />
                            </IconContext.Provider>
                            <Login>
                                <Button onClick={() => navigate('/sign-in')}>SignIn</Button>
                                <Button onClick={() => navigate('/sign-up')}>SignUp</Button>
                            </Login>
                        </div>
                    </Nav>
                    <SecOne>
                        <div>
                            <Size>
                                <LogoBlack />
                            </Size>
                            <Title>
                                <h1>RINHUIX</h1>
                                <p>
                                    tell me child, what would have in your perfect world?
                                </p>
                            </Title>
                        </div>
                    </SecOne>
                    <SecTwo>
                        <div>
                            <h1>Listen to your calling</h1>
                            <Wid><Space /></Wid>
                            <p>
                                What if all your life was just a dream and now you woke up
                            </p>
                            <p>  
                                verything around you is new and wondrous, with dragons and magic, and you were a part of that everything?
                            </p>
                            <Wid><Space /></Wid>
                            <p>Live in a new world and meet new people</p>
                            <p>Explore dungeons and receive amazing items</p>
                            <p>Craft your own perfect world</p>
                        </div>
                    </SecTwo>
                    <Footer />
                </ContainerHome>
            }
        </div>
    )
}

const ContainerHome = styled(Container)`
    justify-content: flex-start;
    padding-top: 15vh;
    overflow-x: hidden;

    @media(min-width: 650px) {
        padding-top: 10vh;
    }
`

const Nav = styled.nav`
    position: fixed;
    top: 0px;

    width: 100vw;
    height: 100px;

    display: flex;
    justify-content: center;

    background-color: #73737320;

    & > div {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.5s ease;

        @media(max-width: 420px) {
            width: 20%;
            justify-content: center;
        }
    }
`;

const Login = styled.div`
    display: flex;
    justify-content: right;
    gap:.8em;
    cursor: pointer;
    user-select: none;
    transition: all 0.5s ease;

    @media (max-width: 420px) {
        display: none;
    }
`;

const Section = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    & div {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease;
    }

    h1 {
        font-family: 'Bruno Ace SC', cursive;
    }

    p {
        font-family: 'Julius Sans One', sans-serif;
    }
`

const SecOne = styled(Section)`
    margin-bottom: 80px;
`

const Size = styled.div`
    width: 100vw;
`

const SecTwo = styled(Section)`
    text-align: center;
    background-color: #303030;
    border-radius: 50px 50px 0 0;
    padding: 40px 0;

    & h1 {
        font-size: 26px;
        transition: all 0.5s ease;
    }

    & p {
        font-size: 15px;
        transition: all 0.5s ease;
    }

    @media(max-width: 500px) {
        & h1 {
            font-size: 18px;
        }

        & p {
            font-size: 10px;
        }
    }
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    & h1 {
        font-size: 36px;
        transition: all 0.5s ease;
    }

    & p {
        font-size: 15px;
        transition: all 0.5s ease;
    }

    @media(max-width: 420px) {
        & h1 {
            font-size: 26px;
        }

        & p {
            font-size: 10px;
        }
    }
`

const Wid = styled.span`
    width: 30%;
    transition: all 0.5s ease;

    @media(max-width: 500px) {
        width: 50%;
    }
`

export {
    Home
}