import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Store} from "./Components/ReduxToolkit/Store.jsx"
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>,
)
