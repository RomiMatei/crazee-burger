import React from 'react';
import styled from 'styled-components';
import NavbarRightSide from './NavbarRightSide';
import Logo from '../../../reusable-ui/Logo';
import { theme } from '../../../../theme';

export default function Navbar({ username }) {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <NavbarStyled>
      <Logo className="logo-order-page" onClick={reloadPage} />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo-order-page {
    cursor: pointer;
  }
`;
