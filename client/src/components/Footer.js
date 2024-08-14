import React from 'react';
import styled from 'styled-components';


const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          
          All the terms and conditions belong to ExTi.com
        </FooterSection>
       
       
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: transparent;
  padding: 2rem 1rem;
  border-top: 1px solid #eaeaea;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: black;
`;

const FooterSection = styled.div`
  margin-bottom: 1.5rem;
`;






