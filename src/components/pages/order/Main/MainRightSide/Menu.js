import styled from 'styled-components';
import { fakeMenu2 } from '../../../../../fakeData/fakeMenu.js';
import { theme } from '../../../../../theme/index.js';
import { useState } from 'react';
import Product from '../Product.js';
import { formatPrice } from '../../../../../utils/maths.js';

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Product
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
          />
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
  padding: 30px 30px 150px;
  justify-items: center;
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;
