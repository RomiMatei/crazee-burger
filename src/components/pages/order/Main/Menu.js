import { useState } from 'react';
import styled from 'styled-components';
import { fakeMenu2 } from '../../../../fakeData/fakeMenu.js';

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled className="menu">
      {menu.map((produit) => {
        return (
          <div className="menu__produit" key={produit.id}>
            {/* <img className="menu__produit__image" src={produit.imageSource} alt={produit.title} /> */}
            <div className="menu__produit__title">{produit.title}</div>
            {/* <div className="menu__produit__price">{produit.price} €</div> */}
          </div>
        );
      })}
      <div className="menu__title">Menu</div>
      <div className="menu__content">Content</div>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: purple;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  grid-column-gap: 20px;
  padding: 50px 50px 150px;
  justify-items: center;

  .menu__produit {
    background: red;
    width: 240px;
    height: 330px;
  }
`;
