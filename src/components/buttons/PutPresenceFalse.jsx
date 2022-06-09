import React, {useEffect, useState}from 'react'
import {updatePresence, updateStudentPresence} from '../../utils/api'
import styled from 'styled-components'

const PutPresenceFalse = ({index, list,class_id, setPutPresence, setStudentLesson, student_id, class_number, firstName}) => {
    
    const logNote = `Student: ${firstName}, Class: ${class_number}, Class Presence set to false`
    const presenceClick = (e) => {
      updateStudentPresence(student_id, -1)
      e.preventDefault();
      
      setStudentLesson((curr) => {
        let newList = [...curr]
        list.presence = false
        newList.splice(index,1,list)
                                
        return newList
      })  
      
      
      updatePresence(false, false, false, false, class_id, logNote)
    }

  return <Button style={{background: 'green'}} onClick={presenceClick} ></Button>
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


export default PutPresenceFalse