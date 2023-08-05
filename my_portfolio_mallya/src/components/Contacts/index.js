import React, { useState, useRef } from 'react'
import { ButtonBtn } from '../ButtonElements'
import { ContactContainer,ContactWrapper, ContactRow,Column1,Column2,TextWrapper,TopLine, 
    ContactForm, Form ,FormLabel, FormInput ,ImgWrap, Img, ContactTabs,
    ContactIcons, MailIcon, PhoneIcon, VerticalLine, LineWrapper, ErrorMessage, AllErrorMessage, Loader, FormInputArea} from './ContactElemets';
import {toast} from 'react-toastify';
import { useInView } from "react-intersection-observer";
import emailjs from '@emailjs/browser';

const Conatct = ({lightBg,id,imgStart, topLine, lightText,
    darkText,buttonLabel,img,alt,primary, dark ,dark2, mailID, mobileNumber}) => {
const { ref: myRef, inView} = useInView();

const initialValue={name:'', email:'',subject:'', message:''};
const formValidity={name:false, email:false,subject:false, message:false, buttonActive:false};
const [formValue, setFormValue]=useState(initialValue);
const [formError, setFormError]=useState(initialValue);
const [formValid, setFormValid]=useState(formValidity);
const [allMessage,setAllMessage]= useState('');
const [spinner, setSpinner]=useState(false);

const form = useRef();

const formOnChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setAllMessage('');
    setFormValue({...formValue, [name]:value});
    formValidator(name, value);
}

const formValidator=(name, value)=>{
    value=value.trim();
    let formErrorObj = formError;
    let formValidObj= formValid;
    switch (name) {
        case 'name':
            if(value===''){
                formErrorObj.name='Name is required'
                formValidObj.name=false;
            }else{
                formErrorObj.name="";
                formValidObj.name=true;
            }
            break;
        case 'email': 
            let regex = /^[\w-.]+@([\w-]{4,}\.)[\w-]{2,3}$/
            if(value===''){
                formErrorObj.email='Email is required'
                formValidObj.email=false;
            }else if(!value.match(regex)){
                formErrorObj.email='Email is not valid'
                formValidObj.email=false;
            }
            else{
                formErrorObj.email="";
                formValidObj.email=true;
            }
            break;
        case 'subject': 
            if(value===''){
                formErrorObj.subject='Subject is required'
                formValidObj.subject=false;
            }else{
                formErrorObj.subject="";
                formValidObj.subject=true;
            }
            break;
        case 'message': 
            if(value===''){
                formErrorObj.message='Message is required'
                formValidObj.message=false;
            }else{
                formErrorObj.message="";
                formValidObj.message=true;
            }
            break;
        default: 
            break;
    }
    formValidObj.buttonActive=formValidObj.name && formValidObj.email && formValidObj.subject && formValidObj.message;
    setFormError(formErrorObj);
    setFormValid(formValidObj)
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
    if(formValid.buttonActive){
        setSpinner(true);
        emailjs.sendForm('service_64xvamk', 'template_fewa3nr', form.current, 'iR3yRYzd0RV8SdOrL')
        .then((result) => {
            setSpinner(false);
            notifier('Message Sent Successfully', true);
            form.current.reset();
            setFormValue(initialValue);
            setFormError(initialValue);
            setFormValid(formValidity);
        }, (error) => {
            setSpinner(false);
            notifier('Message not sent! Service problem!!', false);
        })
    }else{
        setAllMessage('Please enter all the above fields');
    }
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
                        <Form action="#" lightBg={lightBg} ref={form} autocomplete="off" onSubmit={(e)=>sendEmail(e)}>
                            <FormLabel htmlFor='name' lightText={lightText}>Name:</FormLabel>
                            <FormInput type='text'  placeholder="Write your Name" value={formValue.name} name="name" onChange={(e)=>formOnChange(e)}/>
                            <ErrorMessage>{formError.name}</ErrorMessage>
                            <FormLabel htmlFor='email' lightText={lightText}>Email:</FormLabel>
                            <FormInput type='email'  placeholder="Write your email" value={formValue.email} name="email" onChange={(e)=>formOnChange(e)}/>
                            <ErrorMessage>{formError.email}</ErrorMessage>
                            <FormLabel htmlFor='subject' lightText={lightText}>Subject:</FormLabel>
                            <FormInput type='text'  placeholder="Write your subject" value={formValue.subject} name="subject" onChange={(e)=>formOnChange(e)}/>
                            <ErrorMessage>{formError.subject}</ErrorMessage>
                            <FormLabel htmlFor='description' lightText={lightText}>Message:</FormLabel>
                            <FormInputArea type='text' rows="3"  placeholder="Write your message" value={formValue.message} name="message" onChange={(e)=>formOnChange(e)}/>
                            <ErrorMessage>{formError.message}</ErrorMessage>
                            <ButtonBtn
                                smooth={true}
                                duartion={500}
                                spy={true} 
                                exact="true"
                                disabled={spinner}
                                primary={primary? 1 : 0}
                                dark={dark ? 1: 0}
                                dark2={dark2 ? 1: 0}
                                type='submit'
                            >{spinner?<Loader/>:buttonLabel}</ButtonBtn>
                            <AllErrorMessage>{allMessage}</AllErrorMessage>
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