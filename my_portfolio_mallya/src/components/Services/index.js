import React from 'react';
import { ServiceContainer, ServiceCard, ServiceIcon, ServiceWrapper, QualificationsH1, QualificationsH2,
     QualificationsP} from './ServiceElemets'
import {useInView} from 'react-intersection-observer'

const Qualifications = ({imageObj}) => {
const { ref: myRef, inView} = useInView();
  return (
    <>
    <ServiceContainer id="qualifications" ref={myRef}>
        <QualificationsH1>My Qualifications & Skills</QualificationsH1>
        <ServiceWrapper>
            {imageObj.map((item)=>{
                return (
                <ServiceCard ref={myRef} inView={inView} className='card'>
                    <ServiceIcon src={item.Icon}/>
                    <QualificationsH2>{item.QualificationsH2}</QualificationsH2>
                    <QualificationsP>{item.QualificationsP}</QualificationsP>
                    <QualificationsP>{item.QualificationsP2}</QualificationsP>
                </ServiceCard>)})}
        </ServiceWrapper>
    </ServiceContainer>
    </>
  )
}

export default Qualifications