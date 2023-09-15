const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express(); // Créer un serveur Express

const port = process.env.PORT || 5000; // Écoute sur le port 5000 par défaut (ou utilisez celui spécifié dans les variables d'environnement) 

// Solution #1 
// Récupération de la clé API OpenAI depuis les variables d'environnement côté serveur
// const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY

app.use(cors()); // Activez CORS pour permettre les requêtes cross-origin
app.use(express.json()); // Utilisez le middleware express.json pour analyser le corps des requêtes en JSON

// Définition de la route POST pour gérer les requêtes d'API
app.post('/api/chat', async (req, res) => {
  
  try {
    const { text, apiKey } = req.body; // Récupération du texte à envoyer à OpenAI à partir du corps de la requête

    // Requête POST vers l'API OpenAI
    const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
      prompt: text,
      max_tokens: 100,
    }, {
      headers: {
        // Configuration de l'authentification API
        //
        // J'ai eu un soucis de récupération des variables d'environnements côté serveur, aujourd'hui que je n'avais pas hier
        //
        // 'Authorization': `Bearer ${openaiApiKey}`, // solution #1
        'Authorization': `Bearer ${apiKey}`, // solution #2
        'Content-Type': 'application/json', // Spécifie le type de contenu de la requête comme JSON
      },
    });

     // Envois de la réponse générée par OpenAI en tant que réponse JSON au client
    res.json({ response: response.data.choices[0].text });
  } catch (error) {
    console.error('Erreur Axios :', error);
    if (error.response) {
      console.error('Réponse du serveur :', error.response.data);
    }
  }
});

app.listen(port, () => {
  console.log(port)
  console.log(process.env.REACT_APP_OPENAI_API_KEY)
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
