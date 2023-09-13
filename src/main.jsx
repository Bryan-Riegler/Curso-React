import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyDCurcpV0Z59wIc1BOr99Ax-UPErqgBuEw",
  authDomain: "la-tienda-14ec6.firebaseapp.com",
  projectId: "la-tienda-14ec6",
  storageBucket: "la-tienda-14ec6.appspot.com",
  messagingSenderId: "402717274419",
  appId: "1:402717274419:web:f2752ef431f5f011f40e46"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
