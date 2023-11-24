import { Link } from 'react-router-dom'
import perfil from '../../imagens/perfil.svg'
import styled from 'styled-components'

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const Icone = styled.li`
    display: flex;
    margin-right: 40px;
    width: 60px;
    cursor: pointer;
`
const icones = [perfil]

function IconesHeader(){
    return(
        <Icones>
            {icones.map((icone) =>(
                <Icone><Link to='/Login'><img src={icone}/></Link></Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader