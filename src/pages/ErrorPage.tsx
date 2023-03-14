import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center bg-slate-100'>
      <span>back to{' '}<Link to='/' className='text-blue-500'>Home</Link> </span>
      <p className='text-red-500 text-8xl'>
      This is Error Page
      </p>
    </div>
  )
}

export default ErrorPage