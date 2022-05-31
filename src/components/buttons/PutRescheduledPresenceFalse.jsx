import React, {useEffect, useState}from 'react'
import {updatePresence, updateStudentBankAndPresence} from '../../utils/api'
import styled from 'styled-components'

const PutRescheduledPresenceFalse = ({class_id, setPutRescheduledPresence, setStudentLesson, student_id, class_number, firstName}) => {
    // const [putPresence, setPutPresence] = useState(false)
    const logNote = `Set rescheduled presence to false on class ${firstName} ${class_number} `
    const presenceClick = (e) => {
      updateStudentBankAndPresence(student_id, -1, 1)
        e.preventDefault();
        updatePresence(false, false, false, false, class_id).then((post) => {
            setPutRescheduledPresence(false)
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


export default PutRescheduledPresenceFalse