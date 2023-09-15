
import React, { useState } from 'react';
import axios from 'axios';
import './index.css'

// solution #2
// côté REACT
const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

const MessageInput = ({ setResponse }) => {
    // Etat local pour stocker le texte saisi par l'utilisateur
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Requete POST via URL
        // #1
        // const response = await axios.post('http://localhost:5000/api/chat', { text });
        // #2
        const response = await axios.post('http://localhost:5000/api/chat', { text, apiKey: openaiApiKey });
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
