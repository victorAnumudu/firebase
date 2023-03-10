import React, {useState} from 'react'

import {Routes, Route} from 'react-router-dom'

import AuthPages from './component/AuthPages'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ErrorPage from './pages/ErrorPage'


const Router = () => {

  return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route element={<AuthPages />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
        {/* <Route exact path='/' element={
          <AuthPages isLogin={isLogin}>
          <Home />
        </AuthPages>
        } /> 
        <Route exact path='/about' element={
          <AuthPages isLogin={isLogin}>
          <About />
        </AuthPages>
        } />  */}
          
        <Route path='*' element={<ErrorPage />} />
      </Routes>
  )
}

export default Router
