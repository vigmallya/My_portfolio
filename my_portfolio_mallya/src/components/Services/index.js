import React, { useState } from 'react';
import { ServiceContainer, ServiceCard, ServiceIcon, ServiceWrapper, QualificationsH1, QualificationsH2} from './ServiceElemets'
import {useInView} from 'react-intersection-observer'
import ModalSection from '../Modal';
import {Button} from '../ButtonElements'

const Qualifications = ({imageObj}) => {
const { ref: myRef, inView} = useInView();
const [showModal, setShowModal]= useState(false);
const [clickedCard, setClickedCard]= useState(-1);

const displayModal=(index)=>{
  setShowModal(!showModal);
  setClickedCard(index)
}
  return (
    <>
    <ServiceContainer id="qualifications" ref={myRef}>
        <QualificationsH1>My Qualifications & Skills</QualificationsH1>
        <ServiceWrapper>
            {imageObj.map((item,index)=>{
                return (
                <ServiceCard ref={myRef} inView={inView} className='card'>
                    <ServiceIcon src={item.Icon}/>
                    <QualificationsH2>{item.QualificationsH2}</QualificationsH2>
                    <Button onClick={()=>displayModal(index)}>{item.QualificationsP}</Button>
                </ServiceCard>)})}
        </ServiceWrapper>
    </ServiceContainer>
    {showModal && <ModalSection displayModal={()=>displayModal()} data={imageObj[clickedCard]}/> }
    </>
  )
}

export default Qualifications