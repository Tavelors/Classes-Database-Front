import React from 'react'
import styled from 'styled-components'
import {updateConcluded} from '../../utils/api'
const UpdateConcluded = ({index, student, firstName, student_id, setStudents, concludedBool}) => {
    let backg;

    const handleClick = async () => {
        if(concludedBool) {
        const logNote = `Student: ${firstName}, Set status to ongoing`
        setStudents((curr) => {
            let newList = [...curr]
            student.concluded = false
            newList.splice(index,1,student)
            
            return newList
        })
        
        await updateConcluded(student_id, false, logNote)
             
        } else {
            const logNote = `Student: ${firstName}, Set status to Concluded`
            setStudents((curr) => {
                let newList = [...curr]
                student.concluded = true
                newList.splice(index,1,student)
                
                return newList
            })
            
            await updateConcluded(student_id, true, logNote)
        }
      }
      if(concludedBool) {
          backg = {background: 'green'}
        } else {
          backg = {background: 'red'}

      }
  return <ConcludedButton style={backg} onClick={handleClick} ></ConcludedButton>
}

const ConcludedButton = styled.button/*css*/`

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


export default UpdateConcluded