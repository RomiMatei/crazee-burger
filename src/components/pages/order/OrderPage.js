import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import { theme } from '../../../theme';
import { useState } from 'react';
import OrderContext from '../../../context/OrderContext';

export default function OrderPage() {
  // state
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [isEditSelected, setIsEditSelected] = useState(false);

  // comportements
  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected
  };

  //affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStayled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStayled>
    </OrderContext.Provider>
  );
}

const OrderPageStayled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 98vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }
`;
