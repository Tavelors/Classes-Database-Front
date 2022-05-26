import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { getStudentById } from '../utils/api'
import StudentClass from './StudentClass'
import CreateClass from './CreateClass'
import DeleteClass from './buttons/DeleteClass'
import styled from 'styled-components'
const Student = () => {
const [student, setStudent] = useState({})
const {student_id} = useParams()
const [popupDeleteButton, setPopupDeleteButton] = useState(false)
const [createClassButton, SetCreateClassButton] = useState(false)
const [studentLesson, setStudentLesson] = useState([])
useEffect(() => {
    getStudentById(student_id).then((list) => {
        setStudent(list)
    })
},[student_id])
  const handleClick = (e) => {
e.preventDefault()
setPopupDeleteButton(true)
SetCreateClassButton(true)
  }
 
// console.log(student._id);
  return (
    <StyledDiv>
    <ul>
        <li  >
            <span>{student.firstName} {student.lastName}</span>
            <p>Date Started: {student.created}</p>
            <button onClick={handleClick} >Create Class
            </button>

            <CreateClass firstName={student.firstName} lastName={student.lastName}  student_id={student._id} trigger={popupDeleteButton} setTrigger={setPopupDeleteButton}  createClassButton={createClassButton} SetCreateClassButton={SetCreateClassButton} 
            setStudentLesson={setStudentLesson}
             ></CreateClass>
        </li>
        <li className="table" >
            <StudentClass studentLesson={studentLesson} setStudentLesson={setStudentLesson} student_id={student_id}  />
        </li>
    </ul>
    </StyledDiv>
  )
}

const StyledDiv = styled.div/*css*/`
.table {

}

`

export default Student