import React, { useState, useRef } from 'react'
import { Button } from '../ButtonElements'
import { ContactContainer,ContactWrapper, ContactRow,Column1,Column2,TextWrapper,TopLine, 
    ContactForm, Form ,FormLabel, FormInput , BtnWrap,ImgWrap, Img, ContactTabs,
    ContactIcons, MailIcon, PhoneIcon, VerticalLine, LineWrapper} from './ContactElemets';
import {toast} from 'react-toastify';
import { useInView } from "react-intersection-observer";
import emailjs from '@emailjs/browser';

const Conatct = ({lightBg,id,imgStart, topLine, lightText,
    darkText,buttonLabel,img,alt,primary, dark ,dark2, mailID, mobileNumber}) => {
const { ref: myRef, inView} = useInView();
const [formValue, setFormValue]=useState({});
const form = useRef();

const formOnChange=(e)=>{
    setFormValue({...formValue, [e.target.name]:e.target.value})
}

const notifier=(message, value)=>{
    let toastify= value? toast.success : toast.error ;
    toastify(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    emailjs.sendForm('service_64xvamk', 'template_fewa3nr', form.current, 'iR3yRYzd0RV8SdOrL')
      .then((result) => {
        notifier('Message Sent Successfully', true);
        form.current.reset();
      }, (error) => {
        notifier('Message not sent! Service problem!!', false);
      });
  };

  return (
    <>
    <ContactContainer lightBg={lightBg} id={id} >
        <ContactWrapper>
            <ContactRow imgStart={imgStart} ref={myRef} inView={inView}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <ContactTabs darkText={darkText}>
                        <ContactIcons>
                            <MailIcon/>
                            {mailID}
                        </ContactIcons>
                        <LineWrapper>
                            <VerticalLine/>
                        </LineWrapper>
                        <ContactIcons>
                            <PhoneIcon/>
                                {mobileNumber}
                        </ContactIcons>
                    </ContactTabs>
                    <ContactForm>
                        <Form action="#" lightBg={lightBg} ref={form} onSubmit={sendEmail}>
                            <FormLabel htmlFor='name' lightText={lightText}>Name:</FormLabel>
                            <FormInput type='text' required placeholder="Write your Name" name="user_name" onChange={(e)=>formOnChange(e)}/>
                            <FormLabel htmlFor='email' lightText={lightText}>Email:</FormLabel>
                            <FormInput type='email' required placeholder="Write your email" name="user_email" onChange={(e)=>formOnChange(e)}/>
                            <FormLabel htmlFor='subject' lightText={lightText}>Subject:</FormLabel>
                            <FormInput type='text' required placeholder="Write your subject" name="user_subject" onChange={(e)=>formOnChange(e)}/>
                            <FormLabel htmlFor='description' lightText={lightText}>Message:</FormLabel>
                            <FormInput type='text' required placeholder="Write your message" name="user_message" onChange={(e)=>formOnChange(e)}/>
                            <BtnWrap>
                                <Button
                                smooth={true}
                                duartion={500}
                                spy={true} 
                                exact="true"
                                primary={primary? 1 : 0}
                                dark={dark ? 1: 0}
                                dark2={dark2 ? 1: 0}
                                to=''
                                onClick={sendEmail}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </Form>
                    </ContactForm>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </ContactRow>
        </ContactWrapper>
    </ContactContainer>
    </>
  )
}

export default Conatct