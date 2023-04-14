import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../../theme';
import Menu from './Menu';
import Admin from './Admin/Admin';
import OrderContext from '../../../../context/OrderContext';

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [isEditSelected, setIsEditSelected] = useState(false);

  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && (
          <Admin
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            isAddSelected={isAddSelected}
            setIsAddSelected={setIsAddSelected}
            isEditSelected={isEditSelected}
            setIsEditSelected={setIsEditSelected}
          />
        )}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);

  display: grid;
  grid-template-columns: 1fr;

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  /* .basket {
    border: 3px solid purple;
    background: pink;
  } */

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`;
