import { MdArrowForward } from 'react-icons/md'
import styled from 'styled-components'

export const ServiceContainer= styled.div`
 height: 680px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background: #010606;

 @media screen and (max-width: 760px) {
    height: 1250px;
    padding: 0 24px;
 }

 @media screen and (max-width: 480px) {
    height: 1500px;
 }
`
export const ServiceWrapper= styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding:0 20px;
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

export const QualificationsH1= styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width:480px) {
    font-size: 2rem;
}
`

export const QualificationsH2= styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`

export const QualificationsP= styled.p`
font-size: 1rem;
text-align: left ;
`

export const ArrowForward = styled(MdArrowForward)`
  font-size: 22px;
  padding-top: 7px;
`
