import './index.css';
import App from './App.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ScrollToTop } from '../components/logics/ScrollToTop/ScrollToTop.jsx';
// O BrowserRouter é ideal para aplicações com deploy em servidores que 
// podem processar rotas. Porém neste caso utilizarei o GitHub Pages, 
// que é uma hospedagem estática, logo, o HashRouter é obrigatório, pois ele lida com 
// rotas utilizando o hash (#) na URL, evitando erros de 404 ao tentar acessar rotas diretamente.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </StrictMode>
)
