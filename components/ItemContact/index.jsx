// components/ItemContact.jsx

import React from 'react';
import styled from 'styled-components';

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background-color: #1c1c1f;
  border: 1px solid #26262b;
  border-radius: 12px;
  text-decoration: none;
  color: #e4e4e7;
  font-size: 16px;
  transition: transform 0.3s, border-color 0.3s, color 0.3s;

  &:hover {
    transform: translateY(-3px);
    border-color: #0070f3;
    color: #ffffff;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  color: #0070f3;
  font-size: 26px;
`;

const Label = styled.strong`
  font-size: 16px;
  color: #ffffff;
`;

const LinkText = styled.span`
  color: #a1a1aa;
  font-size: 14px;
  word-break: break-all;
  margin-left: auto;
  text-align: end;
`;

const ItemContact = ({ IconFa, label, link }) => {
  return (
    <ContactCard href={link} target="_blank" rel="noopener noreferrer">
      <IconWrapper>
        <IconFa />
      </IconWrapper>
      <Label>{label}</Label>
      <LinkText>{link.replace('mailto:', '')}</LinkText>
    </ContactCard>
  );
};

export default ItemContact;