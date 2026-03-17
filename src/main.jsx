import { createRoot } from 'react-dom/client';
import "./assets/scss/main.scss";
import "./i18n/index.js";
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <App />
)
