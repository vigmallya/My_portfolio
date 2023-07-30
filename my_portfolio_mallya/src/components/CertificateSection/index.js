import React from 'react'
import { CertificateWrapper, ImgWrap, Img, ImgViewButton } from './CertificationElements'
import {useInView} from 'react-intersection-observer';


const CertificationSection = ({certificateObj}) => {

    const { ref: myRef, inView} = useInView();
  return (
    <>
    <CertificateWrapper ref={myRef} inView={inView}>
        {certificateObj.map((img)=>{
            return <ImgWrap>
                    <Img src={img.Icon} alt={img.alt}/>
                    <ImgViewButton
                        href={img.Icon}
                        target='_blank'
                        primary={0}
                        dark={0}>
                        View</ImgViewButton>
                </ImgWrap>
        })}
    </CertificateWrapper>
    </>
  )
}

export default CertificationSection