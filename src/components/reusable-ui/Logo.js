import styled from 'styled-components';

export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src="/logo-orange.png" alt="logo" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
<<<<<<< HEAD
=======
  border: 1px solid blue;
>>>>>>> 69d8306e8bd5779ac02e5d9ad48a9bfed8f96b4c
  display: flex;
  align-items: center;
  transform: scale(2.5);

  h1 {
    display: inline;
    text-align: center;
    color: #ffa01b;
    font-size: 36px;
    line-height: 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: 'Amatic SC', cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 5px;
  }
`;
