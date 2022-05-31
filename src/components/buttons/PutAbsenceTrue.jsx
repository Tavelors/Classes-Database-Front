import React, {useEffect, useState}from 'react'
import {updatePresence,updateStudentBank} from '../../utils/api'
import styled from 'styled-components'
import {GenIcon} from 'react-icons'

const PutAbsenceTrue = ({index, list, class_id, setPutAbsence, setStudentLesson, student_id, firstName, class_number}) => {
  const logNote = `Student: ${firstName}, Class: ${class_number}, Class Absence set to true`
    const presenceClick = (e) => {
     
        e.preventDefault();
    
        setPutAbsence(true)
        
        setStudentLesson((curr) => {
          let newList = [...curr]
          list.absence = true
          newList.splice(index,1,list)
          
          return newList
        })  
        
        updateStudentBank(student_id, 1)
        
        updatePresence(false, false, false, true, class_id, logNote)
    }
// console.log(putPresence);
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
`


export default PutAbsenceTrue

