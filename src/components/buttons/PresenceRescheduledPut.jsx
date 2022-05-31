import React, {useEffect, useState}from 'react'
import {updatePresence} from '../../utils/api'
import styled from 'styled-components'

const PresenceRescheduledPut = ({index, list, class_id, setStudentLesson, class_number, firstName}) => {
    // const [putPresence, setPutPresence] = useState(false)
    const logNote = `Student: ${firstName}, Class: ${class_number}, Rescheduled Class Presence set to true`
    const presenceClick = (e) => {
        e.preventDefault();
        // setPutRescheduled(false)
        setStudentLesson((curr) => {
            let newList = [...curr]
             list.presence = true
             list.rescheduledPresence = true
            newList.splice(index,1,list)
            
            
            
            return newList
        })  
        
        updatePresence(true, false, true, false, class_id, logNote)
        
    }
// console.log(putPresence);
  return <Button style={{background: 'red'}} onClick={presenceClick} >✔️</Button>
}

const Button = styled.button/*css*/`
height:40px;
width: 40px;
font-size: 20px;
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
`

export default PresenceRescheduledPut