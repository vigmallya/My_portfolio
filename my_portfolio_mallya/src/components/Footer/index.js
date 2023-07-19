import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FooterContainer, FooterWrapper, 
    // FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink ,
        SocialMedia, SocialMediaWrap, SocialLogo,SocialIcons, SocialIconLink, WebsiteRights} from './FooterElements'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const Footer = () => {

    const toggleHome=()=>{
        scroll.scrollToTop();
    }

  return (
    <>
    <FooterContainer>
        <FooterWrapper>
            {/* <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Other Pages</FooterLinkTitle>
                        <FooterLink to="/error_404">Error Page</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Carriers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer> */}
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Mallya
                    </SocialLogo>
                    <WebsiteRights>Mallya❤️© {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='//www.facebook.com/vignesh.mallya.798/' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
                        <SocialIconLink href='//www.instagram.com/_vignesh.mallya_/' target='_blank' aria-label='Instagram'><FaInstagram/></SocialIconLink>
                        <SocialIconLink href='mailto:vignesh.mallya315@gmail.com' aria-label='Gmail'><SiGmail/></SocialIconLink>
                        <SocialIconLink href='//www.linkedin.com/in/vignesh-mallya-abb2a1150/' target='_blank' aria-label='Linkedin'><FaLinkedin/></SocialIconLink>
                        <SocialIconLink href='//www.github.com/vigmallya' target='_blank' aria-label='Twitter'><FaGithub/></SocialIconLink>
                        <SocialIconLink href='//www.twitter.com/mallya315' target='_blank' aria-label='Twitter'><FaTwitter/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrapper>
    </FooterContainer>
    </>
  )
}

export default Footer