import { useState } from 'react';

function Login() {
  const [prenom, setPrenom] = useState('');

  const handleChange = (event) => {
    setPrenom(event.target.value);
  };

  const handleClick = () => {
    if (prenom) {
      alert('Bonjour ' + prenom);
    } else {
      alert('Ce champ est obligatoire !');
    }
  };

  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form action="submit">
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          required="required"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Accédez à votre espace</button>
      </form>
    </div>
  );
}

export default Login;
