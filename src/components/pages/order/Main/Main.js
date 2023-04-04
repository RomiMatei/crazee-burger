import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../theme';
import Menu from './Menu';

export default function Main() {
  return (
    <MainStyled className="main">
      {/* <div className="basket">Basket</div> */}
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;

  display: grid;
  grid-template-columns: 1fr;

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  /* .basket {
    background: pink;
  } */

  .menu {
    background: purple;
  }
`;