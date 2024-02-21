import './App.css'
import { Routes, Route } from 'react-router-dom'

import Rootlayout from './shared/component/layout/Rootlayout'
import Menulayout from './shared/component/layout/Menulayout'

import AdminLogin from './AdminComponents/AdminLogin/AdminLogin'
import Dashboard from './AdminComponents/Dashboard/Dashboard'
import Userprofile from './AdminComponents/NavComponents/Userprofile'
import Products from './AdminComponents/NavComponents/Products'

import Login from './components/Login/Login'
import Register from './components/Regitser/Register'
import PageNotFound from './components/Pagenotfound/PageNotFound'

import MeatDescription from './components/Description/MeatDescription'
import ViewCartItems from './components/Cart/ViewCartItems'
import DisplayBill from './components/Bill/DisplayBill'

import Main from './components/Menupage/Main'
import Rice from './components/Menupage/Rice'
import Juice from './components/Menupage/Juice'
import Dessert from './components/Menupage/Dessert'
import Soda from './components/Menupage/Soda'

function App() {

  return (
    
      <Routes>
        <Route element={<Rootlayout />}>
          <Route index element={<Login />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
            <Route element={<Menulayout />}>
              <Route path='/main' element={<Main />}/>
              <Route path='/desc/:id' element={<MeatDescription />}/>
              <Route path='/rice' element={<Rice />}/>
              <Route path='/juice' element={<Juice />}/>
              <Route path='/dessert' element={<Dessert />}/>
              <Route path='/soda' element={<Soda />}/>
              <Route path='/cartitems' element={<ViewCartItems />}/>
            </Route>
        </Route>
        <Route path='/print-bill' element={<DisplayBill />}/>
        {/* <Route path='/*' element={<PageNotFound />}/> */}
        <Route path='/admin--' element={<AdminLogin />}/>
        <Route element={<Dashboard />}>
          <Route path='/user-profile-' element={<Userprofile />}/>
          <Route path='/products-' element={<Products />}/>
        </Route>
      </Routes>
  
  )
}

export default App
