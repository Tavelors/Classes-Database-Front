import {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import { userLogin } from '../utils/api'
const Login = ({local_user_id, token}) => {
    
    const navigate = useNavigate()
    
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const loginUser = async (e) => {
        e.preventDefault()
     const data = await userLogin(email, password)
     
console.log(data);
if(data) {
    // setCurrentUser(data.user_id)
    if(data.token) localStorage.setItem('alphstains-secret-user-token', data.token);
    
    localStorage.setItem('alphstains-secret-user-id', data.user_id)
    alert('login successful')
    navigate(`/home`)
    window.location.reload(false);
} else {
    alert('Wrong User Credentials')
}
}
useEffect(() => {
console.log(typeof local_user_id);
// window.location.reload(false);
    if(local_user_id && !token && typeof local_user_id !== 'object' ) {
        window.location.reload(false);
        navigate(`/home`)
    } else if (!local_user_id) {
        navigate('/login')
    }
},[local_user_id])
  return (
    <div  className='form-style-6'>
        {/* <Link to='/register' >Register</Link> */}
    
    <form onSubmit={loginUser}>
        <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
        />
        <br />
        <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
        />
        <br />
        <input type="submit" value="Login" />
    </form>
</div>
  )
}

export default Login