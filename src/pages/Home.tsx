import { useNavigate } from "react-router-dom";
import { CommingSoon } from "../services/commingSoon/CommingSoon";
import { Button, Container } from "../styles";
import { AiOutlineMenu } from 'react-icons/ai';
import { logo } from '../assets/new-logo.png';

function Home() {
    const wait = false;
    const navigate = useNavigate();

    return (
        <div>
            {
                wait ?
                <CommingSoon /> :
                <Container>
                    <div>
                        <div><AiOutlineMenu /></div>
                        <div>
                            <Button onClick={() => navigate('/sign-in')}>SignIn</Button>
                            <Button onClick={() => navigate('/sign-up')}>SignUp</Button>
                        </div>
                    </div>
                    <section>
                        <img src={logo} alt="rinhuix logo" />
                    </section>
                </Container>
            }
        </div>
    )
}

export {
    Home
}