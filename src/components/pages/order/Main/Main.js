import styled from 'styled-components';
import { theme } from '../../../../theme';
import MainRightSide from './MainRightSide/MainRightSide';
// import Basket from './Basket';

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <MainRightSide />
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
`;
