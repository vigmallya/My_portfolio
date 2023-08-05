import styled, {css} from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link } from 'react-router-dom'

const sharedStyle=css`
border-radius: 50px;
background: ${({primary})=>(primary? '#40E0D0':'#010606')};
white-space: nowrap;
padding: ${({big})=>(big? '14px 48px':'12px 30px')};
color: ${({dark})=>(dark? '#010606':'#fff')};
font-size: ${({fontBig})=>(fontBig? '20px':'16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary})=>(primary? '#fff':'#40E0D0')};
}
`

export const Button=styled(LinkS)`
    ${sharedStyle}
`

export const LinkButton=styled.a`
    ${sharedStyle}
    text-decoration: none;
`

export const BackHomeButton=styled(Link)`
    ${sharedStyle}
    text-decoration: none;
`

export const ButtonBtn=styled.button`
${sharedStyle}
&:disabled{
    cursor: not-allowed;
}
`