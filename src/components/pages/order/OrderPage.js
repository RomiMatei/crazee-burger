import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function OrderPage() {
  // state
  const { username } = useParams();

  // comportements

  //affichage
  return (
    <OrderPageStayled>
      <div className="container">
        <div className="navbar">
          Navbar
          <h1>Bonjour {username}</h1>
        </div>
        <div className="main">Main</div>
        {/* <Link to="/">
          <button>Déconnexion</button>
        </Link> */}
      </div>
    </OrderPageStayled>
  );
}

const OrderPageStayled = styled.div`
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 98vh;
    width: 1400px;
    display: flex;
    flex-direction: column;

    .navbar {
      background: blue;
      height: 10vh;
    }

    .main {
      background: green;
      flex: 1;
    }
  }
`;
