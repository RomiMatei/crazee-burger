import React from 'react';
import styled from 'styled-components';
import Logo from '../../reusable-ui/Logo';

export default function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled>
      <Logo />
    </NavbarLeftSideStyled>
  );
}

const NavbarLeftSideStyled = styled.nav`
  background: red;
  /* width: 50%; */
  transform: scale(0.5);
`;
