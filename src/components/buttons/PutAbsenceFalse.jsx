import React, {useEffect, useState}from 'react'
import {updatePresence, updateStudentBank} from '../../utils/api'
import styled from 'styled-components'

const PutAbsenceFalse = ({index, list, class_id, setPutAbsence, setStudentLesson, student_id, class_number, firstName}) => {
    // const [putPresence, setPutPresence] = useState(false)
    
    const logNote = `Student: ${firstName}, Class: ${class_number}, Class Absence set to false`
    const presenceClick = async (e) => {
      e.preventDefault();
      setStudentLesson((curr) => {
        let newList = [...curr]
        list.absence = false
            newList.splice(index,1,list)
          
          
            
            return newList
          })  
          
          
          
          await updatePresence(false, false, false, false, class_id, logNote)
           await   updateStudentBank(student_id, -1)
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



export default PutAbsenceFalse

