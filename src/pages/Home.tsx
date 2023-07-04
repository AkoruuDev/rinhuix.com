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
                    {/* <Button onClick={() => navigate('/')}>Home</Button>
                    <Button onClick={() => navigate('/sign-in')}>SignIn</Button>
                    <Button onClick={() => navigate('/sign-up')}>SignUp</Button>
                    <Button onClick={() => navigate('*')}>PageNotFound</Button>

                    <Button onClick={() => navigate('/library')}>Library</Button>
                    <Button onClick={() => navigate('/systems')}>Systems</Button>
                    <Button onClick={() => navigate('/roll')}>Roll</Button>
                    <Button onClick={() => navigate('/maps')}>Maps</Button>
                    <Button onClick={() => navigate('/about-us')}>AboutUs</Button>
                    <Button onClick={() => navigate('/news')}>News</Button>
                    <Button onClick={() => navigate('/store')}>Store</Button>
                    <Button onClick={() => navigate('/cards')}>Cards</Button>
                    <Button onClick={() => navigate('/new/char')}>NewChar</Button>
                    <Button onClick={() => navigate('/new/camp')}>NewCamp</Button>
                    
                    <Button onClick={() => navigate('/profile/me')}>Me</Button>
                    <Button onClick={() => navigate('/profile/me/cards')}>MyCards</Button>
                    <Button onClick={() => navigate('/profile/me/char')}>MyChars</Button>
                    <Button onClick={() => navigate('/profile/me/camp')}>MyCamp</Button> */}
                </Container>
            }
        </div>
    )
}

export {
    Home
}