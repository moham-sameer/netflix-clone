import React,{useEffect} from 'react'
import "./App.css"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import Login from './Login'
import {auth} from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'
import ProfileScreen from './ProfileScreen'
const App = () => {
  const dispatch = useDispatch()  
  const user = useSelector(selectUser);
  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }))
      }else{
        dispatch(logout())

      }
    })
    return unsubscribe;
  },[dispatch])

  return (
    <div className="app">
    <Router>
    {!user ? (<Login/>): (
      
      <Routes>
         <Route path='/profile' element={<ProfileScreen/>} />
        <Route path='/' element={<HomeScreen/>} />
      </Routes>)}
      
    </Router>
      
    </div>
  )
}

export default App
