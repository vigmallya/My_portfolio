import styled from "styled-components";
import { BiCalendar } from "react-icons/bi";

export const TreeContainer = styled.div``

export const TreeWrapper = styled.div``

export const TreeData = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 10px;
`

export const TreeDataWrapper = styled.div``

export const TreeEmptyDiv = styled.div``

export const TreeHeader = styled.h3`
  font-size: 16px;
  font-weight: 600;
`
export const TreeSubtitle = styled.span`
  display: inline-block;
  font-size: 15px;
`
export const TreeCalendar = styled.div`
  font-size: 14px;
  color: #40E0D0;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`
export const TreeCalendarIcon = styled(BiCalendar)`
  font-size: 16px;
  color: #000;
  margin-right: 10px;
`
export const TreeCalendarYear = styled.div``

export const TreeRounderWrapper = styled.div``

export const TreeRounder = styled.div`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: #40E0D0;
  border-radius: 50%;
  z-index: 1;
  position: relative;
`
export const TreeLine = styled.div`
  display: block;
  width: 1px;
  height: 100%;
  background-color: #000;
  transform: translate(6px, -7px);
`
