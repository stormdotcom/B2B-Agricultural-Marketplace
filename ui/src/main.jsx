import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './app/store.js';
import { toastTheme } from './config/toast.js';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster {...toastTheme} />
      <App />
    </Provider>
  </StrictMode>
);
