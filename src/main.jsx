import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CrudComponent from './CrudComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CrudComponent/>
    {/* <App /> */}
  </React.StrictMode>,
)
