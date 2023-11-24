import styled from "styled-components";
import imgDiv2 from '../../imagens/gui.png'
import MeuBotao from "../botaoSaibaMais";


const DivContainerAll = styled.div`
widht: 450px;
height: 500px;
background-color: gray;
`


const DivContainerImg = styled.div `
width: 400px;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
margin: auto;


`

const DivContainerTxt = styled.div`
width: 100%;
height: 200px;
margin-top: 25px;
display: flex;
`

const TxTDiv = styled.p`
font-size: 25px;
color: black;
font-family: 'Economica';
text-align: center;
`
const ButtonContainer = styled.div`
width: 100%;
height: 80px;

`

const Div2img = styled.img`
width: auto;
height: 100%;
object-fit: cover;
border-radius: 20px;
`

function Div2 () {
    return(
    <DivContainerAll>
        <DivContainerImg>
            <Div2img  src={imgDiv2}/>
        </DivContainerImg>
        <DivContainerTxt>
            <TxTDiv> Esse é o Seu Guilherme o dono desta entidade que resgatou e cuida de mais 300 cachorros de rua e cuida de todos esse animais com carinho e amor. </TxTDiv>
        </DivContainerTxt>
        <ButtonContainer>
            <MeuBotao/>
        </ButtonContainer>
    </DivContainerAll>
         )

}


export default Div2