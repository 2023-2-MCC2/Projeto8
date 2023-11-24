import styled from "styled-components";
import img1 from '../../imagens/img-top-adotar.webp'
import img2 from '../../imagens/adotar-top.png'

const TopContainer = styled.div`
width: 100%;
height: 500px;

`

const TopTIContainer = styled.div`
width: 100%;
height: 100%;

display: flex;
`

const ImgContainer = styled.div`
width: 650px;
height: 100%;

`
const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`
const TxTContainer = styled.div`
width: 650px;
height: 99.5%;
border: 1px solid gray;

`
const TitleDiv = styled.div`
width: 100%;
height: 30px;

`

const Title = styled.h1`
font-size: 30px;
font-family: 'Roboto', sans-serif;
text-align: center;

`

const DivText = styled.div`
width: 585px;
height: auto;
display: flex;
margin: 0;
margin-left: 20px;
justify-content: center;
`

const Text = styled.p`
font-family: 'Roboto', sans-serif;
font-size: 27px;
text-align: center;
`

function TopAdotar () {
    return(
        <TopContainer>
            <TopTIContainer>
                
                <ImgContainer>
                    <Img src={img1}  />
                </ImgContainer>
                <TxTContainer>

                    <TitleDiv>
                        <Title>ADOTE !</Title>
                    </TitleDiv>

                    <DivText>
                        <Text> "Embrace o poder da compaixão e faça parte da jornada incrível da adoção de pets! Ao escolher dar um lar a um animalzinho, você não apenas muda a vida dele, mas também enriquece a sua própria. Descubra a alegria inigualável de ter um amigo leal ao seu lado, pronto para compartilhar amor, alegria e memórias para toda a vida. Adote, cuide, e experimente a gratidão eterna de uma alma peluda que encontrou um lar para chamar de seu. Juntos, podemos construir laços que vão além das palavras, tornando o mundo um lugar mais compassivo e repleto de amor incondicional".</Text>
                    </DivText>

                </TxTContainer>
                    
                <ImgContainer>
                    <Img src={img2} />
                </ImgContainer>

            </TopTIContainer>    
        </TopContainer>
        )
}


export default TopAdotar