import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(

  <Auth0Provider
    domain="dev-90hckbyv.us.auth0.com"
    clientId="tSjyYuhEZoVIJ12ZYMX1Dlgt1QMzaG0K"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  
  document.getElementById('root')
);
