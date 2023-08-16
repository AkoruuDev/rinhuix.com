import { useState } from "react";
import { CommingSoon } from "../../services/CommingSoon";
import { Container, Form, InBoxColl, InSelect, Input } from "../../styles";
import { styled } from "styled-components";

const breeds = [
    "LiaCan",
    "Draqueo",
    "Aqualete",
    "Paladio Playfull",
    "Paladio Puro",
    "Paladio Scar",
    "Vegaton",
    "Purple Arcano",
    "Purple Elemental",
    "Erokil",
    "Calipterio",
    "Bellow Diat",
    "Morfiu",
    "Erectobeast",
    "Halfing",
    "Smash",
    "Tarkoll",
    "Carasiun",
    "Meufay",
    "Drapelull",
    "Goliath",
    "Nanon",
    "Expesion",
    "Daquire",
    "Eresion",
    "Ganoroc",
    "Blogan",
    "Puriano",
    "Hacucaril",
    "Corkoga",
    "Nonkall",
    "Otracno",
    "Otronca",
]

function NewChar() {
    const wait = false;
    const [stage, setStage] = useState(1);

    function upStage(e) {
        if (e === 1) {
            if (stage < 4) {
                setStage(stage + 1)
            }
        } else {
            setStage(stage - 1)
        }
        
    }


    return (
        <>
            {
                wait ?
                <CommingSoon /> :
                <Container>
                    <Box>
                        <Form>
                            {stage === 1 ?
                            <div>
                                <h1>Identidade</h1>
                                <Input type="text" placeholder="Nome do personagem" />
                                <Input type="text" placeholder="Idade" />
                                <Input type="text" placeholder="Aparencia" />
                            </div> : ""
                            }

                            {stage === 1 ?
                            <div>
                                <h1>Identidade</h1>
                                <h2>Raça</h2>
                                <InBoxColl>
                                    <InSelect name="select">
                                        <option value="selecione" selected>Raça principal</option>
                                        {breeds.map(e => {
                                            return <option value={e}>{e}</option>
                                        })}
                                    </InSelect>
                                    <InSelect name="select">
                                        <option value="selecione" selected>Raça secundária</option>
                                        {breeds.map(e => {
                                            return <option value={e}>{e}</option>
                                        })}
                                    </InSelect>
                                </InBoxColl>
                                <Input type="text" placeholder="personalidade" />
                                <Input type="text" placeholder="história" />
                            </div> : ""
                            }
                            
                            {stage === 2 ?
                            <div>
                                <h1>Poderes</h1>
                                <Input type="text" placeholder="raça" />
                                <Input type="text" placeholder="elemento" />
                                <Input type="text" placeholder="poder unico" />
                                <Input type="text" placeholder="magia" />
                            </div> : ""
                            }
                            
                            {stage === 3 ?
                            <div>
                                <h1>Atributos</h1>
                                <h2>Experiencia</h2>
                                <Input type="text" placeholder="xp NV" />
                                <Input type="text" placeholder="xp caixa" />
                                <h2>atributos basicos</h2>
                                <Input type="text" placeholder="musculos" />
                                <Input type="text" placeholder="olhos" />
                                <Input type="text" placeholder="pele" />
                                <Input type="text" placeholder="aura" />
                                <Input type="text" placeholder="mente" />
                                <h2>arquetipo</h2>
                                <h2>atributos especiais</h2>
                                <Input type="text" placeholder="vida" />
                                <Input type="text" placeholder="sanidade" />
                                <Input type="text" placeholder="agudo" />
                            </div> : ""
                            }
                            
                            {stage === 4 ?
                            <div>
                                <h1>complementar</h1>
                                <h2>montaria/pet</h2>
                                <h2>inventario</h2>
                                <h2>eventos</h2>
                                <Input type="text" placeholder="data" />
                                <Input type="text" placeholder="titulo" />
                                <Input type="text" placeholder="posição" />
                                <Input type="text" placeholder="descrição" />
                                <Input type="text" placeholder="consquistas" />
                            </div> : ""
                            }
                        </Form>
                        <ButtonBox stage={stage}>
                            {stage > 1 ? <button type="submit" onClick={() => upStage(0)}>VOLTAR</button> : ""}
                            <button type="submit" onClick={() => upStage(1)}>{stage === 4 ? "FINALIZAR" : "PRÓXIMO"}</button>
                        </ButtonBox>
                    </Box>
                </Container>
            }
        </>
    )
}

const Box = styled.div`
    width: 50vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: ${props => props.stage > 1 ? "space-between" : "flex-end"};
    width: 100%;

    position: absolute;
    bottom: 0;

    & button {
        padding: 8px 25px;
        border-radius: 15px;
        border: transparent;
    }
`

export {
    NewChar,
}