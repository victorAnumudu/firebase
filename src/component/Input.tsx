
import React from 'react'

type InputProps = {
  type: String,
  name: String,
  value: String,
  handleOnChange: any
}

const Input = ({type, name, value, handleOnChange}: InputProps) => {
  return (
    // <div className='d-flex flex-column align-content-start justify-items-center p-2'>
    //     <label className='fs-6'>{name.toUpperCase()}</label>
    //     <input className='p-3 rounded outline-none border-none' type={`${type}`} name={`${name}`} value={`${value}`} onChange={handleOnChange} />
    // </div>
    <div className='flex flex-col content-start justify-items-center p-2'>
        <label className='fs-6'>{name.toUpperCase()}</label>
        <input className='p-3 rounded-full outline-none border focus:outline-none focus:border-none' type={`${type}`} name={`${name}`} value={`${value}`} onChange={handleOnChange} />
    </div>
  )
}

export default Input