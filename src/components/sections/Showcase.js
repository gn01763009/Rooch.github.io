import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'

import img2 from '../../assets/Nfts/head-1.webp';
import img3 from '../../assets/Nfts/head-2.webp';
import img4 from '../../assets/Nfts/head-3.webp';
import img5 from '../../assets/Nfts/head-4.webp';
import img6 from '../../assets/Nfts/head-5.webp';
import img7 from '../../assets/Nfts/head-6.webp';
import img8 from '../../assets/Nfts/head-7.webp';
import img9 from '../../assets/Nfts/head-8.webp';
import ETH from '../../assets/icons8-ethereum-48.png'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child{
  animation-duration: 20s;

  @media (max-width: 30em){
    animation-duration: 15s;

  }
}
&>*:last-child{
  animation-duration: 15s;
  @media (max-width: 30em){
    animation-duration: 10s;

  }
}
`
const move = keyframes`
0%{ transform: translateX(100%)   };
100%{ transform: translateX(-100%)   }

`

const Row = styled.div`
/* background-color: lightblue; */
white-space: nowrap;
box-sizing:content-box;
margin: 2rem 0;
display: flex;

animation: ${move}  linear infinite ${props => props.direction};


`
const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color:${props => props.theme.body};

border-radius: 20px;
cursor: pointer;

@media (max-width: 48em){
  width: 12rem;
  }
  @media (max-width: 30em){
  width: 10rem;
  }

img{
  width: 100%;
  height: auto;
}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color:${props => `rgba(${props.theme.bodyRgba},0.5)`};
  font-weight:600;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight:600;

  @media (max-width: 30em){
    font-size: ${props => props.theme.fontsm};

  }

}

`

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;

}
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const NftItem = ({ img, name = "", offer = "", price = "", passRef }) => {

  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  }
  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  }


  return (
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}  >
      <img width={500} height={400} src={img} alt="The Weirdos" />
      <Details>
        <div>
          <span>Name</span> <br />
          <h1>{name}</h1>
          <span>Get offer</span> <br />
          <h1>{offer}</h1>

          <span>Salary</span>
          <Price>
            <img width={200} height={200} src={ETH} alt="ETH" />
            <h1>{price}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  )
}


const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id="showcase">
      <Title>Success Story</Title>
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img2} name={"Benjamin Anderson"} offer={"Apple Inc."} price={"US$162,364"} passRef={Row1Ref} />
        <NftItem img={img3} name={"Emily Davis"} offer={"Amazon"} price={"US$129,610"} passRef={Row1Ref} />
        <NftItem img={img4} name={"William Johnson"} offer={"Microsoft"} price={"US$212,164"} passRef={Row1Ref} />
        <NftItem img={img5} name={"Olivia Martinez"} offer={"Facebook"} price={"US$192,000"} passRef={Row1Ref} />


      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <NftItem img={img6} name={"Alexander Thompson"} offer={"Google"} price={"US$436,198"} passRef={Row2Ref} />
        <NftItem img={img7} name={"Sophia Wilson"} offer={"Tesla"} price={"US$222,176"} passRef={Row2Ref} />
        <NftItem img={img8} name={"James Harris"} offer={"Netflix"} price={"US$462,836"} passRef={Row2Ref} />
        <NftItem img={img9} name={"Ava Miller"} offer={"Intel Corporation"} price={"US$122,876"} passRef={Row2Ref} />


      </Row>
    </Section >
  )
}

export default Showcase