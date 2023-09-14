import React, { useState } from 'react';
import './App.css';
import Chat from './component/Chat';
import MessageInput from './component/MessageInput';


function App() {
  
    const [response, setResponse] = useState('');

        return (
          <div className="App">
            <h1>Client OpenAI</h1>

            <MessageInput setResponse={setResponse} />

            {response && <Chat response={response} />}
          </div>
    
  );
}

export default App;
