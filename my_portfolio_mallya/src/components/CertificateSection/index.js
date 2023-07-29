import React from 'react'
import { CertificateWrapper, ImgWrap, Img } from './CertificationElements'
import {useInView} from 'react-intersection-observer';


const CertificationSection = ({certificateObj}) => {

    const { ref: myRef, inView} = useInView();
  return (
    <>
    <CertificateWrapper ref={myRef} inView={inView}>
        {certificateObj.map((img)=>{
            return <ImgWrap>
                    <Img src={img.Icon} alt={img.alt}/>
                </ImgWrap>
        })}
    </CertificateWrapper>
    </>
  )
}

export default CertificationSection