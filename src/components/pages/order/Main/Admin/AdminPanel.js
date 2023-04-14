import styled from 'styled-components';
import { theme } from '../../../../../theme';
import OrderContext from '../../../../../context/OrderContext';
import { useContext } from 'react';

export default function AdminPanel() {
  const { isAddSelected, isEditSelected } = useContext(OrderContext);

  return (
    <AdminPanelStyled>
      {isAddSelected && <p>Ajouter un produit</p>}
      {isEditSelected && <p>Modifier un produit</p>}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  height: 250px;
`;
