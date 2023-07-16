import React,{useState} from 'react'
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
// import { ToastContainer } from 'react-toastify';
import { NotificationBar } from '../components/Utility/NotificationElements';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

const [isOpen,setIsOpen]=useState(false);

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
      <Qualifications {...imageObj}/>
      <Conatct {...contactObj} />
      <Footer/>
      <NotificationBar/>
    </>
  )
}

export default Home