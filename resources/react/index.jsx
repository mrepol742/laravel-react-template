import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './app'
import store from './store'
import 'bootstrap';

const div = document.createElement('div')
document.body.appendChild(div)
createRoot(div).render(
    <Provider store={store}>
        <App />
    </Provider>,
)
