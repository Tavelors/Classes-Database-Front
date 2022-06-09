import React, {useEffect, useState}from 'react'
import {updatePresence, updateStudentBankAndPresence, removeAbsenceDate} from '../../utils/api'
import styled from 'styled-components'

const RescheduledAbsence = ({index, list, class_id, setPutRescheduledPresence, setStudentLesson, student_id, class_number, firstName}) => {
   
    const logNote = `Student: ${firstName}, Class: ${class_number}, Rescheduled Class Absence set to true`
    const presenceClick = () => {
    
        setPutRescheduledPresence(false)
        setStudentLesson((curr) => {
          let newList = [...curr]
            list.rescheduledPresence = false
            list.absence = true
            list.AbsenceDate = undefined
            newList.splice(index,1,list)
            
            return newList
        })  
        
        removeAbsenceDate(class_id)
        updatePresence(false, false, false, true, class_id, logNote)
        updateStudentBankAndPresence(student_id, 2, -1)
    }

  return <Button style={{background: 'red'}} onClick={presenceClick} >❌</Button>
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
@media screen and (max-width: 960px) {
  height:60px;
  width: 60px;
  font-size: 25px;
}
`


export default RescheduledAbsence

