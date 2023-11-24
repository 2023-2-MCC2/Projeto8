import { Link } from "react-router-dom";

function MeuBotao() {

    const botaoStyle = {
      backgroundColor: '#333333',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    };
  
    return (
      <button style={botaoStyle}> <Link to='/Adotar'>
        Saiba Mais 
        </Link>
      </button>
    );
  }
  
  export default MeuBotao