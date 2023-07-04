import { useNavigate } from "react-router-dom";
import { CommingSoon } from "../services/CommingSoon";
import { Button, Container, Space } from "../styles";
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/new-logo.png';
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
                            <img src={logo} alt="rinhuix logo" />
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
                            <h1>Hear your called</h1>
                            <Space />
                            <p>
                                Imagine that all your life was only a dream and NOW you waked up
                            </p>
                            <p>
                                All your turn is new and fantastic with dragons and magic and you are one their
                            </p>
                            <Space />
                            <p>Explore a new world and meet new people</p>
                            <p>Explore dungeons and recive items</p>
                            <p>Make a perfect world to you</p>
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
    padding-top: 18vh;
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
    }
`;

const Login = styled.div`
    display: flex;
    justify-content: right;
    gap:.8em;
    cursor: pointer;
    user-select: none;
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
    }

    h1 {
        font-family: 'Bruno Ace SC', cursive;
    }

    p {
        font-family: 'Julius Sans One', sans-serif;
    }
`

const SecOne = styled(Section)`
    margin-bottom: 100px;
`

const SecTwo = styled(Section)`
    background-color: #303030;
    border-radius: 50px 50px 0 0;
    padding: 40px 0;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export {
    Home
}