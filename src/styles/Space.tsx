import { IconContext } from "react-icons"
import { BsFillDiamondFill } from "react-icons/bs"
import { styled } from "styled-components"

function Space() {
    return(
        <Container>
            <IconContext.Provider value={{ color: "#ffbb00", size: "15px" }}>
                <BsFillDiamondFill />
            </IconContext.Provider>
        </Container>
    )
};

const Container = styled.span`
    width: 10%;
    height: 0;
    margin: 20px 0;
    border: 1px solid #ffbb00;

    display: flex;
    justify-content: center;
    align-items: center;
`

export {
    Space,
}