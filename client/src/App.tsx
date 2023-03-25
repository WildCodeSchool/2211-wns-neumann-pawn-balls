import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './pages/Home/components/Footer/Footer'
import Nav from './pages/Home/components/Nav/Nav'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
