import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import CartPage from './pages/Cart/CartPage'
import Dashboard from './pages/Dashboard/Dashboard'
import { SinglePageItem } from './pages/SingleItemPage/components/SinglePageItem'
import Home from './pages/Home/Home'
import Nav from './pages/Home/components/Nav/Nav'
import Item from './pages/Item/Item'
import { AppContext, Context } from './services/context/Context'
import { fakeCart } from './services/context/FakeData.cart'
import Footer from './pages/Home/components/Footer/Footer'

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
          <Route path="/products" element={<Item />} />
          <Route path="/products/:id" element={<SinglePageItem />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        {
          <Footer />
        }
      </Context.Provider>
    </>
  )
}

export default App
