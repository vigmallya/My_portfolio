import styled from "styled-components";
import {SiGmail} from 'react-icons/si'
import {BiSolidPhoneCall} from 'react-icons/bi'

export const ContactContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 760px) {
    padding: 100px 0;
  }
`
export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: max-content;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  margin-top: 7%;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};
  //AnimateScroll Css
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transition: ${({ inView }) => (inView ? "all 2s" : "")};

  @media screen and (max-width: 760px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`
//Contcat form

export const TopLine = styled.p`
  color: #40e0d0;
  font-size: 20px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
export const ContactForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`
export const Form = styled.form`
  background: ${({ lightBg }) => (lightBg ? "#010606" : "#40E0D0")};
  max-width: 360px;
  max-height: 420px;
  width: 100%;
  z-index: 1;
  display: grid;
  padding: 20px 28px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`

export const FormLabel = styled.label`
  color: ${({ lightText }) => (lightText ? "#f7f8f8" : "#010606")};
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
`
export const FormInput = styled.input`
  padding: 12px 14px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
`

export const ContactTabs=styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 360px;
    margin-bottom: 10px;
    color: #000;
    font-size: 12px;
    color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
    margin-bottom: 10px;
`
export const ContactIcons= styled.div`
    font-weight: 600;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`
export const MailIcon=styled(SiGmail)`
font-size: 16px;
margin-bottom: 10px;
`
export const PhoneIcon=styled(BiSolidPhoneCall)`
font-size: 16px;
margin-bottom: 10px;
`

export const VerticalLine=styled.div`
  width: 2px;
  height: 100%;
  background-color: #000;
  transform: translate(0px, -1px);
`
export const LineWrapper = styled.div``
