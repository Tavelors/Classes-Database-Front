import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState, useCallback} from 'react'
import {getUser} from '../utils/api'
import Logout from './Logout'
const Home = ({local_user_id}) => {
    const currentURL = window.location.pathname
    const navigate = useNavigate()
    console.log(currentURL);
const [button, setButton] = useState([])
useEffect(() => {

    if(currentURL === '/') {
        navigate('/home')
    }
    },[currentURL, navigate])

    let loginButton;
    let registerButton;
    let logoutButton;
    if(!local_user_id && currentURL !== '/login') {
        loginButton = <Link to='/login' ><button className='other-buttons' >Login</button></Link>
        
    } 
    if (local_user_id) {
        logoutButton =  <Logout />
    }
    
    if(currentURL === '/login'){
        registerButton = <Link to='/register' ><button className='other-buttons' >Register</button></Link>
    }
    let homeButton;
    if(currentURL !== '/home' && currentURL !=='/register' && currentURL !=='/login') {
      homeButton = <Link to='/home' ><button className='home-but'>Home</button></Link>
    }
 if(currentURL === '/home' && !local_user_id){
    registerButton = <Link to='/register' ><button className='other-buttons' >Register</button></Link>
 }

const handle = (async () => {
    const user = await getUser()
    console.log(user);
})
console.log(button);


  return (
    <header>
          {logoutButton}
      <div>
<span>

      {loginButton}
      <span>
    
</span>
      {registerButton} 
      
      <span>
      {homeButton}
</span>
      
</span>


      </div>
    <div></div>
      </header>
  )
}

export default Home