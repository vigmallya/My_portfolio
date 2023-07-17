import React from 'react'
import { Button } from '../ButtonElements'
import { ContactContainer,ContactWrapper, ContactRow,Column1,Column2,TextWrapper,TopLine, Subtitle, 
    ContactForm, Form ,FormLabel, FormInput , BtnWrap,ImgWrap, Img} from './ContactElemets';
import {toast} from 'react-toastify';
import { useInView } from "react-intersection-observer";

const Conatct = ({lightBg,id,imgStart, topLine, lightText,
    darkText,description,buttonLabel,img,alt,primary, dark ,dark2,NotifyMessage}) => {
const { ref: myRef, inView} = useInView();

const notifier=()=>{
    toast(NotifyMessage, {
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
  return (
    <>
    <ContactContainer lightBg={lightBg} id={id} >
        <ContactWrapper>
            <ContactRow imgStart={imgStart} ref={myRef} inView={inView}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <ContactForm>
                        <Form action="#" lightBg={lightBg}>
                            <FormLabel htmlFor='name' lightText={lightText}>Name:</FormLabel>
                            <FormInput type='text' required placeholder="Write your Name"/>
                            <FormLabel htmlFor='email' lightText={lightText}>Email:</FormLabel>
                            <FormInput type='email' required placeholder="Write your email"/>
                            <FormLabel htmlFor='subject' lightText={lightText}>Subject:</FormLabel>
                            <FormInput type='text' required placeholder="Write your subject"/>
                            <FormLabel htmlFor='description' lightText={lightText}>Message:</FormLabel>
                            <FormInput type='text' required placeholder="Write your message" />
                            <BtnWrap>
                                <Button
                                smooth={true}
                                duartion={500}
                                spy={true} 
                                exact="true"
                                primary={primary? 1 : 0}
                                dark={dark ? 1: 0}
                                dark2={dark2 ? 1: 0}
                                onClick={notifier}
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