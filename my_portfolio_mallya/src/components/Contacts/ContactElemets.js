import styled from 'styled-components';

export const ContactContainer= styled.div`
color:#fff;
background:  ${({lightBg})=>(lightBg? '#f9f9f9':'#010606')};

@media screen and (max-width:760px){
    padding: 100px 0;
}
`
export const ContactWrapper= styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`

export const ContactRow= styled.div`
display: grid;
grid-auto-columns: minmax(auto,1fr);
align-items: center;
grid-template-areas: ${({imgStart})=>(imgStart?`"col2 col1"`:`"col1 col2"`)};

@media screen and (max-width:760px){
    grid-template-areas: ${({imgStart})=>(imgStart?`"col1" "col2"`:`"col1 col1" "col2 col2"`)};
}
`
export const Column1=styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`
export const Column2=styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`
export const TextWrapper= styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`
//Contcat form 

export const TopLine= styled.p`
color: #40E0D0;
font-size: 20px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Subtitle= styled.p`
max-width: 440px;
margin-bottom: 20px;
font-size: 15px;
line-height: 24px;
color: ${({darkText})=>(darkText?'#010606':'#fff')};
`
export const BtnWrap= styled.div`
display: flex;
justify-content: flex-start;
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
export const ContactForm= styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-wdith:480px) {
    padding: 10px;
}
`
export const Form= styled.form`
background:  ${({lightBg})=>(lightBg?'#010606':"#40E0D0")};
max-width: auto;
height: auto;
width :100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 40px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);

@media screen and (max-width: 400px) {
    padding: 32px 32px;
}
`

export const FormLabel= styled.label`
color: ${({lightText})=>(lightText?'#f7f8f8':'#010606')};
margin-bottom: 8px;
font-size: 14px;
font-weight: 600;
`
export const FormInput= styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`
export const FormTextArea= styled.textarea`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`