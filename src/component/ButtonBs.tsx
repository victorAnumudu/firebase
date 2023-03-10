import React from 'react'

type BtnProps = {
  name: String,
  onclick: ()=> void,
}

const ButtonBs = ({name, onclick}:BtnProps) => {
  return (
    <div className='p-2'>
        <button className='btn btn-primary w-100 p-3' onClick={()=>onclick()}>{name}</button>
    </div>
  )
}

export default ButtonBs