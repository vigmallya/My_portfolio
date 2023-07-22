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
  Modal
} from "./ModalElements";

const ModalSection = ({ displayModal, data }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const { ref: myRef, inView} = useInView();
  console.log(myRef, inView, "consolleeee")
  return (
    <>
    <Modal>
      <ModalContainer onClick={displayModal}></ModalContainer>
      <ModalWrapper>
        <BodyWrapper>
            <CloseIcon><TiArrowBack onClick={displayModal}/></CloseIcon>
            <ModalH2>{data.QualificationsH2}</ModalH2>
          <BodyRow imgStart={data.imgStart}>
            <Column1 ref={myRef} inView={inView}>
              <ModalBody>{data.QualificationsP}</ModalBody>
            </Column1>
            <Column2 ref={myRef} inView={inView}>
            <ModalBody>
            {data.QualificationsP2}
            </ModalBody>
            </Column2>
          </BodyRow>
        </BodyWrapper>
      </ModalWrapper>
      </Modal>
    </>
  );
};

export default ModalSection;
