import React from 'react';
import SocialIcons from './SocialIcons';

import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logo_white.svg' alt='' />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              officiis sed facere placeat reiciendis, dolorem aliquam esse iste
              earum ipsum?
            </li>
            <li>200 394 45 32</li>
            <li>example@to.com</li>
          </ul>
          <ul>
            <li>About us</li>
            <li>What we do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>

          <SocialIcons />
        </Flex>
        <p>&copy; 2022 huddle. All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
