import { Link } from "react-router-dom";
import styled from "styled-components";
import React from 'react';
import dogImg from '../../imagens/Brutus.png'
import dogImg2 from '../../imagens/houdini.png'
import dogImg3 from '../../imagens/spikw.png'
import dogImg4 from '../../imagens/theodora.png'
import dogImg5 from '../../imagens/Nina.png'
import dogImg6 from '../../imagens/Perdida.png'
import dogImg7 from '../../imagens/Rabugento.png'
import dogImg8 from '../../imagens/Aparecida.png'
import dogImg9 from '../../imagens/Caramelo.png'
import dogImg10 from '../../imagens/BELINHA.png'
import dogImg11 from '../../imagens/Banze.png'
import dogImg12 from '../../imagens/GATSBY.png'
import dogImg13 from '../../imagens/NERO.png'
import dogImg14 from '../../imagens/POPÓ.png'
import dogImg15 from '../../imagens/Margareth.png'
const AdotarMidContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: gray;
`

const AdoteContainer = styled.div`
width: 1225px;
height: auto;
margin-top: 2px;
border-radius: 10px ;
border: 1px solid black;
`


const TextOverlay = styled.div`
position: absolute;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5); 
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: white; 
font-size: 16px;
opacity: 0; 
transition: opacity 0.5s ease; 
z-index: 1;


`

const Imgs = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 5px;

&:hover{
    cursor: pointer;
    transition: opacity 0.4s ease;
    background: rgba(0, 0, 0, 0.5);
    opacity: 1;


`

const DivImg = styled.div`
position: relative;
width: 400px;
height: 300px;
margin-left: 5px;
display: inline-block;
border-radius: 10px;
border: 1px solid black;
margin-top: 5px;

opacity: 1;
&:hover{ 
 cursor: pointer;
& > ${TextOverlay} {
    opacity: 0.8;
  }
}

`


  

function AdotarMid () {

    return(
        <AdotarMidContainer>
            <AdoteContainer>
                <DivImg>
                <TextOverlay>
                        <h3>BRUTUS: Um cãozinho adoravel e amoroso que foi resgatado por seu Guilherme no meio de uma rinha de cães que seu proprio dono organizava. (MACHO) - PORTE-GRANDE [PITBULL]</h3>
                </TextOverlay>
                    <Imgs src={dogImg} />
                    
                </DivImg>
                <DivImg>
                    <TextOverlay>
                        <h3>HOUDINI: (MACHO) PORTE MÉDIO/GRANDE [VIRA-LATA]</h3>
                    </TextOverlay>
                    <Imgs src={dogImg2} />
                </DivImg>
                <DivImg>
                    <TextOverlay>
                        <h3>SPIKWE: (MACHO) PORTE MÉDIO/GRANDE [PITBULL]</h3>
                    </TextOverlay>
                    <Imgs src={dogImg3} />
                </DivImg>
                <DivImg>
                    <TextOverlay>
                        <h3>THEODORA: Sou muito alegre e gosto de correr com meus amigos, gosto de bricar com ciranças e rolar na grama. (FÊMEA) PORTE-MÉDIO [VIRA-LATA]</h3>
                    </TextOverlay>
                    <Imgs src={dogImg4} />
                </DivImg>
                <DivImg>
                    <TextOverlay>
                        <h3>NINA: Sou uma pequena muito tranquila... gosto de dar lambida na mão dos meus visitantes e de olhar bem nos olhos deles. (FÊMEA) PORTE-MÉDIO [VIRA-LATA]</h3>
                    </TextOverlay>
                    <Imgs src={dogImg5} />
                </DivImg>
                <DivImg>
                    <TextOverlay>
                        <h3>PERDIDA: Sou pequenina, brincalhona e adoro pessoas (FÊMEA) PORTE-PEQUENO [VIRA-LATA]</h3>
                    </TextOverlay>
                    <Imgs src={dogImg6} />
                </DivImg>
                <DivImg>
                    <TextOverlay>
                        <h3>RABUGENTO: Quando cheguei aqui era bem bravo, mas hoje sou elétrico, ativo, adoro bricar, correr (MACHO) PORTE-PEQUENO [VIRA-LATA]</h3>
                    </TextOverlay>
                    <Imgs src={dogImg7} />
                </DivImg>
                <DivImg>
                    <TextOverlay>
                        <h3>APARECIDA: Convivo bem com outros peludos mas gosto mesmo é de correr no quintal. (FÊMEA) - PORTE-MÉDIO/PEQUENO [VIRA-LATA]</h3>
                    </TextOverlay>
                    <Imgs src={dogImg8}/>
                </DivImg>
                <DivImg>
                    <TextOverlay>
                        <h3>CARAMELO: Sou uma cadelinha muito calma, pareço um lobinho. (FÊMEA) - PORTE MÉDIO/PEQUENO [VIRA-LATA]</h3>
                    </TextOverlay>
                    <Imgs src={dogImg9} />
                </DivImg>
                <DivImg>
                    <TextOverlay>
                        <h3>BELINHA: Até convivo com outros cachorrinhos, mas sou ciumenta. adoro um cafuné e sou bastante tranqila. (FÊMEA) - PORTE MÉDIO [PITBULL]</h3>
                    </TextOverlay>
                    <Imgs src={dogImg10} />
                </DivImg>
                <DivImg>
                    <TextOverlay>
                        <h3>BANZÉ: já sou crescidinho, muito malandro e carinhoso (9 anos) (MACHO) - PORTE PEQUENO - [VIRA-LATA] </h3>
                    </TextOverlay>
                    <Imgs src={dogImg11} />
                </DivImg>
                <DivImg>
                    <TextOverlay>
                        <h3>GATSBY: Sou um cachorrinho tranquilão perninhas curtas e pelo de arame (MACHO) - PORTE PEQUENO - [DASCHMUND]</h3>
                    </TextOverlay>
                    <Imgs src={dogImg12} />
                </DivImg>
                <DivImg>
                    <TextOverlay>
                        <h3>NERO: á sou um garotão evoluido (10 anos), muito calmo e tranquilo. (MACHO) - PORTE MÉDIO - [VIRA-LATA]</h3>
                    </TextOverlay>
                    <Imgs src={dogImg13} />
                </DivImg>
                <DivImg>
                    <TextOverlay>
                        <h3>POPÓ: Fico solto no quintal do Guilherme e não gosto de trazer problemas (MACHO) - PORTE MÉDIO - [VIRA-LATA]</h3>
                    </TextOverlay>
                    <Imgs src={dogImg14} />
                </DivImg>
                <DivImg>
                    <TextOverlay>
                        <h3>MARGARETH: Foi resgatada durante temporal no Morin tendo seus filhotes que infelizmente não resistiram, ela estava com babesia , desnutrida e fraca ! (FÊMEA) - PORTE MÉDIO - [VIRA-LATA] </h3>
                    </TextOverlay>
                    <Imgs src={dogImg15} />
                </DivImg>
            </AdoteContainer>
        </AdotarMidContainer>

    )


}


export default AdotarMid