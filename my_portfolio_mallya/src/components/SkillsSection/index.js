import React, { useState } from 'react'
import { SkillsContainer, SkillsWrapper,SkillsContent, SkillsHeader, SkillsHeaderWrapper,
          SkillsTitle, SkillsSubtitle,SkillsArrowIcon, SkillsList, SkillsListWrapper, SkillsTitleWrapper, 
          SkillsName, SkillsNumber,SkillsBar, SkillsPercentageTag} from './SkillsElemets';
import { SkillsObj } from './data';

const Skills = () => {
  const [open, setOpen]= useState(0);

  const toggleSkills=(index)=>{
    if(open===index){
      setOpen(-1);
    }else{
      setOpen(index);
    }
  }

  return (
    <>
    <SkillsContainer>
      <SkillsWrapper>
       {SkillsObj.map((data,index)=>{
        return (
          <SkillsContent onClick={()=>toggleSkills(index)}>
          <SkillsHeader>
            {data.Icon}
            <SkillsHeaderWrapper>
              <SkillsTitle>{data.skillsTitle}</SkillsTitle>
              <SkillsSubtitle>{data.skillsSubtitle}</SkillsSubtitle>
            </SkillsHeaderWrapper>
            <SkillsArrowIcon open={index===open}/>
          </SkillsHeader>
          <SkillsList open={index===open}>
            {data.skillsDetails.map((items)=>{
              return (
                <SkillsListWrapper>
                <SkillsTitleWrapper>
                  <SkillsName>{items.skillsName}</SkillsName>
                  <SkillsNumber>{items.skillsNumber}</SkillsNumber>
                </SkillsTitleWrapper>
                <SkillsBar>
                  <SkillsPercentageTag skillsPercent={items.skillsNumber}></SkillsPercentageTag>
                </SkillsBar>
            </SkillsListWrapper>
              )
            })}
          </SkillsList>
        </SkillsContent>
        )
       })} 
      </SkillsWrapper>
    </SkillsContainer>
    </>
  )
}

export default Skills;