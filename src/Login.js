import React,{useState} from 'react'
import './Login.css'
import SignupScreen from './SignupScreen'
const Login = () => {
    const [signIn, setSignIn] = useState(false)

  return (
    <div className='login'>
    <div className='loginScreen__background' >
        <img className='loginScreen__logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt=''/>
        <button onClick={()=> setSignIn(true)} className='loginScreen__button'>Sign In</button>
        <div className='loginScreen__gradient'/>
    </div>
    <div className='loginScreen__body'>
    {signIn ? (
        <SignupScreen/>
    ): (  <>
        <h1>Unlimited movies,TV <br/> shows and more.</h1>
           <h2>Watch anywhere. Cancel at any time.</h2>
           <h3>Ready to watch?Enter your email to create your membership.</h3>
           <div className='loginScreen__input' >
           <form>

           <input type='email'
           placeholder='Email Address'
            

           />
           <button onClick={()=> setSignIn(true)} className='loginScreen__getStarted'>Get Started</button>
           </form>
           </div>
       </>)
    }
     
    </div>
    </div>
  )
}

export default Login
