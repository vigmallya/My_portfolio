import React, {useEffect, useState} from 'react';
import {RiFunctionLine} from 'react-icons/ri'
import {IconContext} from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, NavIcons,NavMenu, NavItem, NavLinks , NavBtn, NavBtnLink, NavName} from './NavbarElements';

const Navbar = ({toggle}) => {
  const [scrollNav,setScrollNav]= useState(false);
  const changeNav= ()=>{
    if(window.scrollY> 80){
      setScrollNav(true);
    }else{
      setScrollNav(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',changeNav)
  },[])

  const toggleHome=()=>{
    scroll.scrollToTop();
  }
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}><NavName>Mallya</NavName></NavLogo>
            <NavIcons onClick={toggle}>
              <RiFunctionLine/>
            </NavIcons>
            <NavMenu>
              <NavItem>
                <NavLinks to='about'  
                smooth={true}
                duaration={500} //Speed
                spy={true} //tells which one you are clicking on.. like ID
                exact="true"
                offset={-80}
                >About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="work" 
                smooth={true}
                duaration={500}
                spy={true}
                exact="true"
                offset={-80}
                >Work Experience</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services" 
                smooth={true}
                duaration={500}
                spy={true}
                exact="true"
                offset={-80}
                >Qualifications</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact" smooth={true}
                duaration={500}
                spy={true}
                exact="true"
                offset={-80}
                >Contact</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
            <NavBtnLink to='/error_404'>More</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar