import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
// O BrowserRouter é ideal para aplicações com deploy em servidores que 
// podem processar rotas. Porém neste caso utilizarei o GitHub Pages, 
// que é uma hospedagem estática, logo, o HashRouter é obrigatório, pois ele lida com 
// rotas utilizando o hash (#) na URL, evitando erros de 404 ao tentar acessar rotas diretamente.

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
