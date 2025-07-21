import { Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing/Landing'
import { useState } from 'react'
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  return (
  <>
    <Routes>
      <Route path={'/'} exact={true} element={
        localStorage.getItem('username')?<Home/>:<Landing/>
      }/>
      <Route path='/register' exact={true} element={<Register/>}/>
      <Route path='/login' exact={true} element={<Login/>}/>
    </Routes>
  </>
)
}

export default App
