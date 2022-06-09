import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { getStudentById } from '../utils/api'
import StudentClass from './StudentClass'
import MobileStudentClass from './mobile/MobileStudentClass'
import CreateClass from './CreateClass'
import CreateTenClass from './CreateTenClass'
import DeleteClass from './buttons/DeleteClass'
import styled from 'styled-components'
import Moment from 'react-moment'
const Student = () => {
const [student, setStudent] = useState({})
const {student_id} = useParams()
const [popupDeleteButton, setPopupDeleteButton] = useState(false)
const [classes, setClasses] = useState(false)
const [createClasses, SetCreateClasses] = useState(false)
const [createClassButton, SetCreateClassButton] = useState(false)
const [studentLesson, setStudentLesson] = useState([])
const [loading, setLoading] = useState(true)
useEffect(() => {
    getStudentById(student_id).then((list) => {
      setLoading(false)
        setStudent(list)
    })
},[student_id])
  const handleClick = (e) => {
e.preventDefault()
setPopupDeleteButton(true)
SetCreateClassButton(true)
  }
  const handleClass = () => {
    setClasses(true)
    SetCreateClasses(true)
  }
 if(loading){
  return <h1 >Loading...</h1>
 } else {

   return (
     <StyledDiv>
    <ul>
        <li  >
            <span>{student.firstName} {student.lastName}</span>
            <p>Date Started: <Moment className='date-format' format='DD/MM/YYYY' >{student.created}</Moment></p>
            <span>
            <div>

            <button className="class-creation-button"  onClick={handleClick} >Create Class
            </button>
            </div>
            <div>

            <button className="class-creation-button" onClick={handleClass} >
                Create Ten Class
              </button>
            </div>
            </span>
            <CreateClass firstName={student.firstName} lastName={student.lastName}  student_id={student._id} trigger={popupDeleteButton} setTrigger={setPopupDeleteButton}  createClassButton={createClassButton} SetCreateClassButton={SetCreateClassButton} 
            setStudentLesson={setStudentLesson}
            ></CreateClass>
             <CreateTenClass firstName={student.firstName}  student_id={student._id} trigger={classes} setTrigger={setClasses}  createClasses={createClasses} SetCreateClasses={SetCreateClasses} 
            setStudentLesson={setStudentLesson} />
        </li>
        <li className="table" >
            <StudentClass studentLesson={studentLesson} setStudentLesson={setStudentLesson} student_id={student_id}  />
            <MobileStudentClass studentLesson={studentLesson} setStudentLesson={setStudentLesson} student_id={student_id}   />
        </li>
    </ul>
    </StyledDiv>
  )
}
}



const StyledDiv = styled.div/*css*/`
.table {

}
ul {
  padding-left: 0px;
}
ul li span {
  font-size: 30px;
  font-weight: bold;
  color: black;
  text-decoration: underline;
}
ul li p {
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline;
}
.class-creation-button {
  color: black;
  font-weight: bold;
  margin: 5px;
  margin-bottom:20px;
  width: 120px;
  height: 50px;
  font-size: 15px;
  background-color: #72b3d0;
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
}

`

export default Student