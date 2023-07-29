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
background-color: rgba(0, 0, 0, 0.61);
backdrop-filter: blur(5px);
color:#fff;
transition: all 1s ease-in-out;
`
export const ModalWrapper= styled.div`
position: fixed;
max-width: 420px;
width: 90%;
height: 90%;
max-height: 320px;
top:50%;
left:50%;
z-index: 12;
transform: translate(-50%,-50%);
background-color: #fff;
padding: 15px;
border-radius: 8px;
`

export const ModalH2= styled.h2`
margin-bottom: 12px;
font-size:24px;
line-height: 1.1;
font-weight: 600;
color: '#010606';
text-align: center;

@media screen and (max-width:480px){
    font-size:32px;
}
`
export const ModalBody= styled.div`
font-size: 14px;
line-height: 24px;
color:'#000';
margin: 0px 10px 10px;
font-family: 'cursive';
font-weight: 600;
text-align:center;
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