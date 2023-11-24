import styled from "styled-components";
import imgDiv1 from '../../imagens/rosinha.png'
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
const Div1img = styled.img`
width: auto;
height: 100%;
object-fit: cover;
border-radius: 20px;
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

function Div1 () {
    return(
    <DivContainerAll>
        <DivContainerImg>
            <Div1img  src={imgDiv1}/>
        </DivContainerImg>
        <DivContainerTxt>
            <TxTDiv> Essa é a Rosinha que tem 3 anos de idade e sofreu queimaduras no corpo por conta de seu antigo dono jogar óleo fervendo nela. </TxTDiv>
        </DivContainerTxt>
        <ButtonContainer>
            <MeuBotao/>
        </ButtonContainer>
    </DivContainerAll>
         )

}


export default Div1

