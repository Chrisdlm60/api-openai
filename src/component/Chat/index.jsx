import React from 'react';
import './index.css'

const Chat = ({ response }) => {
    return (
        <div className="chat-response">
          <p >Réponse OpenAI : <span id="ai_response">{response}</span></p>
        </div>
      );
};

export default Chat;