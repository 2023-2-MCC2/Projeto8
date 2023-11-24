import Header from '../../componentes/Header'
import Section1  from "../../componentes/Section";
import Section2 from "../../componentes/Section2";
import Section3 from "../../componentes/Section3";
import Section4 from "../../componentes/Section4";
import Footer from "../../componentes/Footer";
import styled from "styled-components";

const HomeContainer = styled.div`
width: 100%;
height: 100%;
`

function Home () {
    return (
        <HomeContainer>
            <Header/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Footer/>
        </HomeContainer>
    )

}

export default Home