import { ToastContainer } from 'react-toastify'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './pages/Home/components/Footer/Footer'
import Nav from './pages/Home/components/Nav/Nav'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import { SinglePageItem } from './pages/SingleItemPage/components/SinglePageItem'
import Item from './pages/Item/Item'

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
      </Routes>
      <Footer />
    </>
  )
}

export default App
