import styled from "styled-components";

const StyledInputs = styled.input `
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


function LoginInputs () {
  
  const handleClickLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
        Email: values.Email,
        Senha: values.Senha,
    }).then((response) => {alert(response.data.msg)});
};

    return(
      <form onSubmit={handleClickLogin}>
          <label>
          <StyledInputs type="email" name="Email"  placeholder='Email'/>
          <br/>
          <br/>
          <br/>
          <StyledInputs type="password" name='Senha' placeholder="Senha"/>
          </label>
        </form>
    )

}
export default LoginInputs