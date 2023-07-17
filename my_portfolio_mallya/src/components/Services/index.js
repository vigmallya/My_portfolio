import React from 'react';
import { ServiceContainer, ServiceCard, ServiceIcon, ServiceWrapper, QualificationsH1, QualificationsH2, QualificationsP, ArrowForward } from './ServiceElemets'
import {useInView} from 'react-intersection-observer'

const Qualifications = ({Icon1,Icon2,Icon3}) => {
const { ref: myRef, inView} = useInView();
  return (
    <>
    <ServiceContainer id="qualifications">
        <QualificationsH1>My Qualifications & Skills</QualificationsH1>
        <ServiceWrapper>
            <ServiceCard ref={myRef} inView={inView} className='card'>
                <ServiceIcon src={Icon1} />
                <QualificationsH2>School & College</QualificationsH2>
                <QualificationsP><ArrowForward/>Holy Roasary English Medium School, Kundapura.</QualificationsP>
                <QualificationsP><ArrowForward/>Bhandarkar's Pre University College, Kundapura.</QualificationsP>
            </ServiceCard>
            <ServiceCard ref={myRef} inView={inView} className='card'>
                <ServiceIcon src={Icon2} />
                <QualificationsH2>Engineering</QualificationsH2>
                <QualificationsP><ArrowForward/>Dr. Ambedkar Institue of Technology, Bangalore</QualificationsP>
                <QualificationsP>(Information Science & Enfgineering)</QualificationsP>
            </ServiceCard>
            <ServiceCard ref={myRef} inView={inView} className='card'>
                <ServiceIcon src={Icon3} />
                <QualificationsH2>Skills</QualificationsH2>
                <QualificationsP><ArrowForward/>React</QualificationsP>
                <QualificationsP><ArrowForward/>Node.js</QualificationsP>
                <QualificationsP><ArrowForward/>MongoDB</QualificationsP>
            </ServiceCard>
        </ServiceWrapper>
    </ServiceContainer>
    </>
  )
}

export default Qualifications