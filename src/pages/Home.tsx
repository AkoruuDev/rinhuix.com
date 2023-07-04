import { useNavigate } from "react-router-dom";
import { CommingSoon } from "../services/commingSoon/CommingSoon";
import { Button, Container } from "../styles";
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/new-logo.png';
import { styled } from "styled-components";
import { IconContext } from "react-icons";

function Home() {
    const wait = false;
    const navigate = useNavigate();

    return (
        <div>
            {
                wait ?
                <CommingSoon /> :
                <Container>
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
                    <section>
                        <div>
                            <img src={logo} alt="rinhuix logo" />
                            <Title>
                                <h1>RINHUIX</h1>
                                <p>
                                    tell me child, what would have in your perfect world?
                                </p>
                            </Title>
                        </div>
                    </section>
                </Container>
            }
        </div>
    )
}

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

const Title = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    h1 {
        font-family: 'Bruno Ace SC', cursive;
    }

    p {
        font-family: 'Julius Sans One', sans-serif;
    }
`

export {
    Home
}