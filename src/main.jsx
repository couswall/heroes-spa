import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroesApp } from './HeroesApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* Se agrega el componente padre que tendrá toda la aplicación */}
      <HeroesApp/>    
  </React.StrictMode>,
)
