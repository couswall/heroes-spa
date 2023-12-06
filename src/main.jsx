import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroesApp } from './HeroesApp.jsx'
import { HashRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      {/* Se agrega el componente padre que tendrá toda la aplicación */}
      <HeroesApp/>  
    </HashRouter>
        
  </React.StrictMode>,
)
