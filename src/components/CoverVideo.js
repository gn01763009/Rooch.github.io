import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/Home Video.mp4'


const VideoContainer = styled.div`
width: 100%;
border-radius: 2rem;
padding-top: 2rem;
padding-left: 2rem;
padding-right: 2rem;
border: 3px solid ${props => props.theme.text};

video{
    width: 100%;
    height: auto;
}

@media (max-width: 64em) {
  min-width: 40vh;
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
        <video src={GIF} type="video/mp4" autoPlay muted loop  />
    </VideoContainer>
  )
}

export default CoverVideo