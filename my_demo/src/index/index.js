import React from 'react'
import ReactDom from 'react-dom'
import 'normalize.css/normalize.css'

import './index'
import App from './App.js'

import { Provider } from 'react-redux'
import store from './store'

ReactDom.render(
  <Provider store={store}><App></App></Provider>, document.getElementById('root')
)