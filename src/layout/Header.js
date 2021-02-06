import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import { Burger } from '../components/Burger';
import { Button } from '../components/Button';
import React from 'react';

export const Header = ({ title }) => {
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <StyledHeader>
      <Flex>
        <img src={logo} alt='Logo représentation Kivsta' width='auto' />
        <h1>{title}</h1>
      </Flex>
      <Navigation>
        <Burger setIsClicked={setIsClicked} isClicked={isClicked} />
        <ul>
          <LI>
            <a href='#'>Home</a>
          </LI>
          <LI>
            <a href='#features'>Features</a>
          </LI>
          <LI>
            <a href='#pricing'>Pricing</a>
          </LI>
          <LI>
            <Button text='Register' />
          </LI>
        </ul>
      </Navigation>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  width: 80vw;
  margin: auto;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: flex-end;
`;

const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2rem;
`;

const Navigation = styled.nav``;

const LI = styled.li`
  display: inline-block;
  padding: 0 0 0 5rem;

  @media (max-width: 1200px) {
    display: none;
  }
`;
