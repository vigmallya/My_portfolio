import React, { useState } from 'react';
import { ServiceContainer, ServiceCard, ServiceIcon, ServiceWrapper, ServiceH2, ServiceH1} from './ServiceElemets'
import {useInView} from 'react-intersection-observer'
import ModalSection from '../Modal';
import {Button} from '../ButtonElements'

const ServiceSection = ({imageObj}) => {
const { ref: myRef, inView} = useInView();
const [showModal, setShowModal]= useState(false);
const [clickedCard, setClickedCard]= useState(-1);

const displayModal=(index)=>{
  setShowModal(!showModal);
  setClickedCard(index)
}
  return (
    <>
    <ServiceContainer id="services" ref={myRef}>
        <ServiceH1>My Qualifications & Skills</ServiceH1>
        <ServiceWrapper>
            {imageObj.map((item,index)=>{
                return (
                <ServiceCard key={index} ref={myRef} inView={inView} className='card'>
                    <ServiceIcon src={item.Icon}/>
                    <ServiceH2>{item.ServicesH2}</ServiceH2>
                    <Button to="" onClick={()=>displayModal(index)}>{item.ServicesP}</Button>
                </ServiceCard>)})}
        </ServiceWrapper>
    </ServiceContainer>
    {showModal && <ModalSection displayModal={()=>displayModal()} data={imageObj[clickedCard]}/>}
    </>
  )
}

export default ServiceSection;