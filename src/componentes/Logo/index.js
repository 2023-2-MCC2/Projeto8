import logo from '../../imagens/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoContainer = styled.div`
    display:flex;
    font-size:22px;
`
const LogoImage = styled.img`
    margin-right: 10px;
    width: 80px;
`
function Logo(){
    return(
        <LogoContainer>
        <Link to='/'>
        <LogoImage 
            src={logo}
            alt="Descrição da Imagem"
           />
           </Link>
      </LogoContainer>
    )
}

export default Logo