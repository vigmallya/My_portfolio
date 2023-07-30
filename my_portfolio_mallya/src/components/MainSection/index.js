import React, { useState } from 'react'
import { MainContainer, MainBackground, VideoBackground, MainContent,MainH1, MainP,MainBtnWrapper,ArrowForward,ArrowRight } from './MainElements';
import Video from '../../videos/video.mp4'
// import Image from '../../images/HomePage3.jpg'
import { Button } from '../ButtonElements';
const MainSection = () => {

  const [hover, setHover]= useState(false);

  const onHover=()=>{
    setHover(!hover)
  }

  return (
    <>
    <MainContainer id="home">
        <MainBackground>
            <VideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
            {/* <ImageBackground src={Image} alt='Scenary'/> */}
        </MainBackground>
        <MainContent>
          <MainH1>Hey! Welcome to my digital playground!</MainH1>
          <MainP>I invite you to take a stroll through my digital realm, where creativity meets functionality. </MainP>
          <MainBtnWrapper>
            <Button to="about" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary="true" 
            dark="true"
            smooth={true}
            duaration={500}
            spy={true}
            exact="true"
            offset={-80}
            >Get Started {hover? <ArrowForward/>: <ArrowRight/>}</Button>
          </MainBtnWrapper>
        </MainContent>
    </MainContainer>
    </>
  )
}

export default MainSection