import React,{useState,useEffect} from 'react'
import {  useNavigate } from 'react-router-dom'
import "./Nav.css"
const Nav = () => {
  const [show,handleShow] = useState(false)
  const scrollanime = ()=>{
    if(window.scrollY > 100){
      handleShow(true)
    }else{
      handleShow(false)
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",scrollanime)
  //  return ()=> window.removeEventListener("scroll",scrollanime)
  })
  const history = useNavigate()

  return (
    <div className={`nav ${show && 'nav__black'}`} >
    <div className='nav__contents'>

    <img onClick={()=> history('/')} className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""/>
    <img onClick={()=> history('/profile')} className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
    </div>
    </div>
  )
}

export default Nav;
