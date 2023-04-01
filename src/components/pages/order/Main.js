import React from 'react';
import styled from 'styled-components';

export default function Main() {
  return (
    <MainStyled className="main">
      <h1>Main</h1>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: green;
  flex: 1;
`;
