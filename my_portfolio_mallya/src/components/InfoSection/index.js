import React from 'react'
import { Button, CVButton } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1,TextWrapper,TopLine,
        Heading,Subtitle,BtnWrap, Column2, Img, ImgWrap } from './InfoElements';
import {useInView} from 'react-intersection-observer'


const InfoSection = ({lightBg,id,imgStart, topLine, lightText,headline,
darkText,description,buttonLabel,img,alt,primary, dark ,dark2,to}) => {
const { ref: myRef, inView} = useInView();
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart} ref={myRef} inView={inView}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    {id==='work'? 
                    <BtnWrap>
                        <CVButton
                        href='Vignesh_Mallya_Resume.pdf'
                        download='Vignesh_Mallya_Resume.pdf'
                        primary={primary? 1 : 0}
                        dark={dark ? 1: 0}
                        dark2={dark2 ? 1: 0}>
                        {buttonLabel}
                        </CVButton>
                    </BtnWrap>
                    : <BtnWrap>
                        <Button to={to} 
                        smooth={true}
                        duartion={500}
                        spy={true} 
                        exact="true"
                        primary={primary? 1 : 0}
                        dark={dark ? 1: 0}
                        dark2={dark2 ? 1: 0}
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