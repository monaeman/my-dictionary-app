import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DictionaryApp from './components/DictionaryApp.jsx' 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <DictionaryApp/>
  </React.StrictMode>,
)
