import styled from "styled-components";
// estilos e props do Conections
const FooterContainer = styled.footer`
width: 100%;
display: flex;
background-color: #545557
`

const FooterDivConection = styled.div`
width: 500px;
height: 240px;
margin-left: 50px;
align-items: center;
justify-content: center;
`

const FooterH1 = styled.h1`
text-align: left;
font-size: 35px;
color: white;
`
const FooterH4 = styled.h4`
text-align: left;
font-size: 20px;
`
const FooterInput = () => {
    const inputStyled = {
        width: '30%',
        padding: '10px',
        border: '2px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        color: '#333',
        };
    
    
    return (
      
      
      <input type="text" placeholder="Insira seu email"  style={inputStyled}/>
    
    );
  }

  const ButtonInputFooter = () => {
    const ButtonStyled = {
        width: '22%',
        height:  '50px',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '16px',
        color: 'white',
        backgroundColor: 'red',
        transition: 'border-color 0.3s',
        cursor: 'pointer',

    };


        return (
        <button 
        style={ButtonStyled}
        onClick={() => alert ('Email Confirmado com Sucesso!')}
            >
        Inscreva-se 
        </button>
        );
    };






  

function Footer () {
    return (

        <FooterContainer>
            <FooterDivConection>
                <FooterH1>FIQUE CONECTADO!</FooterH1>
                <FooterH4>Insira seu email pessoal e fique por dentro das noticias sobre adoções e sobre o HeavenJournal.</FooterH4>
                <FooterInput/>
                <ButtonInputFooter/>
            </FooterDivConection>
        </FooterContainer>

    )


}

export default Footer