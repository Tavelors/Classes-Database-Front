import React, {useEffect, useState}from 'react'
import {updatePresence, updateStudentBankAndPresence} from '../../utils/api'
import styled from 'styled-components'

const PutRescheduledPresenceTrue = ({class_id, setPutRescheduledPresence, setStudentLesson, student_id}) => {
 

    const presenceClick = (e) => {
        updateStudentBankAndPresence(student_id, 1, -1)
        e.preventDefault();
        updatePresence(false, false, true, false, class_id).then((post) => {
            setPutRescheduledPresence(true)
            setStudentLesson((curr) => {
                let newList = [...curr]
                for (let i = 0; i < newList.length; i++) {
                  if(post._id === newList[i]._id) {
                      newList.splice(i,1,post)
                  }
                  
                }
                return newList
              })  
            
        })
    }

  return <Button style={{background: 'red'}} onClick={presenceClick} >&nbsp;</Button>
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


export default PutRescheduledPresenceTrue

