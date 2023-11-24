import RegisterPage from "../../componentes/CriarContaPage";
import styled from "styled-components";
import Header from "../../componentes/Header";

const CriarContaContainer = styled.div`
width: 100%;
height: 100%;
`

function CriarConta () {
    return (
    <CriarContaContainer>
            <Header/>
            <RegisterPage/>
    </CriarContaContainer>

    )
}


export default CriarConta