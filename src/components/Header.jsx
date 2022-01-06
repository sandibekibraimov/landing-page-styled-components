import React from 'react';
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Button } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' />
          <Button>Try it free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build the community your fans will love</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              incidunt in animi necessitatibus debitis rem quisquam praesentium.
              Et, delectus possimus!
            </p>
            <Button bg='#ff0099' color='#fff'>
              Get Started for free
            </Button>
          </div>

          <Image src='./images/illustration-mockups.svg' alt='image' />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
