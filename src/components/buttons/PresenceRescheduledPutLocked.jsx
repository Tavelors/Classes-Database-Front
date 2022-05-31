import React, {useEffect, useState}from 'react'
import {updatePresence} from '../../utils/api'
import styled from 'styled-components'

const PresenceRescheduledPutLocked = ({index, list, class_id, setStudentLesson, class_number, firstName}) => {
    // const [putPresence, setPutPresence] = useState(false)
    const logNote = `Student: ${firstName}, Class: ${class_number}, Rescheduled Class Absence set to false`
    const presenceClick = (e) => {
        e.preventDefault();
        // setPutRescheduled(false)
        setStudentLesson((curr) => {
            let newList = [...curr]
            console.log(list);
            list.rescheduledPresence = true
            list.presence = false
            newList.splice(index,1,list)
            
            
            
            return newList
        })  
        
        
        updatePresence(false, false, true, false, class_id, logNote)
    }
// console.log(putPresence);
  return <Button style={{background: 'green'}} onClick={presenceClick} >&nbsp;</Button>
}

const Button = styled.button/*css*/`
height:40px;
width: 40px;
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


export default PresenceRescheduledPutLocked