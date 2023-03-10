import React, {useState} from 'react'
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


const Signup = () => {

    let navigate = useNavigate()
    let [isLoading, setIsLoading] = useState(false) // use to determine when the spinner comes out

    let [errorMessage, setErrorMessage] = useState({
        status: false,
        message: ''
    })

    let [inputs, setInputs] = useState({
        email: '',
        password: '',
        'Retype-password': ''
    })

    let handleOnChange = ({target: {name, value}}:HandleOnChangeProps):void => {
        setInputs((prevs)=>{
            return {...prevs, [`${name}`]: value}
        })
    }

    const handleSignup = ():void => {
        setIsLoading(true) // for loading spinner

        // setErrorMessage({
        //     status: false,
        //     message: ''
        // })
        // let {email, password } = inputs
        // if(email == '' || password == ''){
        //     setErrorMessage({
        //         status: false,
        //         message: 'Opps!, Fill all fields'
        //     })
        //     setIsLoading(false)
        //     return
        // }
        
        // if(userDetails.password != userDetails['Retype-password']){
        //     setErrorMessage({
        //         status: false,
        //         message: 'Opps!, Password do not match'
        //     })
        //     setIsLoading(false)
        //     return
        // }
        // let DB = JSON.parse(localStorage.getItem('user_db'))
        // let userExists = DB.filter(user => user.email == userDetails.email && user.password == userDetails.password)
        // if(userExists.length < 1){
            // setErrorMessage({
            //     status: false,
            //     message: 'Opps!, Incorrect login details'
            // })
        //     setIsLoading(false)
        //     return
        // }
        // setErrorMessage({
        //     status: true,
        //     message: 'login successful'
        // })

        setTimeout(()=>{
            navigate('/login',{replace: true})
            setIsLoading(false) // sets spinner display to flase
        }, 1000)
    }

  return (
    <div className='container shadow-lg mt-5'>
        <div>
            <h2 className='text-center p-3'>Signup</h2>
            <div className=''>
                <Input type='email' name='email' value={inputs.email} handleOnChange={handleOnChange} />
                <Input type='password' name='password' value={inputs.password} handleOnChange={handleOnChange} />
                <Input type='password' name='Retype-password' value={inputs['Retype-password']} handleOnChange={handleOnChange} />
            </div>
            <div className=''>
            {isLoading ? <SpinnerBs /> : <ButtonBs name='Register' onclick={handleSignup}/>}
            </div>
            {errorMessage.message != '' && 
            <div className={`text-center ${errorMessage.status ? 'text-success' : 'text-danger'}`}>
                <p>{errorMessage.message}</p>
            </div>
            }
            <div className='p-2 mt-1 d-flex justify-content-between align-items-center'>
                <p>Already have an Account <span><Link to='/login'>Login</Link></span></p>
            </div>
        </div>
    </div>
  )
}

export default Signup