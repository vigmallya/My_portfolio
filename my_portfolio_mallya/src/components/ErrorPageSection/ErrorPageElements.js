import styled from 'styled-components'
import {IoReturnUpBack} from 'react-icons/io5'
import { Link } from 'react-router-dom'

export const PageContainer= styled.div`
color:#fff;
background:  ${({lightBg})=>(lightBg? '#f9f9f9':'#010606')};

@media screen and (max-width:760px){
    padding: 100px 0;
}
`

export const PageWrapper= styled.div`
display: grid;
z-index: 1;
height: 100vh;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`

export const PageRow= styled.div`
display: grid;
grid-auto-columns: minmax(auto,1fr);
align-items: center;
grid-template-areas: ${({imgStart})=>(imgStart?`"col2 col1"`:`"col1 col2"`)};
//AnimateScroll Css
transition: 'all 2s ease-in-out';

@media screen and (max-width:760px){
    grid-template-areas: ${({imgStart})=>(imgStart?`"col1" "col2"`:`"col1 col1" "col2 col2"`)};
}
`

export const Column1=styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
//AnimateSlide Css
opacity: ${({inView})=>(inView?1:0)};
transition: ${({inView})=>(inView?'all 1s':'')};
transform: ${({inView})=>(inView? 'translateX(0)' : 'translateX(-100%)')};
`
export const Column2=styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;

//AnimateSlide Css
opacity: ${({inView})=>(inView?1:0)};
transition: ${({inView})=>(inView?'all 1s':'')};
transform: ${({inView})=>(inView? 'translateX(0)' : 'translateX(100%)')};

&:hover{
    transform: rotate3d(1, 1, 3, -30deg);
    transition: all 0.3s ease-in-out;
}
`
export const TextWrapper= styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`
export const TopLine= styled.p`
color: #40E0D0;
font-size: 25px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Heading= styled.h1`
margin-bottom: 24px;
font-size:45px;
line-height: 1.1;
font-weight: 600;
color: ${({lightText})=>(lightText?'#f7f8f8':'#010606')};

@media screen and (max-width:480px){
    font-size:32px;
}
`
export const Subtitle= styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({darkText})=>(darkText?'#010606':'#fff')};
`
export const BtnWrap= styled(Link)`
display: flex;
justify-content: flex-start;
text-decoration: none;
`

export const ImgWrap= styled.div`
max-width: 555px;
height: 100%;
`

export const Img= styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`
export const ArrowBack = styled(IoReturnUpBack)`
  margin-left: 8px;
  font-size: 20px;
`;