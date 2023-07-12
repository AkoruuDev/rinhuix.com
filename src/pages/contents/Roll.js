import { styled } from "styled-components";
import { CommingSoon } from "../../services/CommingSoon";
import { Container } from "../../styles";
import { GiDiceTwentyFacesTwenty, GiDiceTwentyFacesOne } from "react-icons/gi"
import { IoIosAddCircleOutline } from "react-icons/io"
import { BsFillHexagonFill, BsFillPentagonFill, BsFillSquareFill, BsFillTriangleFill, BsDiamondFill, BsFillCircleFill, BsFillOctagonFill } from "react-icons/bs"
import { IconContext } from "react-icons";
import { useState } from "react";

function Roll() {
    const wait = false;
    const [select, setSelect] = useState(false)
    const [result, setResult] = useState(false)
    const [dice, setDice] = useState('')
    const [diceRoll, setDiceRoll] = useState(false)
    const [diceResult, setDiceResult] = useState()

    function ramdomThis(d) {
        const array = [];
        for (let i = 1; i <= d; i++) {
            array.push(i);
        }

        const interval = setInterval(() => {
            const res = array[Math.floor(Math.random() * array.length)]
            setDiceResult(res)
        }, 50)
        
        setTimeout(() => {
            setDiceRoll(false)
            clearInterval(interval)
        }, 1000)
    }

    return (
        <>
            {
                wait ?
                <CommingSoon /> :
                <Container>
                    <DiceBox>
                        <Circle selected={select}>
                            <Dice onClick={() => {
                                setSelect(!select)
                                // eslint-disable-next-line no-unused-expressions
                                select ? setResult(false) : undefined
                            }} selected={select}>
                                <IconContext.Provider value={{ color: "#f2f2f2", size: "100%", style: { cursor: "pointer" } }}>
                                    {select ? <GiDiceTwentyFacesTwenty /> : <GiDiceTwentyFacesOne />}
                                </IconContext.Provider>
                            </Dice>
                        </Circle>

                        <Dices>
                            <D4 selected={select} onClick={() => {
                                setDiceRoll(true)
                                ramdomThis(4)
                                setDice('d4')
                                setResult(true)
                            }}>
                                <Text>D4</Text>
                                <IconContext.Provider value={{ size: "90%", style: { cursor: "pointer" } }}>
                                    <BsFillTriangleFill />
                                </IconContext.Provider>
                            </D4>
                            <D6 selected={select} onClick={() => {
                                setDiceRoll(true)
                                ramdomThis(6)
                                setDice('d6')
                                setResult(true)
                            }}>
                                <Text>D6</Text>
                                <IconContext.Provider value={{ size: "90%", style: { cursor: "pointer" } }}>
                                    <BsFillSquareFill />
                                </IconContext.Provider>
                            </D6>
                            <D8 selected={select} onClick={() => {
                                setDiceRoll(true)
                                ramdomThis(8)
                                setDice('d8')
                                setResult(true)
                            }}>
                                <Text>D8</Text>
                                <IconContext.Provider value={{ size: "100%", style: { cursor: "pointer" } }}>
                                    <BsDiamondFill />
                                </IconContext.Provider>
                            </D8>
                            <D10 selected={select} onClick={() => {
                                setDiceRoll(true)
                                ramdomThis(10)
                                setDice('d10')
                                setResult(true)
                            }}>
                                <Text>D10</Text>
                                <IconContext.Provider value={{ size: "100%", style: { cursor: "pointer" } }}>
                                    <BsFillPentagonFill />
                                </IconContext.Provider>
                            </D10>
                            <D12 selected={select} onClick={() => {
                                setDiceRoll(true)
                                ramdomThis(12)
                                setDice('d12')
                                setResult(true)
                            }}>
                                <Text>D12</Text>
                                <IconContext.Provider value={{ size: "90%", style: { cursor: "pointer" } }}>
                                    <BsFillOctagonFill />
                                </IconContext.Provider>
                            </D12>
                            <D20 selected={select} onClick={() => {
                                setDiceRoll(true)
                                ramdomThis(20)
                                setDice('d20')
                                setResult(true)
                            }}>
                                <Text>D20</Text>
                                <IconContext.Provider value={{ size: "100%", style: { cursor: "pointer" } }}>
                                    <BsFillHexagonFill />
                                </IconContext.Provider>
                            </D20>
                            <D100 selected={select} onClick={() => {
                                setDiceRoll(true)
                                ramdomThis(100)
                                setDice('d100')
                                setResult(true)
                            }}>
                                <Text>D100</Text>
                                <IconContext.Provider value={{ size: "100%", style: { cursor: "pointer" } }}>
                                    <BsFillCircleFill />
                                </IconContext.Provider>
                            </D100>
                            <More selected={select} onClick={() => {
                                setDice('more')
                                setResult(true)
                            }}>
                                <IconContext.Provider value={{ size: "100%", style: { cursor: "pointer" } }}>
                                    <IoIosAddCircleOutline />
                                </IconContext.Provider>
                            </More>
                        </Dices>
                    </DiceBox>
                    <Result>
                        {!result ?
                            <h2>Select a dice</h2> :
                            <>
                                {
                                    dice === 'd4' ?
                                    <Rolling>
                                        <div><h6>{diceResult}</h6></div>
                                        <RollAn rollThat={diceRoll}>
                                            <IconContext.Provider value={{ size: "90%", style: { cursor: "pointer" } }}>
                                                <BsFillTriangleFill />
                                            </IconContext.Provider>
                                        </RollAn>
                                    </Rolling> : undefined
                                }
                                {
                                    dice === 'd6' ?
                                    <Rolling>
                                        <div><h6>{diceResult}</h6></div>
                                        <RollAn rollThat={diceRoll}>
                                            <IconContext.Provider value={{ size: "90%", style: { cursor: "pointer" } }}>
                                                <BsFillSquareFill />
                                            </IconContext.Provider>
                                        </RollAn>
                                    </Rolling> : undefined
                                }
                                {
                                    dice === 'd8' ?
                                    <Rolling>
                                        <div><h6>{diceResult}</h6></div>
                                        <RollAn rollThat={diceRoll}>
                                            <IconContext.Provider value={{ size: "90%", style: { cursor: "pointer" } }}>
                                                <BsDiamondFill />
                                            </IconContext.Provider>
                                        </RollAn>
                                    </Rolling> : undefined
                                }
                                {
                                    dice === 'd10' ?
                                    <Rolling>
                                        <div><h6>{diceResult}</h6></div>
                                        <RollAn rollThat={diceRoll}>
                                            <IconContext.Provider value={{ size: "90%", style: { cursor: "pointer" } }}>
                                                <BsFillPentagonFill />
                                            </IconContext.Provider>
                                        </RollAn>
                                    </Rolling> : undefined
                                }{
                                    dice === 'd12' ?
                                    <Rolling>
                                        <div><h6>{diceResult}</h6></div>
                                        <RollAn rollThat={diceRoll}>
                                            <IconContext.Provider value={{ size: "90%", style: { cursor: "pointer" } }}>
                                                <BsFillOctagonFill />
                                            </IconContext.Provider>
                                        </RollAn>
                                    </Rolling> : undefined
                                }
                                {
                                    dice === 'd20' ?
                                    <Rolling>
                                        <div><h6>{diceResult}</h6></div>
                                        <RollAn rollThat={diceRoll}>
                                            <IconContext.Provider value={{ size: "90%", style: { cursor: "pointer" } }}>
                                                <BsFillHexagonFill />
                                            </IconContext.Provider>
                                        </RollAn>
                                    </Rolling> : undefined
                                }{
                                    dice === 'd100' ?
                                    <Rolling>
                                        <div><h6>{diceResult}</h6></div>
                                        <RollAn rollThat={diceRoll}>
                                            <IconContext.Provider value={{ size: "90%", style: { cursor: "pointer" } }}>
                                                <BsFillCircleFill />
                                            </IconContext.Provider>
                                        </RollAn>
                                    </Rolling> : undefined
                                }
                                {
                                    dice === 'more' ?
                                    <></> : undefined
                                }
                            </>
                        }
                    </Result>
                </Container>
            }
        </>
    )
};

const DiceBox = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Dice = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    transition: all .8s ease;

    display: flex;
    align-items: center;
    justify-content: center;
    rotate: 180deg;
    cursor: pointer;

    transform: ${props => props.selected ? 'rotateZ(180deg)' : 'rotareZ(0)'};
`;

const Circle = styled.div`
    width: ${props => props.selected ? '150px' : '50px'};
    height: ${props => props.selected ? '150px' : '50px'};;
    border-radius: 50%;
    background-color: ${props => props.selected ? '#a37800' : 'transparent'};;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all .8s ease;

    z-index: 1;
`;

const Dices = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 50%;

    position: absolute;
`

const D4 = styled(Dice)`
    bottom: ${props => props.selected ? '50px' : '150px'};
    right: ${props => props.selected ? '50px' : '150px'};
    transition: all 0.8s ease;

    & * {
        color: ${props => props.selected ? '#fff' : 'transparent'};
        transition: all 0.8s ease;
    }

    & p {
        top: 50px;
    }
`;

const D6 = styled(Dice)`
    top: 150px;
    right: ${props => props.selected ? '0' : '150px'};
    transition: all 0.8s .1s ease;

    & * {
        color: ${props => props.selected ? '#fff' : 'transparent'};
        transition: all 0.8s .1s ease;
    }
`;

const D8 = styled(Dice)`
    top: ${props => props.selected ? '50px' : '150px'};
    right: ${props => props.selected ? '50px' : '150px'};
    transition: all 0.8s .2s ease;

    & * {
        color: ${props => props.selected ? '#fff' : 'transparent'};
        transition: all 0.8s .2s ease;
    }
`;

const D10 = styled(Dice)`
    top: ${props => props.selected ? '50px' : '150px'};
    left: ${props => props.selected ? '50px' : '150px'};
    transition: all 0.8s .4s ease;

    & * {
        color: ${props => props.selected ? '#fff' : 'transparent'};
        transition: all 0.8s .4s ease;
    }
`;

const D12 = styled(Dice)`
    top: ${props => props.selected ? '150px' : '150px'};
    left: ${props => props.selected ? '0' : '150px'};
    transition: all .8s 0.5s ease;

    & * {
        color: ${props => props.selected ? '#fff' : 'transparent'};
        transition: all 0.8s 0.5s ease;
    }
`;

const D20 = styled(Dice)`
    top: ${props => props.selected ? '0px' : '150px'};
    right: ${props => props.selected ? '150px' : '150px'};
    transition: all 0.8s .3s ease;

    & * {
        color: ${props => props.selected ? '#fff' : 'transparent'};
        transition: all 0.8s .3s ease;
    }
`;

const D100 = styled(Dice)`
    bottom: ${props => props.selected ? '50px' : '150px'};
    left: ${props => props.selected ? '50px' : '150px'};
    transition: all 0.8s 0.6s ease;

    & * {
        color: ${props => props.selected ? '#fff' : 'transparent'};
        transition: all 0.8s 0.6s ease;
    }
`;

const More = styled(Dice)`
    bottom: ${props => props.selected ? '0' : '150px'};
    left: ${props => props.selected ? '150px' : '150px'};
    transition: all 0.8s 0.6s ease;

    & * {
        color: ${props => props.selected ? '#fff' : 'transparent'};
        transition: all 0.8s 0.6s ease;
    }
`;

const Text = styled.p`
    color: black;
    size: 30px;
    position: absolute;
    z-index: 1;
`

const Result = styled.div`
    width: 300px;
    height: 100px;
    position: absolute;
    bottom: 10vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Rolling = styled.div`
    width: 100px;
    height: 150px;
    display: flex;
    justify-content: center;

    position: absolute;

    & div {
        width: 100%;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 46px;
        position: absolute;
        bottom: 0;
        z-index: 1;
    }
`

const RollAn = styled.div`
    top: 0;
    width: 100px;
    height: 100px;
    position: absolute;
    transition: all 1s ease;

    display: flex;
    align-items: center;
    justify-content: center;
    rotate: 0;

    transform: ${props => props.rollThat ? `rotateZ(360deg)` : 'rotateZ(0)'};

    & * {
        color: #a37800;
    }
`

export {
    Roll,
}