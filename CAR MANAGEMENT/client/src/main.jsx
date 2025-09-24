
import { createRoot } from 'react-dom/client';
import './index.css'; // Fixed path
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // Fixed package name and spacing

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
