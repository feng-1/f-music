import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '@/assets/css/reset.css'
import api from './services'

window.$_api = api
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

