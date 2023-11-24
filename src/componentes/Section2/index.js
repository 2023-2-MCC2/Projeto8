import styled from "styled-components";
import SectionRosa from "../SectionRosinha";

const SectionTxt = styled.div`
height: 100%;
width: 700px; 
margin-left: 220px; 

`
const TxT = styled.h1`
font-size: 35px;
color: red;
text-align: center;
margin-top: 20px;
font-family: 'Economica';
`

const TxT2 = styled.p`
font-size: 30px;
color: black;
text-align: center;
padding-top: 20px;
font-family: 'Economica';
`

const SectionContainer = styled.section`
display: flex; 
width: 100%;
height: 400px;
background-color: gray;


`

function Section2 () {
    return(
    <SectionContainer>
        <SectionRosa/>
        <SectionTxt>
            <TxT> Um Fato Curioso!!! </TxT>
            <TxT2> De acordo com a OMS (Organização mundial da Saude) no ano de 2020 até final de 2022 houve mais de 30 milhões de cachorros que ficaram sem lar. E mais de 15 milhões que foram maltratados.</TxT2>
        </SectionTxt>
    </SectionContainer>

    )


}

export default Section2