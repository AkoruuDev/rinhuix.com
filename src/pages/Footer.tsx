import { styled } from "styled-components"
import { Space } from "../styles"
import { useNavigate } from "react-router-dom"

function Footer() {
    const navigate = useNavigate()

    return (
        <Bottom>
            <div>
                <Infos>
                    <div>
                        <p onClick={() => navigate('/sign-in')}>sign-in</p>
                        <p onClick={() => navigate('/sign-up')}>sign-up</p>

                        <p onClick={() => navigate('/library')}>library</p>
                        <p onClick={() => navigate('/systems')}>systems</p>
                        <p onClick={() => navigate('/cards')}>cards</p>
                    </div>
                    <div>
                        <p onClick={() => navigate('/new/char')}>new character</p>
                        <p onClick={() => navigate('/new/camp')}>new campaign</p>
                        <p onClick={() => navigate('/roll')}>roll</p>
                        <p onClick={() => navigate('/maps')}>maps</p>
                    </div>
                    <div>
                        <p onClick={() => navigate('/profile/me')}>profile</p>
                        <p onClick={() => navigate('/profile/me/cards')}>my cards</p>
                        <p onClick={() => navigate('/profile/me/char')}>my characters</p>
                        <p onClick={() => navigate('/profile/me/camp')}>my campaigns</p>
                    </div>
                    <div>
                        <p onClick={() => navigate('/about-us')}>about us</p>
                        <p onClick={() => navigate('/news')}>news</p>
                        <p onClick={() => navigate('/store')}>store</p>
                    </div>
                </Infos>
            
                <Wid><Space /></Wid>

                <Tm>
                    <span>Rinhuix &copy; 2021 - All rights reserved</span>
                    <span>Created by Akoruu Dev</span>
                </Tm>
            </div>
        </Bottom>
    )
};

const Bottom = styled.footer`
    width: 100vw;
    display: flex;
    justify-content: center;

    padding: 40px 0;
    background-color: #1f1f1f;
    color:#fff;
    font-size:.8rem;

    & > div {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    span {
        font-family: 'Bruno Ace SC', cursive;
    }
`

const Infos = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 700;

    p {
        margin-bottom: 18px;
        cursor: pointer;
    }

    @media(max-width: 430px) {
        flex-direction: column;
        align-items: center;

        & div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
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

const Tm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export {
    Footer,
}