import React from 'react'
import { Button, LinkButton } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1,TextWrapper,TopLine,
        Heading,Subtitle,BtnWrap, Column2, Img, ImgWrap, AnimatedText } from './InfoElements';
import {useInView} from 'react-intersection-observer';


const InfoSection = ({lightBg,id,imgStart, topLine, lightText,headline,
darkText,description,buttonLabel,img,alt,primary, dark, to, animateText, disabled}) => {
const { ref: myRef, inView} = useInView();
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart} ref={myRef} inView={inView}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    {animateText?<AnimatedText
                    sequence={[
                        'A Frontend Developer',
                        1000,
                        'A Backend Developer',
                        1000,
                        'A Full Stack Developer',
                        1000,
                        'A Human Being 😜',
                        1000
                    ]}
                    wrapper='div'
                    speed={50}
                    lightText={lightText}
                    repeat={Infinity}
                    /> :<Heading lightText={lightText}>{headline}</Heading>}
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    {id==='work'? 
                    // <BtnWrap>
                    //     <LinkButton
                    //     href='Vignesh_Mallya_Resume.pdf'
                    //     download='Vignesh_Mallya_Resume.pdf'
                    //     primary={primary? 1 : 0}
                    //     dark={dark ? 1: 0}>
                    //     {buttonLabel}
                    //     </LinkButton>
                    // </BtnWrap>
                    ""
                    : <BtnWrap>
                        <Button to={to} 
                        smooth={true}
                        duartion={500}
                        spy={true} 
                        exact="true"
                        offset={-80}
                        primary={primary? 1 : 0}
                        dark={dark ? 1: 0}
                        >{buttonLabel}</Button>
                    </BtnWrap>}
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection