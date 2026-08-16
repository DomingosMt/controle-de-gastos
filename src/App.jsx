import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
