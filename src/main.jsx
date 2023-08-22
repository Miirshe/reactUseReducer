import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserCreateContext } from './state/UserCreateContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserCreateContext >
    <App />
    </UserCreateContext>
  </React.StrictMode>,
)
