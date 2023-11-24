import styled from "styled-components";
import MeuBotao from "../botaoSaibaMais";
import imgDiv3 from '../../imagens/Brutus.png'

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
font-size: 24px;
color: black;
font-family: 'Economica';
`
const ButtonContainer = styled.div`
width: 100%;
height: 80px;

`

const Div3img = styled.img`
width: auto;
height: 100%;
object-fit: cover;
border-radius: 20px;
`

function Div3 () {
    return(
    <DivContainerAll>
        <DivContainerImg>
            <Div3img  src={imgDiv3}/>
        </DivContainerImg>
        <DivContainerTxt>
            <TxTDiv> Esse é o Brutus um cãozinho adoravel e amoroso que foi resgatado por seu Guilherme no meio de uma rinha de cães que seu proprio dono organizava. </TxTDiv>
        </DivContainerTxt>
        <ButtonContainer>
            <MeuBotao/>
        </ButtonContainer>
    </DivContainerAll>
         )

}


export default Div3