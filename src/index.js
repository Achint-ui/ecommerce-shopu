import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import ShopContextProvider from './Context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-mjtbssq2fo3oxdjo.us.auth0.com"
    clientId="ruR42VWEPMmXBuvuKeBolMqCL4p9jlS5"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <ShopContextProvider>
          <App />
  </ShopContextProvider>
  </Auth0Provider>

  
);


