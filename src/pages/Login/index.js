import styled from "styled-components";
import Header from "../../componentes/Header";
import LoginRegister from "../../componentes/LoginRegister";
const LoginConainer = styled.div`
width: 100%;
width: 100%;
`
function LoginPage () {
    return (
        <LoginConainer>
            <Header/>
            <LoginRegister/>
        </LoginConainer>

    )


}

export default LoginPage

