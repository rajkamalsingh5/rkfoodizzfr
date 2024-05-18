import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import {ToastContainer} from "react-toastify"
import store from './redux/store.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer/>
    </Provider>
  </React.StrictMode>
  
);