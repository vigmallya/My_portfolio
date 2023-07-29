import React, { useEffect } from "react";
import {TiArrowBack} from 'react-icons/ti';
import {useInView} from 'react-intersection-observer';
import {
  ModalContainer,
  ModalWrapper,
  ModalH2,
  ModalBody,
  BodyWrapper,
  BodyRow,
  Column1,
  Column2,
  CloseIcon,
  Modal,
  Img,
  ImgWrap,
  CertificateBodyRow,
} from "./ModalElements";
import Skills from "../SkillsSection";
import TreeSection from "../TreeSection";
import { TreeStudiesObj,TreeWorkObj } from "../TreeSection/data"; 
import CertificationSection from "../CertificateSection";
import { certificateObj } from "../CertificateSection/data";

const ModalSection = ({ displayModal, data }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const DisplayData=(data)=>{
    let element;
    if(data.toLowerCase()==='studies'){
      element=<TreeSection  TreeObj={TreeStudiesObj}/>;
    }else if(data.toLowerCase() ==='skills'){
      element=<Skills/> ;
    }else if(data.toLowerCase()==='work'){
      element=<TreeSection TreeObj={TreeWorkObj} />
    }else{
      element=<CertificationSection certificateObj={certificateObj}/>
    }
    return element;
  }

  const { ref: myRef, inView} = useInView();
  return (
    <>
    <Modal>
      <ModalContainer onClick={displayModal}></ModalContainer>
      <ModalWrapper ref={myRef} inView={inView}>
        <BodyWrapper>
            <CloseIcon><TiArrowBack onClick={displayModal}/></CloseIcon>
            <ModalH2>{data.ServicesH2}</ModalH2>
          {data.content.toLowerCase()==='certificates'?
          <CertificateBodyRow>
            <ModalBody>{DisplayData(data.content)}</ModalBody>
          </CertificateBodyRow>:
          <BodyRow imgStart={data.imgStart}>
            <Column1 ref={myRef} inView={inView}>
              <ModalBody>{DisplayData(data.content)}</ModalBody>
            </Column1>
            <Column2 ref={myRef} inView={inView}>
            <ModalBody>
                <ImgWrap>
                    <Img src={data.Icon} alt={data.alt}/>
                </ImgWrap>
            </ModalBody>
            </Column2>
          </BodyRow>
          }
        </BodyWrapper>
      </ModalWrapper>
      </Modal>
    </>
  );
};

export default ModalSection;
