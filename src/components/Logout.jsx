import { useNavigate, Link } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    const changeNav = () => {
        navigate('/login')
    }
    const logoutUser = () => {
 
            localStorage.removeItem('alphstains-secret-user-token')
            localStorage.removeItem('alphstains-secret-user-id')
        navigate('/login')
        changeNav()
        }
        
  return (
    <>
    <button className='logout' onClick={logoutUser} >Logout</button>
    </>
  )
}

export default Logout