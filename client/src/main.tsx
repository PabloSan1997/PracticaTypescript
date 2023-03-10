import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provedor } from './contexto/contexto'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provedor>
    <App />
  </Provedor>
    
)
