import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Opcoes = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    padding: 8px;
    height: 100%;
    min-width: 100px;
    cursor: pointer;
    color: red;
    
`


const textoOpcoes = ['QUEM SÃO', 'CRIAR CONTA', 'ADOTAR']

function OpcoesHeader () {
    const OptionStyle = {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '17px',
        padding: '8px',
        height: '100%',
        minWidth: '100px',
        cursor: 'pointer',
        textDecoration: 'none',
       
    };
    
    
    
    return(
     <nav>
        <Opcoes>
            <li style={OptionStyle}> <Link to='/Quemsao'> QUEM SÃO </Link> </li>
            <li style={OptionStyle}> <Link to='/CriarConta'> CRIAR CONTA </Link> </li>
            <Opcao> <Link to='/Adotar'> ADOTAR </Link> </Opcao>
        </Opcoes>
     </nav>
    )
}

export default OpcoesHeader