import styled from 'styled-components'
import { LinkButton } from '../ButtonElements'

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
position: relative;
`
export const Img= styled.img`
width: 100%;
height: 100%;
max-height: 330px;
padding: 5px;
`

export const ImgViewButton= styled(LinkButton)`
    position: absolute;
    right: 10px;
    bottom: 10px;
    font-size: 15px;
    height: 40px;

    @media screen and (max-width: 860px) {
        font-size: 10px;
        height: 15px;
    }
`