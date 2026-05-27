import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import { store } from './Store'

import A from './A'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <A />
  </Provider>
)