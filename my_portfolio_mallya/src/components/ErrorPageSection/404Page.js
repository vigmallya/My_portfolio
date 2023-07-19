import React,{useState} from "react";
import {useInView} from 'react-intersection-observer'
import {
  PageContainer,
  PageWrapper,
  PageRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
  ImgWrap,
  ArrowBack
} from "./ErrorPageElements";
import { BackHomeButton } from "../ButtonElements";

const Page404 = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  to,
}) => {
    
const { ref: myRef, inView} = useInView();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <PageContainer lightBg={lightBg} id={id} >
        <PageWrapper>
          <PageRow imgStart={imgStart}>
            <Column1 ref={myRef} inView={inView}>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <BackHomeButton
                    to='/'
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    smooth={true}
                    duartion={500}
                    spy={true}
                    exact="true"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}<ArrowBack/>
                  </BackHomeButton>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2 ref={myRef} inView={inView}>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </PageRow>
        </PageWrapper>
      </PageContainer>
    </>
  );
};

export default Page404;
