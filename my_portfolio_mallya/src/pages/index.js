import React,{useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar/index';
import MainSection from '../components/MainSection/index';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/data';
import {imageObj} from '../components/Services/data'
import Qualifications from '../components/Services';
import Footer from '../components/Footer';
import Conatct from '../components/Contacts';
import { contactObj } from '../components/Contacts/data';
import { NotificationBar } from '../components/Utility/NotificationElements';
import 'react-toastify/dist/ReactToastify.css';
import PopupModal from '../components/PopupModal';

const Home = () => {

const [isOpen,setIsOpen]=useState(false);
const [modalOpen, setModalOpen] =useState(false);

useEffect(() => {
    handleOpen();
}, [])

const handleOpen = () => {
  let is_modal_show = sessionStorage.getItem('alreadyShown');
  if(is_modal_show !== 'true'){
    setTimeout(() => {
      setModalOpen(true);
      sessionStorage.setItem('alreadyShown','true');
   }, 15000);
  }  
}

const toggle=()=>{
    setIsOpen(!isOpen);
}

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <MainSection/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Qualifications imageObj={imageObj}/>
      <Conatct {...contactObj} />
      <Footer/>
      <NotificationBar/>
      {modalOpen && <PopupModal setOpen={setModalOpen}/>}
    </>
  )
}

export default Home