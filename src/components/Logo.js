import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import RoochLogo from '../assets/rooch-logo.png'

const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;

&:hover{
    transform: scale(1.1);
}

@media (max-width: 64em){
font-size: ${props => props.theme.fontxxl};

}
`

const Logo = () => {
  return (
    <LogoText>
        <Link to="/" style={{display:'flex', alignItems:'center'}}>
          <img src={RoochLogo} height={100} width={100} alt='logo'/>
        </Link>
    </LogoText>
  )
}

export default Logo