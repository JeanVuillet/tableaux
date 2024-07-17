
'use client'
import { OAuth2Client } from '@badgateway/oauth2-client';


export default function Login() {

  const client = new OAuth2Client({
    server: 'https://www.flickr.com/services/oauth/',
    clientId: 'c9f10f419c7ee17812798af5c75a7705', 
    clientSecret: ' 5ee40c96d9ba25fc', // Utiliser la variable d'environnement
    redirectUri: 'http://localhost:3000/api/callback',
    authorizationEndpoint: '/authorize',
  });

  const handleLogin = async () => {
    try {
      const authorizeUri = await client.authorizationCode.getAuthorizeUri({
        scope: ['read'],
        state: 'your-state-value',
      });
      window.location.href = authorizeUri;

      const token = localStorage.getItem('flickrToken');

if (token) {
  console.log("Le token est présent:", token);
  // Utilisez le token pour accéder aux données Flickr
} else {
  console.log("Le token n'est pas présent.");
  // Redirigez l'utilisateur vers la page de connexion
}
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <button onClick={handleLogin}>Connect to Flickr</button>
  );
}