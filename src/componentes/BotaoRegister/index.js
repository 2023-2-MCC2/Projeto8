import React from 'react';

const ButtonLogin = () => {

  const handleClickLogin = (values) => console.log(values);

    const StyledButtons = {
  
      marginTop: '28px',
      width: '120px',
      height: '40px',
      background: 'red',
      border: 'none',
      borderRadius: '5px',
      color: '#FFF',
      fontFamily: 'Roboto, sans-serif', 
      fontWeight: '500',
      textTransform: 'uppercase',
      transition: '0.1s ease',
      cursor: 'pointer', 
      marginLeft: '240px',
      justifyContent: 'center', 
      alignItems: 'center',
      display: 'flex',
  
      '&:hover': {
        opacity: 0.8,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
        transition: '0.1s ease',
      },
      '&:focus': {
        opacity: 0.8,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
        transition: '0.1s ease',
      },
  
      '&:active': {
        opacity: 1,
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.4)',
        transition: '0.1s ease',
      },
    }
    
    
    return(
      <button style={StyledButtons} type="submit"
      onClick={() => alert('Login Feito Com Sucesso')}
      >
        ENTRAR
      </button>
  
  
    )
  
  }
  
  export default ButtonLogin