import { useNavigate, Link } from 'react-router-dom'

const Logout = ({local_user_id}) => {
    const navigate = useNavigate()
    const changeNav = () => {
        navigate('/login')
    }
    const logoutUser = () => {
        // setCurrentUser('')
            
            localStorage.removeItem('alphstains-secret-user-token')
            localStorage.removeItem('alphstains-secret-user-id')
        // window.location.reload(false);
        navigate('/login')
        // window.location.reload(false);
        // useEffect(() => {
            
        // },[])
        changeNav()
        }
        
  return (
    <>
    <button className='logout' onClick={logoutUser} >Logout</button>
    </>
  )
}

export default Logout