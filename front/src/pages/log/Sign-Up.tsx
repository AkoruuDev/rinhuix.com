import { styled } from "styled-components";
import { CommingSoon } from "../../services/CommingSoon";
import { Button, Container, Form, Input, InputBox, Login, LogoWhite, OAuth, Space } from "../../styles";
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IconContext } from "react-icons";

function SignUp() {
    const [user, setUser] = useState({name: '', email: '', password: ''});
    const [send, setSend] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [passType, setPassType] = useState('password');
    const [showPassConf, setShowPassConf] = useState(false);
    const [passConfType, setPassConfType] = useState('password');
    const [passConf, setPassConf] = useState({passConfirm: ''})
    const wait = false;
    const navigate = useNavigate()

    function getUser(value: string, name: string) {
        setUser({
            ...user,
            [name]: value
        })
    }

    function togglePass() {
        setShowPass(!showPass)
        if(passType === 'password') {
            setPassType("text")
        } else {
            setPassType("password")
        }
    }

    function getPassConfirm(value: string, name: string) {
        setPassConf({
            ...passConf,
            [name]: value
        })
    }

    function togglePassConf() {
        setShowPassConf(!showPassConf)
        if(passConfType === 'password') {
            setPassConfType("text")
        } else {
            setPassConfType("password")
        }
    }

    function verify() {
        const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (user.password !== passConf.passConfirm) return false
        if (!senhaRegex.test(user.password)) return false
        return true
    }

    function sendMe(event: { preventDefault: () => void; } | undefined) {
        event?.preventDefault();
        const ok = verify();
        console.log(ok)
        if (ok) return setSend(true)
    }

    useEffect(() => {
        if(send) {
            console.log(user)
            console.log(passConf)
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
                        <Size>
                            <LogoWhite />
                        </Size>
                        <h1>RINHUIX</h1>
                    </Logo>
                    <Login>
                        <h1>sign up</h1>
                        <Form onSubmit={sendMe}>
                            <InputBox>
                                <Input onChange={(e: { target: { value: any; name: any; }; }) => {
                                    getUser(
                                        e.target.value,
                                        e.target.name
                                    )
                                }}
                                name="name" type="text" placeholder='name'/>
                            </InputBox>
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
                            <InputBox>
                                <Input onChange={(e: { target: { value: any; name: any; }; }) => {
                                    getPassConfirm(
                                        e.target.value,
                                        e.target.name
                                    )
                                }}
                                name="passConfirm" type={passConfType} placeholder='passConfirm'/>
                                <span onClick={() => togglePassConf()}>
                                    <IconContext.Provider value={{ color: "#070808", size: "30px", style: { cursor: "pointer" } }}>
                                        {showPassConf ? <AiFillEye /> : <AiFillEyeInvisible />}
                                    </IconContext.Provider>
                                </span>
                            </InputBox>
                            <Button type='submit'>Sign Up</Button>
                            <span onClick={() => navigate('/sign-in')}>Already have an account?</span>
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
    
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease;
    
    h1 {
        margin-left: 14px;
    }

    @media(max-width: 815px) {
        left: calc(50vw - 100px);
    }

    @media(max-height: 740px) {
        top: 40px;
    }
`

const Size = styled.div`
    width: 100px;
`

export {
    SignUp
}