import React from 'react';
import { SidebarContainer,SidebarIcon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <SidebarIcon onClick={toggle}>
            <CloseIcon/>
        </SidebarIcon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>About
                </SidebarLink>
                <SidebarLink to='work' onClick={toggle}>Work Experience
                </SidebarLink>
                <SidebarLink to='qualifications' onClick={toggle}>Qualifications
                </SidebarLink>
                <SidebarLink to='contact' onClick={toggle}>Contact
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'>Download CV</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
    </>
  )
}

export default Sidebar