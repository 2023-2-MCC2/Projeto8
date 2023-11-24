import styled from "styled-components";
import RegsiterInputs from "../CadastroInputs";



const CadastroTitleDiv = styled.div`
width: 100%;
height: 80px;
`
const CadastroTitleTxT =  styled.h2`
font-size: 26px;
color: red;
text-align: center;

`
const DivLogin = styled.div`
width: 600px;
height: 850px;
border: solid 2px #AAA;
margin: auto;
margin-top: 40px;
`
const RegisterDiv = styled.div`
width: 100%;
height: 600px;

`

function RegisterPage () {

    return(
        <DivLogin>
            <CadastroTitleDiv>
                <CadastroTitleTxT> CADASTRO </CadastroTitleTxT>
            </CadastroTitleDiv>
            <RegisterDiv>
                <RegsiterInputs/>
            </RegisterDiv>
        </DivLogin>

    )
} 

export default RegisterPage