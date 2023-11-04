import './App.css'
import { Routes, Route } from 'react-router-dom'

import Login from './components/Login/Login'
import Register from './components/Regitser/Register'

import Main from './components/Main/Main'

function App() {

  return (
    <Routes>
      <Route index element={<Login />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/main' element={<Main />}/>
    </Routes>
  )
}

export default App
