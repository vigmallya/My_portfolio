import React from 'react'
import { TreeContainer,TreeWrapper,TreeData, TreeDataWrapper, TreeHeader, TreeSubtitle,
        TreeCalendar, TreeCalendarIcon, TreeCalendarYear,TreeRounderWrapper, TreeRounder, TreeLine, TreeEmptyDiv} from './TreeSectionElements';    

const TreeSection = ({TreeObj}) => {

    const TextDataContent = (data, index, value) => {
        return (
          <TreeData>
            {(index%2!==0) && <> 
            <TreeEmptyDiv />
            <TreeRounderWrapper>
              <TreeRounder />
              {!value &&<TreeLine />}
            </TreeRounderWrapper> 
            </>}
            <TreeDataWrapper>
              <TreeHeader>{data.Header}</TreeHeader>
              <TreeSubtitle>{data.Subtitle}</TreeSubtitle>
              <TreeCalendar>
                <TreeCalendarIcon />
                <TreeCalendarYear>{data.CalendarYear}</TreeCalendarYear>
              </TreeCalendar>
            </TreeDataWrapper>
            {(index%2===0) &&
            <TreeRounderWrapper>
              <TreeRounder />
              {!value &&<TreeLine />}
            </TreeRounderWrapper>}
          </TreeData>
        );
    }
        
  return (
    <>
    <TreeContainer>
        <TreeWrapper>
            {TreeObj.map((data, index)=>{
                let value= index === TreeObj.length-1;
                if(index %2===0){
                    return TextDataContent(data,index, value);
                }else{
                    return TextDataContent(data,index, value);
                }
            })}
        </TreeWrapper>
    </TreeContainer>
    </>
  )
}
export default TreeSection;