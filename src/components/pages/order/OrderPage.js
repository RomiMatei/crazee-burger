import React, { useState } from 'react';

export default function OrderPage() {
  // state
  const [inputValue, setInputValue] = useState('');

  // comportenments
  const handleSubmit = (event) => {
    event.preventDefault(); //evite le rechargement de la page
    setInputValue('');
  };

  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // affichage(render)
  return (
    <div>
      <h1 handleSubmit={inputValue}>Bonjour </h1>
      <br />
      <button>Déconnexion</button>
    </div>
  );
}
