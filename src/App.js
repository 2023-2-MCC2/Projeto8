import Home from './pages/Home'
import Page2 from './pages/Quemsao'
import CriarConta from './pages/CriarConta'
import LoginPage from './pages/Login'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdotarPage from './pages/Adotar'


function App() {
  return (
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Quemsao" element={<Page2/>} />
        <Route path='/CriarConta' element={<CriarConta/>} />
        <Route path= '/Login' element={<LoginPage/>} />
        <Route path= '/Adotar' element={<AdotarPage/>} />
        </Routes>
    </Router>
  )
}

export default App

