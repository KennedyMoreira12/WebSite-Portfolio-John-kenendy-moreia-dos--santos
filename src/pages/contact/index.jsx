import React from 'react';
import { Container, Content, Title, ItemCards } from '../../../styles/contactStyle';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import ItemContact from '../../../components/ItemContact';

export default function Contact() {
  return (
    <Container>
      <Content>
        <Title>Entre em contato</Title>
        <ItemCards>
          <ItemContact
            IconFa={FaLinkedin}
            label="LinkedIn"
            link="https://www.linkedin.com/in/john-kennedy-moreira-405aa7128"
          />
          <ItemContact
            IconFa={FaInstagram}
            label="Instagram"
            link="https://www.instagram.com/johnkennedy7314/"
          />
          <ItemContact
            IconFa={FaEnvelope}
            label="E-mail"
            link="mailto:kennedyjan2012@hotmail.com"
          />
        </ItemCards>
      </Content>
    </Container>
  );
}