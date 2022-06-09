import React, {useEffect, useState}from 'react'
import {getLogs} from '../utils/api'
import {useNavigate} from 'react-router-dom'
import Moment from 'react-moment'
import styled from 'styled-components'
const Logs = () => {
const [logs, setLogs] = useState([])
const [loading, setLoading] = useState(true)
const navigate = useNavigate()
const token = localStorage.getItem("alphstains-secret-user-token");
if(!token) {
    navigate('/login')
}
useEffect(() => {
    getLogs().then((list) => {
        setLoading(false)
        setLogs(list)
    })
},[])

if(loading) {
    return <h1 >Loading...</h1>
     } else {

    return (
        <UL>
        {logs.map((log) => {
            return (
                <li key={log._id} >
                    <h3>{log.logNote}</h3>
                    <h4 className='date-format'  ><Moment  format='LL' >{log.created}</Moment><div><Moment  format='LT' >{log.created}</Moment></div></h4>
                </li>
            )
        })}
    </UL>
  )
}
}

const UL = styled.ul/*css*/`
padding-inline-start: 0px;
.date-format {
    color: grey;
    
}
li {
    border: 4px solid;
    margin: 20px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    // padding: 10px;
    padding-right: 10px;
    padding-left: 10px;
}
`

export default Logs

