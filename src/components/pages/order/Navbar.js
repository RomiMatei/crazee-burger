import React from 'react';
import styled from 'styled-components';
import NavbarRightSide from './NavbarRightSide';
import NavbarLeftSide from './NavbarLeftSide';

export default function Navbar() {
  return (
    <NavbarStyled>
      <NavbarLeftSide />
      <NavbarRightSide />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
