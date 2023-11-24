import styled from "styled-components"
import ImgTop from '../../imagens/logo_dogs-heaven.jpg'
import ImgTitle from '../../imagens/bulldog.png'

const TopContainer = styled.div`
width: 100%;
height: 1000px;
`
const TopTitleDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: auto;
`
const TopImgTitleDiv = styled.div`
width: auto;
height: 100%;
margin-left: 20px;
`

const ImgTitleTop = styled.img`
width: 80px;
`
const TopTitleTxT = styled.h1`
font-size: 40px;
color: red;
`
const DivImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: auto;
height: 400px;
width: 500px;
margin-top: 60px;
`
const ImgLogo = styled.img`
width: 100%;
height: 100%;
`
const TopTextDiv = styled.div`
width: 1500px;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
margin-top: 50px;
`
const TopText = styled.h5`
font-size: 35px;
text-align: center;

`

function TopPage2 () {
    return(
        <TopContainer>
                <TopTitleDiv>
                   <TopTitleTxT> O QUE É A ENTIDADE DOGS HEAVEN? </TopTitleTxT>
                    <TopImgTitleDiv>
                        <ImgTitleTop src={ImgTitle} />
                    </TopImgTitleDiv>
                </TopTitleDiv>
                <DivImg>
                    <ImgLogo src={ImgTop}
                    />
                </DivImg>
                <TopTextDiv>
                    <TopText> A Dog's Heaven é uma Entidade Filantrópica, sem fins lucrativos,
que tem como objetivo cuidar de cachorrinhos abandonados, recolhidos ou resgatados de situações de risco, proporcionando tratamento, abrigo, carinho, uma vida digna e saudável,
bem como a possibilidade de serem adotados por uma família feliz...
Atuamos, basicamente, no município de Petrópolis, RJ. </TopText>
                </TopTextDiv>
            </TopContainer>


    )



}

export default TopPage2