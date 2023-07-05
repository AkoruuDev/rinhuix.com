import { styled } from "styled-components";
import { CommingSoon } from "../../services/CommingSoon";
import { Button, Container, Form, Input, InputBox, LogoWhite, Space } from "../../styles";
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IconContext } from "react-icons";

function SignIn() {
    const [user, setUser] = useState({});
    const [send, setSend] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [passType, setPassType] = useState('password');
    const wait = false;
    const navigate = useNavigate()

    function getUser(value: string, name: string) {
        setUser({
            ...user,
            [name]: value
        })
    }

    function sendMe(event: { preventDefault: () => void; } | undefined) {
        event?.preventDefault();
        setSend(true)
    }

    function togglePass() {
        setShowPass(!showPass)
        if(passType === 'password') {
            setPassType("text")
        } else {
            setPassType("password")
        }
    }

    useEffect(() => {
        if(send) {
            console.log(user)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [send])

    return (
        <div>
            {
                wait ?
                <CommingSoon /> :
                <Container>
                    <Logo onClick={() => navigate('/')}>
                        <LogoWhite />
                        <h1>RINHUIX</h1>
                    </Logo>
                    <Login>
                        <h1>sign in</h1>
                        <Form onSubmit={sendMe}>
                            <InputBox>
                                <Input onChange={(e: { target: { value: any; name: any; }; }) => {
                                    getUser(
                                        e.target.value,
                                        e.target.name
                                    )
                                }}
                                name="email" type="text" placeholder='email'/>
                            </InputBox>
                            <InputBox>
                                <Input onChange={(e: { target: { value: any; name: any; }; }) => {
                                    getUser(
                                        e.target.value,
                                        e.target.name
                                    )
                                }}
                                name="password" type={passType} placeholder='password'/>
                                <span onClick={() => togglePass()}>
                                    <IconContext.Provider value={{ color: "#070808", size: "30px", style: { cursor: "pointer" } }}>
                                        {showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
                                    </IconContext.Provider>
                                </span>
                            </InputBox>
                            <Button type='submit'>Sign In</Button>
                            <span onClick={() => navigate('/sign-up')}>Don't have an account?</span>
                            <Space />
                            <OAuth>
                                <FcGoogle />
                                <p>login with Google</p>
                            </OAuth>
                        </Form>
                    </Login>
                </Container>
            }
        </div>
    )
}

const Logo = styled.div`
    position: absolute;
    top: 80px;
    left: 80px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    h1 {
        margin-left: 14px;
    }
`

const Login = styled.section`
    height: 100vh;
    width: 450px;
    position: absolute;
    right: 80px;

    background-color: #1f1f1f34;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        margin-top: 100px;
    }
`

const OAuth = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
    color: #292929;
    font-weight: 700;
    cursor: pointer;
    p {
        margin-left: 15px;
    }
`

export {
    SignIn
}