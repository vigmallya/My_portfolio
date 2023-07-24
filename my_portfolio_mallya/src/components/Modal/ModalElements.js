import styled from 'styled-components'

export const Modal = styled.div`
transition: 'all 2s ease-in-out';
`

export const ModalContainer= styled.div`
position: fixed;
left: 0;
right: 0;
top:0;
bottom:0;
z-index: 11;
background: #000;
/* background: rgba(189,189,189,0.5); */
color:#fff;
transition: all 1s ease-in-out;
`
export const ModalWrapper= styled.div`
position: fixed;
max-width: 1100px;
width: 90%;
height: 90%;
top:50%;
left:50%;
z-index: 12;
transform: translate(-50%,-50%);
background-color: #fff;
padding: 15px;
border-radius: 8px;
`
export const ModalH2= styled.h2`
margin-bottom: 24px;
font-size:36px;
line-height: 1.1;
font-weight: 600;
color: '#010606';

@media screen and (max-width:480px){
    font-size:32px;
}
`
export const ModalBody= styled.div`
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color:'#000';
`
export const BodyWrapper= styled.div`
display: flex;
flex-direction: column;
z-index: 1;
height: 100%;
width: 100%;
justify-content: center;
align-items: center;
border: 2px solid #40E0D0;
outline: 1px solid #000;
border-radius: 8px;
`
export const CloseIcon= styled.div`
display: flex;
z-index: 1;
font-size:30px;
padding: 12px;
justify-content: end;
width: 100%;
align-items: end;
`
export const BodyRow= styled.div`
display: grid;
grid-auto-columns: minmax(auto,1fr);
justify-content: center;
align-items: start;
height: 100%;
width: 100%;
overflow: auto;
grid-template-areas: ${({imgStart})=>(imgStart?`"col2 col1"`:`"col1 col2"`)};
//AnimateScroll Css\
transition: ${({inView})=>(inView?'all 2s ease-in-out':'')};

@media screen and (max-width:800px){
    grid-template-areas: ${({imgStart})=>(imgStart?`"col1" "col2"`:`"col1 col1" "col2 col2"`)};
}
`
export const Column1=styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
/* overflow: auto; */

opacity: ${({inView})=>(inView?1:0)};
transition: ${({inView})=>(inView?'all 1s':'')};
transform: ${({inView})=>(inView? 'translateX(0)' : 'translateX(-20%)')};
`
export const Column2=styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
display: flex;
justify-content: center;

opacity: ${({inView})=>(inView?1:0)};
transition: ${({inView})=>(inView?'all 1s':'')};
transform: ${({inView})=>(inView? 'translateX(0)' : 'translateX(-20%)')};
`
export const ImgWrap= styled.div`
max-width: 400px;
max-height: 330px;

`
export const Img= styled.img`
width: 100%;
height: 100%;
max-height: 330px;
margin: 0 0 10px 0;
padding-right: 0;
`