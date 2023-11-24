import styled from "styled-components";
import Div1 from "../Section3Compo";
import Div2 from "../Section3Div2";
import Div3 from "../Section3Div3";
const SectionContainer = styled.div`
width: 100;
height: 100%;
background-color: #545557;
display: flex;
justify-content: space-between; 
padding: 10px;


`

const SectionDiv1 = styled.section`
width: 450px;
height: 500px;
text-align: center;
padding: 20px;
margin: 5px;
border-radius: 5px;
background-color: #444444

`

const SectionDiv2 = styled.section`
width: 450px;
height: 500px;
text-align: center;
padding: 20px;
margin: 5px;
border-radius: 5px;
background-color: #444444

`

const SectionDiv3 = styled.section`
width: 450px;
height: 500px;
padding: 20px;
margin: 5px;
border-radius: 5px;
text-align: center;
margin-right: 20px;
background-color: #444444
`



function Section3 (){
    return (
        <SectionContainer>

            <SectionDiv1>
                <Div1/>   
            </SectionDiv1>

            <SectionDiv2>
                <Div2/>
            </SectionDiv2>

            <SectionDiv3>
                <Div3/>
            </SectionDiv3>

        </SectionContainer>


    )


}







export default Section3