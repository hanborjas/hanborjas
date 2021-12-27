import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Llámame</LinkTitle>
          <LinkItem href="https://www.facebook.com/profile.php?id=100042970230136"> Grita y ahí estaré, a tu lado siempre</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>¿dónde conseguirme? </LinkTitle>
          <LinkItem href="https://www.facebook.com/profile.php?id=100042970230136">
            Amor de mi vida
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Gracias por permaencer</Slogan>
        </CompanyContainer>
              </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;