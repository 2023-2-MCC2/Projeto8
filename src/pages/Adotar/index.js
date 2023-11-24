import styled from "styled-components";
import TopAdotar from "../../componentes/AdotarPageTop";
import AdotarMid from "../../componentes/AdotarMid";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";


const AdotarContainer = styled.div`
width: 100%
height: 100%;
`

function AdotarPage () {
    return(
        <AdotarContainer>
            <Header/>
            <TopAdotar/>
            <AdotarMid/>
            <Footer/>
        </AdotarContainer>
    )



}

export default AdotarPage