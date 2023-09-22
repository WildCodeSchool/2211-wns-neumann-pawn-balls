import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import { ApolloProvider } from '@apollo/client'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import client from './services/apolloClient'

import App from './App'
import './index.css'
import CartContextProvider from './services/context/CartContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <CartContextProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </CartContextProvider>
  </BrowserRouter>
)
