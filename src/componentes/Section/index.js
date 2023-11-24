import styled from "styled-components"
import SectionVideo from "../SectionVideo"




const SectionConatainer = styled.section`
width: auto;
height: 400px;
`

function Section1() {
    return(
    <SectionConatainer>
        <SectionVideo/>
    </SectionConatainer>
    )

}


export default Section1