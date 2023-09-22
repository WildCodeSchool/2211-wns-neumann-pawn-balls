import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import CartPage from './pages/Cart/CartPage'
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'
import Footer from './pages/Home/components/Footer/Footer'
import Nav from './pages/Home/components/Nav/Nav'
import Item from './pages/Item/Item'
import { SinglePageItem } from './pages/SingleItemPage/components/SinglePageItem'

function App() {
  return (
    <>
      <ToastContainer />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Item />} />
        <Route path="/products/:id" element={<SinglePageItem />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
