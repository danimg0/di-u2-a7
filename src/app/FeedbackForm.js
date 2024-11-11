import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Enviando: "${message}"`);
    setIsSent(true);
  }

  if (isSent) {
    return <h1>¡Gracias!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Mensaje"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}
