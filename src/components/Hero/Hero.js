import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
                Welcome <br/>
                My Portfolio
        </SectionTitle>
        <SectionText>
          My purpose to build portfolio is showchase my Javascript skills and Front End Web Development Skills.
        </SectionText>
        <Button onClick ={() => window.location='https://google.com'}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;