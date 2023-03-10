import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../component/Input'
import ButtonBs from '../component/ButtonBs'
import SpinnerBs from '../component/SpinnerBs'


type HandleOnChangeProps = {
    target: {
        email: String,
        password: String,
        'Retype-password': String,
        value: String,
        name: String,
    }
}

const Login = () => {
    let navigate = useNavigate()
    let [isLoading, setIsLoading] = useState(false) // use to determine when the spinner comes out

    let [errorMessage, setErrorMessage] = useState({
        status: false,
        message: ''
    })

    let [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    let handleOnChange = ({target: {name, value}}:HandleOnChangeProps) => {
        setInputs((prevs)=>{
            return {...prevs, [`${name}`]:value}
        })
    }


    const handleLogin = ():void => {
        setIsLoading(true) // for loading spinner

        // setErrorMessage({
        //     status: false,
        //     message: ''
        // })
        // let userDetails = {...inputs}
        // let DB = JSON.parse(localStorage.getItem('user_db'))
        // if(!userDetails.email || !userDetails.password){
        //     setErrorMessage({
        //         status: false,
        //         message: 'Opp'
        //     })
        //     setIsLoading(false)
        //     return
        // }
        // let userExists = DB.filter(user => user.email == userDetails.email && user.password == userDetails.password)
        // if(userExists.length < 1){
            // setErrorMessage({
            //     status: false,
            //     message: 'Opps!, Incorrect login details'
            // })
            // setIsLoading(false)
            // return
        // }
        // setErrorMessage({
        //     status: true,
        //     message: 'login successful'
        // })

        
        localStorage.setItem('islogin', 'true')
        setTimeout(()=>{
            navigate('/',{replace: true})
            setIsLoading(false) // sets spinner display to flase
        }, 1000)
    }

  return (
    <div className='container shadow-lg mt-5'>
        <div>
            <h2 className='text-center p-3'>Login</h2>
            <div className=''>
                <Input type='email' name='email' value={inputs.email} handleOnChange={handleOnChange} />
                <Input type='password' name='password' value={inputs.password} handleOnChange={handleOnChange} />
            </div>
            <div className=''>
                {isLoading ? <SpinnerBs /> : <ButtonBs name='Login' onclick={handleLogin}/>}
            </div>
            {errorMessage.message != '' && 
            <div className={`text-center ${errorMessage.status ? 'text-success' : 'text-danger'}`}>
                <p>{errorMessage.message}</p>
            </div>
            }
            <div className='p-2 mt-1 d-flex justify-content-between align-items-center'>
                <p>Don't have an Account <span><Link to='/signup'>Signup</Link></span></p>
            </div>
        </div>
    </div>
  )
}

export default Login