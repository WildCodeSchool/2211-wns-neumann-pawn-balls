import { ToastContainer } from 'react-toastify'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './pages/Home/components/Footer/Footer'
import Nav from './pages/Home/components/Nav/Nav'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return (
    <>
      <ToastContainer />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
