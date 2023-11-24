import styled from "styled-components";
import ImgDiv4 from "../../imagens/caozinho1_edited.webp"


const SectionContainer = styled.section`
width: 100%;
height: 380px;
background-color: gray;
display: flex;

`

const SectionDivImg = styled.div`
width: 400px;
height: 300px;
margin-left: 120px;
margin-top: 50px;

` 

const SectionImg = styled.img`
width: 100%;
height: 100%;

`
const SectionDivTxT = styled.div`
width: 900px;
height: 350px;
margin-top: 26px;
`

const SectionTxt = styled.p`
font-size: 30px;
text-align: center;
font-family: 'Economica';

`
const SectionAss = styled.h4`
font-family: 'Signerica';
`

function Section4 () {
    return (

        <SectionContainer>
            <SectionDivImg>
                <SectionImg src={ImgDiv4} />
            </SectionDivImg>
            <SectionDivTxT>
                <SectionTxt> "Em nosso abrigo, cada latido é uma história de esperança. Nossos amigos peludos aguardam ansiosamente por um lugar para chamar de lar. Eles têm tanto amor para dar. Ao adotar um de nossos adoráveis cães, você não apenas muda a vida deles, mas também a sua. Faça a escolha de fazer a diferença. Adote um amigo fiel e descubra o verdadeiro significado de lealdade." </SectionTxt>
                <SectionAss> Seu Guilherme</SectionAss>
            </SectionDivTxT>
        </SectionContainer>

    )


}

export default Section4
