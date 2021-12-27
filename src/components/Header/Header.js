import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiSpotedFlower } from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20"}}>
        
          <GiSpotedFlower syze="3reem" /> <Span> Ryuu's coding</Span>
        </a>
      </Link> 
    </Div1>
    <Div2>
      <li>
        <Link href="#album">
          <NavLink>Álbum de ideas</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#history">
          <NavLink>Historia</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Sobre nosotros</NavLink>
        </Link>
      </li>
    </Div2> 
  </Container>
);

export default Header;
