import React from 'react'
import { Modal, ModalContainer, ModalWrapper, BodyWrapper,
        ModalH2, ModalBody } from './PopupModalElements'
import { ButtonBtn } from '../ButtonElements';

const PopupModal = ({setOpen}) => {

  return (
    <>
    <Modal>
      <ModalContainer onClick={()=>setOpen(false)}></ModalContainer>
      <ModalWrapper>
        <BodyWrapper>
            <ModalH2>Welcome to Vignesh's Portfolio</ModalH2>
            <ModalBody>Thank you for visiting my portfolio website! I'm thrilled to have you here. 
              This is a place where I showcase my passion for Web Development.
              If you have any questions, feedback, or project inquiries,
               don't hesitate to get in touch with me. I'd love to hear from you!</ModalBody>
            <ButtonBtn onClick={()=>setOpen(false)}>Get Started</ButtonBtn>
        </BodyWrapper>
      </ModalWrapper>
      </Modal>
    </>
  )
}

export default PopupModal