import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider divider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
          Experiece with <br />
            React.js,Lit-Elements,Web Components
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
          Working Experiece with <br />
            Node js and firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size='3rem'/>
        <ListContainer>
          <ListTitle>UX/UI</ListTitle>
          <ListParagraph>
          Experiece with <br />
            UX Design Process & Information Gathering
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
