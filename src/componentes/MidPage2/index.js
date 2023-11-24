import styled from "styled-components";
import ImgMidTitle from '../../imagens/chiuaua.png'

const MidContainer = styled.div`
width: 100%;
height: auto;
`

const DivTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: auto;
`
const TitleTxT = styled.h1`
font-size: 40px;
color: red;
`
const MidImgTitleDiv = styled.div`
height: 100%;
`
const ImgTitleMid = styled.img`
width: 180px;
`

const MidTextDiv = styled.div`
width: 1700px;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
margin-top: 50px;
`

const MidText = styled.h5`
font-size: 35px;
text-align: center;
`

function MidPage2 () {
    return (
    <MidContainer>
        <DivTitle>
            <TitleTxT> HISTÓRIA </TitleTxT>
            <MidImgTitleDiv>
                <ImgTitleMid src={ImgMidTitle} />
            </MidImgTitleDiv>
        </DivTitle>
        <MidTextDiv>
           <MidText> O seu Guilherme começou a abrigar peludos em 2009, em casa mesmo,
​              em 2012 alugaram um espaço para o canil e registraram a Entidade Filantrópica.
                “Abrigamos, hoje, cerca de 330 animais...
             ...e contamos com mais de 240 voluntários!
              Todos os peludos que aqui chegam têm seu sanguinho testado,
                tratados conforme os resultados, vacinados e castrados.
                Com exceção de alguns machinhos mais velhos, todos nossos animais são castrados.”
                Além de cuidar dos peludos, fazem um esforço enorme para que eles encontrem uma família, realizando feiras quase todos os sábados.
                Nestes últimos 10 anos, conseguiram lares para cerca de 1000 peludos.   
            </MidText>
        </MidTextDiv>
    </MidContainer>


    )
}

export default MidPage2