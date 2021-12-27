import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 365, text: 'Momentos y citas inolvidables'},
  { number: 200, text: 'Sesiones de sexo sucio', },
  { number: 1900, text: 'Minutos en besitos mojados', },
  { number: 3000, text: 'Mimitos emapalagosos, el novio más cursis', }
];

const Acomplishments = () => (
  <section>
    <SectionTitle>
      Mis logros como novio
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
         <BoxNum>{card.number}+</BoxNum>
         <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </section>
);

export default Acomplishments;
