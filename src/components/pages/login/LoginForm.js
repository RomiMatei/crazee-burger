import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsPersonCircle } from 'react-icons/bs';

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  // comportenments
  const handleSubmit = (event) => {
    event.preventDefault(); //evite le rechargement de la page
    setInputValue('');
    navigate(`order/${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr color="#ffa01b" width="100%" />
      <h2>Connectez-vous</h2>
      <div className="input-with-icon">
        <BsPersonCircle className="icon" />
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom"
          required
        />
<<<<<<< HEAD
=======
        <button>Accéder à mon espace</button>
>>>>>>> 69d8306e8bd5779ac02e5d9ad48a9bfed8f96b4c
      </div>
      <button>Accéder à mon espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  background-color: green;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: 'Amatic SC', cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }
  h1 {
    color: white;
    font-size: 48px;
  }

  h2 {
    color: white;
    margin: 20px 10px 10px;
    font-size: 36px;
  }

  .input-with-icon {
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1;
    }

    input {
      border: none;
      font-size: 16px;
      color: #17161a;
    }

    &::placeholder {
      background-color: white;
      color: lightgrey;
    }
  }
`;
