import styled from "styled-components";
import { Link } from "react-router-dom";
import Axios from 'axios';
import * as yup from 'yup';



const AccountTxT = styled.h3`
font-family: 'Roboto', sans-serif;
font size: 20px;
color: #16a085;
text-decoration: underline;
text-align: center;

`
const StyledButton = styled.button`
  margin-top: 28px;
  width: 120px;
  height: 40px;
  background: red;
  border: none;
  border-radius: 5px;
  color: #FFF;
  font-family: 'Roboto, sans-serif'; 
  font-weight: 500;
  text-transform: uppercase;
  transition: 0.1s ease;
  cursor: pointer; 
  margin-left: 240px;
  justify-content: center; 
  align-items: center;
  display: flex;

  &:hover {
    opacity: 0.8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    transition: 0.1s ease;
  }

  &:focus {
    outline: none;
    opacity: 0.8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    transition: 0.1s ease;
  }

  &:active {
    opacity: 1;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    transition: 0.1s ease;
  }
`;





const StyledInput = styled.input`
display: block;
box-sizing: border-box;
margin-bottom: 20px;
padding: 4px;
width: 500px;
height: 32px;
border: none;
border-bottom: 1px solid gray;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 15px;
transition: border-bottom 0.2s ease, color 0.2s ease;
margin-left: 40px;

&:focus {
  outline: none;
  border-bottom: 2px solid #16a085;
  color: #16a085;
}
`

 function RegisterInputs () {
  const ButtonRegister = () => {
  

    return (
      <StyledButton>
        CADASTRAR-SE
      </StyledButton>
    );
  };
    
  
  const handleClickRegister = (values) => {

    Axios.post("http://localhost:3001/register",{
    
      Nome: values.Nome,
      CodigoP: values.CodigoP,
      Tel: values.Tel,
      Endereco: values.Endereco,
      Email: values.Email,
      Senha: values.Senha
  
    }).then((response) => 
     {alert('rodou')
    });
    
};



  
  return (
       <label>

          <form onSubmit={handleClickRegister} >
            <StyledInput type="text" name="Nome" placeholder="Insira Seu nome"/>
            <br/>
            <StyledInput type="text" name="CodigoP" maxLength={11} placeholder="Insira seu CPF"/>
            <br/>
            <StyledInput type="tel" name="TEL" placeholder="Insira Seu Telefone"/>
            <br/>
            <StyledInput type="text" name="Endereco" placeholder="Insira Seu Endereço"/>
            <br/>
            <StyledInput type='email' name='Email' placeholder="Insira Seu email" />
            <br/>
            <StyledInput type="password" name="Senha"  placeholder="Insira Sua senha"/>
            <br/>
            <br/>
            <br/>
            <ButtonRegister/>
            <br/>
            <br/>
            
            <AccountTxT> <Link to='/Login'>JA POSSUI UMA CONTA ? </Link> </AccountTxT>
            </form>
      </label>

         

    )
}


export default RegisterInputs