import styled from 'styled-components'

export const CertificateWrapper= styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
align-items: center;
grid-gap: 16px;

opacity: ${({inView})=>(inView?1:0)};
transition: ${({inView})=>(inView?'all 1s':'')};
transform: ${({inView})=>(inView? 'translateY(0)' : 'translateY(20%)')};

@media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding:0 20px;
}
`
export const ImgWrap= styled.div`
border: 1px solid #000;
border-radius: 5px;
`
export const Img= styled.img`
width: 100%;
height: 100%;
max-height: 330px;
padding: 5px;
`