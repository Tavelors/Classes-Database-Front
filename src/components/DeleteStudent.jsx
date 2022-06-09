import React from 'react'
import styled from 'styled-components'
import {deleteStudent, postLog} from '../utils/api'
const DeleteStudent = ({index, student, firstName, student_id, setStudents}) => {

    const deleteButton = () => {
        const logNote = `Student: ${firstName},  Student Deleted`
            setStudents(curr => {
                let newList = [...curr]
                newList.splice(index,1)
                return newList
            })
            postLog(logNote)
            deleteStudent(student_id)
    }

  return (
    <Button onClick={deleteButton} >🗑️</Button>
  )
}

const Button = styled.button/*css*/`
background-color: red;
    height:40px;
    width: 40px;
    font-size: 20px;
    transition:2s 0.2s;
    &:hover {
      transform: scale(1.1);
      transition:2s 0s;
      
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

export default DeleteStudent