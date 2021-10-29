import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const publishableKey = "pk_test_51JpBn4AXNow734PUUVb1Me7NGDZOiBDlNf2v57LuEqlHX0xenNz9f5PaC1pNzsUDnEazEQwjdZgreeihubxDV7rI00pQXSLtKM"
const stripePromise = loadStripe(publishableKey)

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
