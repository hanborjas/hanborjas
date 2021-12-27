import React from 'react';
import { FaMusic, FaPenFancy } from "react-icons/fa";
import { HiPhotograph } from "react-icons/hi";

import {  LinkItem } from '../Footer/FooterStyles';


import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="history">
    <SectionDivider />
    <br />
    <SectionTitle> Nuestra historia</SectionTitle>
    <SectionText>
      El arte siempre ha tratado de describir la vida. Esta vez, quiero usarlo para hablar de de nosotros, de lo que hemos recorrido.
    </SectionText>
    <List>
      <ListItem>
      <FaPenFancy size="3rem" />
      <ListContainer>
        <ListTitle> Haiku</ListTitle>
        <ListParagraph>
          Cierra los ojos<br />
          y aspira el perfume<br />
          de las magnolias<br />
        </ListParagraph>
      </ListContainer>
      </ListItem>

      <ListItem>
      <FaMusic size="3rem" />
      <ListContainer>
        <ListTitle> Música</ListTitle>

        <ListParagraph> 
        <LinkItem href="https://open.spotify.com/track/5DyKHUJL1bnDcWrVoMYTph?si=ad960d19ea1c4efd">
            The Shore - Woodkid <br />
          </LinkItem> 
            </ListParagraph>

           <ListParagraph> 
        <LinkItem href="https://open.spotify.com/track/54KFQB6N4pn926IUUYZGzK?si=083e4d26d05043eb">
            To build a home - The cinematic orchestra <br />
          </LinkItem>
            </ListParagraph>

          <ListParagraph> 
        <LinkItem href="https://open.spotify.com/track/20vEB3It4xYzKHlMecu6X1?si=09c2ee964f70433a">
           Table for two - Abel Korzeniowski <br />
          </LinkItem>
        </ListParagraph>

      </ListContainer>
      </ListItem>

      <ListItem>
      <HiPhotograph size="3rem" />
      <ListContainer>
        <ListTitle> Películas y series</ListTitle>
        <ListParagraph>
          An education<br />
          Atonement<br />
          Normal person<br />
          Maid<br />
          Mcuhas más...
        </ListParagraph>
      </ListContainer>
      </ListItem>


    </List>
  </Section>
);

export default Technologies;
