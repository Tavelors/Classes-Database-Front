import React, {useEffect, useState}from 'react'
import {updatePresence,updateStudentBank} from '../../utils/api'
import styled from 'styled-components'
import {GenIcon} from 'react-icons'

const PutAbsenceTrue = ({class_id, setPutAbsence, setStudentLesson, student_id}) => {
    // const [putPresence, setPutPresence] = useState(false)

    const presenceClick = (e) => {
        e.preventDefault();
    
        updateStudentBank(student_id, 1)
        
        updatePresence(false, false, false, true, class_id).then((post) => {
            setPutAbsence(true)

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
  return <Button style={{background: 'red'}} onClick={presenceClick} > ❌</Button>
}

const Button = styled.button/*css*/`
height:40px;
width: 40px;
&:hover {
    transform: scale(1.1);
}
`


export default PutAbsenceTrue

