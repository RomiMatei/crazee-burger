import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsPersonCircle } from 'react-icons/bs';

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <div className="username">
        <h1>Hey, {username}</h1>
        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
      </div>
      <BsPersonCircle className="icon" />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.nav`
  background: pink;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  /* width: 50%; */

  .username {
    background: yellow;
  }

  .icon {
    font-size: 32px;
    color: blue;
    margin: 0 1rem;
  }
`;
