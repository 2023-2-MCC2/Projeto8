import styled from "styled-components";
import ImagemMain from '../../imagens/dogsehaven-main.jpg';

const Sectiondiv = styled.div`
margin-top: 20px;
width: 700px;
height: 350px;
color: green;
text-align: center;
margin-left: 20px
border: 2px solid #333;

`
const SectionImg = styled.img`
width: 95%;
height: 95%;
object-fit: cover;
justify-content: center;
margin-top: 7px;
border-radius: 4px;



`


function SectionRosa(){
    return(
        <Sectiondiv>
            <SectionImg
                src = {ImagemMain}
                alt = "poha"
                />
           </Sectiondiv>
        )


}

export default SectionRosa