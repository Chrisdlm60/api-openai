import React from 'react';

const Chat = ({ response }) => {
    return (
        <div className="chat-response">
          <p>Réponse OpenAI :</p>
          <p>{response}</p>
        </div>
      );
};

export default Chat;