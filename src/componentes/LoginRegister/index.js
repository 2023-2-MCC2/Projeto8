import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginInputs from "../LoginInputs";
import ButtonLogin from "../BotaoRegister";
const AccountDiv = styled.div`
width: 100%;
justify-content: center;
align-items:  center;
display: flex;
margin-top: 20px;

`

const AccountTxT = styled.h3`
font-family: 'Roboto', sans-serif;
font size: 20px;
color: #16a085;
text-align: center;

`

const ButtonDiv = styled.div`
width: 100%;

`

const DivLoginInputs = styled.div`
width: 100%;
height: 300px;
align-items:  center;
display: flex;
margin: 0;

`


const Title = styled.h1`
color: red;
font-size: 22px;
font-family: 'Roboto', sans-serif;
`


const TitleDiv = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
`




const LoginDiv = styled.div`
width: 600px;
height: 550px;
border: solid 2px #AAA;
margin: auto;
margin-top: 40px;
`
function LoginRegister () {
    return(
            <LoginDiv>
                <TitleDiv>
                    <Title>LOGIN</Title>
                </TitleDiv>

                <DivLoginInputs>
                    <LoginInputs/>
                </DivLoginInputs>
                <ButtonDiv>
                    <ButtonLogin/>
                </ButtonDiv>
                <AccountDiv>
                    <AccountTxT> <Link to='/CriarConta'> NÃO POSSUI UMA CONTA ?  </Link> </AccountTxT>
                </AccountDiv>
            </LoginDiv>
    )


}

export default LoginRegister