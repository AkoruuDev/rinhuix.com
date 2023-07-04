import { useNavigate } from "react-router-dom";
import { CommingSoon } from "../services/CommingSoon";
import { keyframes, styled } from "styled-components";

function PageNotFound() {
    const wait = false;
    const navigate = useNavigate();

    return (
        <div>
            {
                wait ?
                <CommingSoon /> :
                <Container>
                    <Text>
                    <div>ERROR</div>
                    <h1>404</h1>
                    <div>Page Not Found</div>
                    </Text>

                    <Astronaut>
                    <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" className="src" />
                    </Astronaut>
                    <Back onClick={() => navigate('/')}>back home</Back>
                </Container>
            }
        </div>
    )
}

document.addEventListener("DOMContentLoaded",function(){

    var body=document.body;
    setInterval(createStar,100);
    function createStar(){
        var right=Math.random()*500;
        // eslint-disable-next-line no-restricted-globals
        var top=Math.random()*screen.height;
        var star=document.createElement("star");
        star.classList.add("star")
        body.appendChild(star);
        setInterval(runStar,10);
        star.style.top=top+"px";
        function runStar(){
            // eslint-disable-next-line no-restricted-globals
            if(right>=screen.width){
                star.remove();
            }
            right+=3;
            star.style.right=right+"px";
        }
    } 
})

const astronautFly = keyframes`
    0%{
        left: -100px;
    }
    25%{
        top: 50%;
        transform: rotate(30deg);
    }
    50%{
        transform: rotate(45deg);
        top: 55%;
    }
    75%{
        top: 60%;
        transform: rotate(30deg);
    }
    100%{
        left: 110%;
        transform: rotate(45deg);
    }
`
/* const starTwinkle = keyframes
    0%{
        background: rgba(255,255,255,0.4);
    }
    25%{
        background: rgba(255,255,255,0.8);
    }
    50%{
        background: rgba(255,255,255,1);
    }
    75%{
        background: rgba(255,255,255,0.8);
    }
    100%{
        background: rgba(255,255,255,0.4);
    }
 */

const Container = styled.div`
    width: 100vw;
    margin: 0;
    padding: 0;
    font-family: 'Tomorrow', sans-serif;
    height: 100vh;
    background-image: linear-gradient(to top, #2e1753, #1f1746, #131537, #0d1028, #050819);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const Text = styled.div`
    position: absolute;
    top: 10%;
    color: #fff;
    text-align: center;

    & h1{
        font-size: 50px;
    }
`

const Astronaut = styled.div`
    & img{
        width: 100px;
        position: absolute;
        top: 55%;
        animation: ${astronautFly} 6s infinite linear;
    }
`

const Back = styled.div`
    position: fixed;
    bottom: 5em;

    color: black;
    background-color: #00bb92;
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
        border: 3px solid #000000;
        background-color: transparent;
        color: #00bb92;
        transform: scale(1.1);
    }
`

export {
    PageNotFound
}