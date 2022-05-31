import React, {useEffect, useState}from 'react'
import {getClassById, updateNotes} from '../../utils/api'
import {useParams, Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
const Notes = () => {
  const navigate = useNavigate()
const token = localStorage.getItem("alphstains-secret-user-token");
if(!token) {
    navigate('/login')
}
  const [studentClass, setStudentClass] = useState({})
  const [classNotes, setClassNotes] = useState('')
const {class_id} = useParams()
  
useEffect(() => {
  getClassById(class_id).then((list) => {
    setStudentClass(list)
    console.log(list);
    setClassNotes(list.description)
  } )
  },[class_id])

console.log(classNotes);
  const handleSubmit = (e) => {
    e.preventDefault()
    const logNote = `Student: ${studentClass.firstName}, Class: ${studentClass.classNumber}, Updated Notes`
    updateNotes(class_id, classNotes, logNote)
  }
// console.log(student);
  return (
    <>
         <Link to={`/students/${studentClass.student_id}`} >
          <Button>Back</Button>
        </Link>
        <StyledForm onSubmit={handleSubmit} >
          <textarea type='text' value={classNotes}  onChange={(e) => setClassNotes(e.target.value)} 
          rows='10' cols='33' />
          <div>
       
          <button>update</button>
          </div>
        </StyledForm>
    </>
  )
}
const Button = styled.button/*css*/`
font-size: 15px;
background-color: #72b3d0;
transition:0.2s 0.2s;
margin: 5px;
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

const StyledForm = styled.form/*css*/`
textarea {
  resize: none;
background-color: #b5d5e5;
font-size: 15px;
color: black;
font-weight: bold;
border: 2px solid black;
:focus {
  border: 3px solid black;
}
}
button {
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

export default Notes