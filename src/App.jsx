import './App.css'
import { Routes, Route } from 'react-router-dom'

import Rootlayout from './shared/component/layout/Rootlayout'
import Menulayout from './shared/component/layout/Menulayout'

import Login from './components/Login/Login'
import Register from './components/Regitser/Register'
import PageNotFound from './components/Pagenotfound/PageNotFound'

import MeatDescription from './components/Description/MeatDescription'
import ViewCartItems from './components/Cart/ViewCartItems'
import DisplayBill from './components/Bill/DisplayBill'

import Main from './components/Menupage/Main'
import Rice from './components/Menupage/Rice'

function App() {

  return (
    <Routes>
      <Route element={<Rootlayout />}>
        <Route index element={<Login />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
          <Route element={<Menulayout />}>
            <Route path='/main' element={<Main />}/>
            <Route path='/main/:id' element={<MeatDescription />}/>
            <Route path='/rice' element={<Rice />}/>
            <Route path='/cartitems' element={<ViewCartItems />}/>
          </Route>
      </Route>
      <Route path='/print-bill' element={<DisplayBill />}/>
      <Route path='/*' element={<PageNotFound />}/>
    </Routes>
  )
}

export default App
