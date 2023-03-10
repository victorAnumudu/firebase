import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NavBs = () => {
    let location = useLocation();
    let navigate = useNavigate()

    let handleLogout = () => {
      localStorage.removeItem('islogin')
      navigate('/login', {replace:true})
    }
  return (
    <div className='position-sticky top-0 p-3 bg-dark text-white'>
        <div className='d-flex justify-content-between align-items-center'>
        <span>NavBs</span>
        <div className='d-flex gap-3 justify-content-center align-items-center'>
            <span><Link className={`text-decoration-none fs-5 ${location.pathname == '/' ? 'text-secondary' : 'text-white'}`} to='/'>Home</Link></span>
            <span><Link className={`text-decoration-none fs-5 ${location.pathname == '/about' ? 'text-secondary' : 'text-white'}`} to='/about'>About</Link></span>
            <button className='btn btn-secondary' onClick={()=> handleLogout()}>Logout</button>
        </div>
        </div>
    </div>
  )
}

export default NavBs