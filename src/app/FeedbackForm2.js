import { useState } from 'react';

export default function FeedbackForm() {

  let name = '';

  function handleClick() {
    name = (prompt('¿Cuál es tu nombre?'));
    alert(`Hola, ${name}!`);
  }

  /*
  Es innecesario usar el estado aqui para el name porque no se va a actualizar el DOM de manera reactiva. El valor del name se va a perder cuando se recargue la página.
  */

  return (
    <button onClick={handleClick}>
      Saludar
    </button>
  );
}
