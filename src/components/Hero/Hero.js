import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection >
      <SectionTitle main center>
        Un breve paseo por <br/>
        nuestras memorias
      </SectionTitle>
      <SectionText>
        Nuestra historia inició hace un año. Está llena de altibajos pero nunca ha faltado el amor ni la comunicación. Este es un paseo muy breve, muy pequeño de lo que ha sido nuestra historia, desde aquí se construye. Con suerte, con amor, será infinita. 
      </SectionText>
      <Button onClick={()=> window.location.replace("/#album")}>Iniciar</Button>
    </LeftSection>
  </Section>
);

export default Hero;