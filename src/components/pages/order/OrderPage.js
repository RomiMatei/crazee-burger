import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Main from './Main';
import { theme } from '../../../theme';

export default function OrderPage() {
  // state
  const { username } = useParams();

  // comportements

  //affichage
  return (
    <OrderPageStayled>
      <div className="container">
        <Navbar username={username} />
        <Main />
      </div>
    </OrderPageStayled>
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
