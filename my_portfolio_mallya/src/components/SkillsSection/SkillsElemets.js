import styled from 'styled-components'
import {PiBracketsCurlyBold} from 'react-icons/pi'
import {FiChevronDown} from 'react-icons/fi'
import {HiServerStack} from 'react-icons/hi2'
import {BiCategory} from 'react-icons/bi'

export const SkillsContainer= styled.div`
    row-gap: 0;
`
export const SkillsWrapper= styled.div`
`

export const SkillsContent= styled.div`
margin-top: 15px;    
`

export const SkillsHeader= styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
`
export const SkillsBracketIcon= styled(PiBracketsCurlyBold)`
    font-size: 35px;
    color: #40E0D0;
    margin-right: 10px;
`
export const SkillsBackendIcon= styled(HiServerStack)`
    font-size: 35px;
    color: #40E0D0;
    margin-right: 10px;
`
export const SkillsDesignIcon= styled(BiCategory)`
    font-size: 35px;
    color: #40E0D0;
    margin-right: 10px;
`

export const SkillsHeaderWrapper=styled.div`
`

export const SkillsArrowIcon= styled(FiChevronDown)`
    font-size: 24px;
    color: #40E0D0;
    margin-left: auto;
    transition: .4s;
    transform: ${({open})=>open? 'rotate(-180deg)':''}; 
`
export const SkillsTitle=styled.div`
    font-size: 24px;
`
export const SkillsSubtitle=styled.div`
    font-size: 16px;
    color:#40E0D0;
    font-weight: 600;
`
export const SkillsTitleWrapper= styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`
export const SkillsName= styled.div`
    font-size: 18px;
    font-weight: 600;
`
export const SkillsNumber= styled.div`
    font-size: 18px;
    font-weight: 600;
`
export const SkillsBar= styled.div`
    height: 5px;
    border-radius: 4px;
    background-color: #000;
`
export const SkillsPercentage= styled.div`
    height: 5px;
    border-radius: .25rem;
    display: block;
    background-color: #40E0D0;
`
export const SkillsList= styled.div`
    row-gap: 20px;
    padding-left: 40px;
    height: ${({open})=>open?'max-content':0};
    overflow: ${({open})=>open?'':'hidden'};
    margin-bottom : ${({open})=>open?'10px':''};
`
export const SkillsListWrapper= styled.div`
`

export const SkillsPercentageTag= styled(SkillsPercentage)`
    width: ${({skillsPercent})=>skillsPercent};
`


