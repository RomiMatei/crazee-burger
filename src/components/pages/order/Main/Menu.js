import styled from 'styled-components';

export default function Menu() {
  return (
    <MenuStyled className="menu">
      <div className="menu__title">Menu</div>
      <div className="menu__content">Content</div>
    </MenuStyled>
  );
}

const MenuStyled = styled.div``;
