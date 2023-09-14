
import React, { useState } from 'react';
import axios from 'axios';
import './index.css'

const MessageInput = ({ setResponse }) => {
    // Etat local pour stocker le texte saisi par l'utilisateur
    const [text, setText] = useState('');

    // Fonction submit
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Requete POST 
        const response = await axios.post('http://localhost:5000/api/chat', { text });
        // Mettre à jour l'état response avec celle reçue du serveur
        setResponse(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="user_text"
            placeholder="Entrez une phrase"
            value={text} 
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Envoyer</button>
        </form>
      </>
    );
  }

export default MessageInput;
