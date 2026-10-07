
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Reports from './pages/Reports'
import Configurations from './pages/Configurations'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/transactions' element={<Transactions/>} />
          <Route path='/reports' element={<Reports/>} />
          <Route path='/settings' element={<Configurations/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
