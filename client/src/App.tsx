import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import CartPage from './pages/Cart/CartPage'
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'
import Nav from './pages/Home/components/Nav/Nav'
import Item from './pages/Item/Item'
import { AppContext, Context } from './services/context/Context'
import { fakeCart } from './services/context/FakeData.cart'

function App() {
  const context: AppContext = {
    cart: fakeCart,
  }
  return (
    <>
      <Context.Provider value={context}>
        <ToastContainer />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products/:id" element={<Item />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        {
          //<Footer />
        }
      </Context.Provider>
    </>
  )
}

export default App
