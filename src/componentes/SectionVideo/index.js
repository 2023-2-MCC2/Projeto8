
import styled from 'styled-components'
import video from '../../imagens/dogs-heaven.mp4'
 

const VideoContainer = styled.div`
width: 100%;
height: 400px;
`



const ImagemVideo = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
`
function SectionVideo (){
    return (
        <VideoContainer>
            <ImagemVideo autoPlay>
                <source src={video} type='video/mp4'/>
            </ImagemVideo>
       </VideoContainer>
    )

}

export default SectionVideo

