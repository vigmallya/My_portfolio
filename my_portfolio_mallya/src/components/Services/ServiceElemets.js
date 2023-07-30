import { MdArrowForward } from 'react-icons/md'
import styled from 'styled-components'

export const ServiceContainer= styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background: #010606;
 width: 100%;
`
export const ServiceWrapper= styled.div`
max-width: 1000px;
height: max-content;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 0 100px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
}
`
export const ServiceCard= styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);

//AnimateScroll Css
opacity: ${({inView})=>(inView?1:0)};
transition: ${({inView})=>(inView?'all 1s':'')};
transform: ${({inView})=>(inView? 'translateX(0)' : 'translateX(-100%)')};

&.card:nth-child(1){
    transition-delay: 600ms;
}

&.card:nth-child(2){
    transition-delay: 400ms;
}

&.card:nth-child(3){
    transition-delay: 200ms;
}

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const ServiceIcon= styled.img`
height: 160px;
width:160px;
margin-bottom: 10px;
`

export const ServiceH1= styled.h1`
font-size: 36px;
color: #fff;
margin: 80px 0 64px 30px;

@media screen and (max-width:480px) {
    font-size: 32px;
}
`

export const ServiceH2= styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`

export const ServiceP= styled.p`
font-size: 1rem;
text-align: left ;
`

export const ArrowForward = styled(MdArrowForward)`
  font-size: 22px;
  padding-top: 7px;
`
