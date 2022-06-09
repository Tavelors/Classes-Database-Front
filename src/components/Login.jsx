import {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import { userLogin } from '../utils/api'
import styled from 'styled-components'
const Login = ({local_user_id}) => {
    const navigate = useNavigate()
    const token = localStorage.getItem("alphstains-secret-user-token");
    if(token) {
        navigate('/students')
    }
    
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const loginUser = async (e) => {
        e.preventDefault()
     const data = await userLogin(email, password)
     

if(data) {
  
    if(data.token) localStorage.setItem('alphstains-secret-user-token', data.token);
    
    localStorage.setItem('alphstains-secret-user-id', data.user_id)
    
    navigate(`/students`)
    window.location.reload(false);
} else {
    alert('Wrong User Credentials')
}
}
useEffect(() => {


    if(local_user_id && !token && typeof local_user_id !== 'object' ) {
        window.location.reload(false);
        navigate(`/students`)
    } else if (!local_user_id) {
    
        navigate('/login')
    }
},[local_user_id, navigate, token])
  return (
    <StyledDiv  className='form-style-6'>

      <h3>Login using:</h3>
      <h4>test@email.com</h4>
      <h4>password</h4>
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
        <button>Login</button>
    </form>
</StyledDiv>
  )
}

const StyledDiv = styled.div/*css*/`
  // margin-left: auto
//   // margin-right: auto
// // justify-content: center;
// width: 300px;
// padding: 10px;
// // transform: translate(-50%, -50%);
// background: lightgreen;
//   // box-sizing: border-box;
//   border-radius: 10px;
margin-top: 200px;
form {
    // box-shadow: 0 15px 25px rgba(0,0,0,.6);
    // margin-left: auto;
    // margin-right: auto;
    font-size: 12px;
    
  }
  input {
    margin: 5px;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border: 2px solid black;
    background-color:  #72b3d0;
    font-weight: bold;
    height: 30px;
    width: 250px;
    font-size: 18px;
  
    // box-sizing: border-box;
  }
  h2 {
    color: black;
  }
button {
  color: black;
  font-weight: bold;
  margin: 5px;
  margin-bottom:20px;
  width: 120px;
  height: 50px;
  font-size: 15px;
  background-color: #72b3d0;
  transition:0.2s 0.2s;
  &:hover {
    transform: scale(1.1);
    transition:0.2s 0s;
    
}
:active {
  background-color: #72b340;
  // box-shadow: 5px 5px #666;
  // transform: translateY(4px);
  transform: scale(1);
  transition:0s 0s;
  
}
}
`

export default Login