import React from 'react';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

 return (
  <FooterContainer>
   <FooterWrap>
    <FooterLinksContainer>
     <FooterLinksWrapper>
      <FooterLinkItems>
       <FooterLinkTitle>About us</FooterLinkTitle>
        <FooterLink to="/signin">How it works</FooterLink>
        <FooterLink to="/signin">Testimonials</FooterLink>
        <FooterLink to="/signin">Careers</FooterLink>
        <FooterLink to="/signin">Investors</FooterLink>
        <FooterLink to="/signin">Terms of Service</FooterLink>
      </FooterLinkItems>
      <FooterLinkItems>
       <FooterLinkTitle>Contact us</FooterLinkTitle>
        <FooterLink to="/">Contact</FooterLink>
        <FooterLink to="/">Support</FooterLink>
        <FooterLink to="/">Destinations</FooterLink>
        <FooterLink to="/">Sponsorphips</FooterLink>
      </FooterLinkItems>
     </FooterLinksWrapper>
     <FooterLinksWrapper>
      <FooterLinkItems>
       <FooterLinkTitle>Videos</FooterLinkTitle>
        <FooterLink to="/">Submit Videos</FooterLink>
        <FooterLink to="/">Ambassadors</FooterLink>
        <FooterLink to="/">Agency</FooterLink>
        <FooterLink to="/">Influencer</FooterLink>
      </FooterLinkItems>
      <FooterLinkItems>
       <FooterLinkTitle>Social Media</FooterLinkTitle>
        <FooterLink to="/">Instagram</FooterLink>
        <FooterLink to="/">Facebook</FooterLink>
        <FooterLink to="/">YouTube</FooterLink>
        <FooterLink to="/">Twitter</FooterLink>
      </FooterLinkItems>
     </FooterLinksWrapper>
    </FooterLinksContainer>
    <SocialMedia>
     <SocialMediaWrap>
      <SocialLogo to='/' onClick={toggleHome}>
       dolla
      </SocialLogo>
      <WebsiteRights>dolla &copy; {new Date().getFullYear()} All rights reserved.
      </WebsiteRights>
      <SocialIcons>
       <SocialIconLink href="/" target="_blank" aria-label="Facebook">
       <FaFacebook />
       </SocialIconLink>
       <SocialIconLink href="/" target="_blank" aria-label="Instagram">
       <FaInstagram />
       </SocialIconLink>
       <SocialIconLink href="/" target="_blank" aria-label="YouTube">
       <FaYoutube />
       </SocialIconLink>
       <SocialIconLink href="/" target="_blank" aria-label="Twitter">
       <FaTwitter />
       </SocialIconLink>
       <SocialIconLink href="/" target="_blank" aria-label="Likedin">
       <FaLinkedin />
       </SocialIconLink>
      </SocialIcons>
     </SocialMediaWrap>
    </SocialMedia>
   </FooterWrap>
  </FooterContainer>
 );
}

export default Footer;
