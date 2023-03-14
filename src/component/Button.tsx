import React from 'react'
import { Button as ButtonFB } from 'flowbite-react'

type BtnProps = {
  name: String,
  onclick: ()=> void,
}

const Button = ({name, onclick}:BtnProps) => {
  return (
    // <div className='p-2'>
    //     <button className='btn btn-primary w-100 p-3' onClick={()=>onclick()}>{name}</button>
    // </div>
    <div className='p-2'>
        <ButtonFB className='p-2 w-full' onClick={()=>onclick()}>
          {name}
        </ButtonFB>
    </div>
  )
}

export default Button