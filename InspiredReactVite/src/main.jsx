import React from 'react'
import ReactDOM from 'react-dom/client'

import 'normalize.css'
// import './index.scss'
import './style.scss'

// import App comp not by default
import { App } from './App.jsx'

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
