import { useState } from 'react';
import styled from 'styled-components';
import { fakeMenu2 } from '../../../../fakeData/fakeMenu.js';
import { theme } from '../../../../theme/index.js';

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled className="menu">
      {menu.map((produit) => {
        return (
          <div className="menu__produit" key={produit.id}>
            <img className="menu__produit__image" src={produit.imageSource} alt={produit.title} />
            <div className="menu__produit__info-text">
              <div className="menu__produit__title">{produit.title}</div>
              <div className="menu__produit__description">{produit.description}</div>
            </div>
            <div className="menu__produit__price">{produit.price} €</div>
            <button className="menu__produit__button">Ajouter</button>
          </div>
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  grid-column-gap: 20px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  .menu__produit {
    background: red;
    width: 240px;
    height: 330px;
  }

  .menu__produit__image {
    width: 100px;
    height: auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;
