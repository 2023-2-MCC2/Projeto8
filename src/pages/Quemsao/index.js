import styled from "styled-components"
import Header from "../../componentes/Header"
import TopPage2 from "../../componentes/TopPage2"
import MidPage2 from "../../componentes/MidPage2"
import Footer from "../../componentes/Footer"
const QuemsaoContainer = styled.div`
width: 100%;
height: 100%;

`

function Page2 () {
    return (
        <QuemsaoContainer>
            <Header/>
            <TopPage2/>
            <MidPage2/>
            <Footer/>
        </QuemsaoContainer>
    )


}

export default Page2