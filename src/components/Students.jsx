import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {getStudents} from '../utils/api'
import CreateClass from './CreateClass'
import SortBy from './SortBy'
import UpdateConcluded from './paymentButtons/UpdateConcluded'
import styled from 'styled-components'
import NewStudent from './NewStudent'
import SearchStudent from './SearchStudent'
import DeleteStudent from './DeleteStudent'
const Students = () => {
  const navigate = useNavigate()
const token = localStorage.getItem("alphstains-secret-user-token");
if(!token) {
    navigate('/login')
}
const [loading, setLoading] = useState(true)
const [popupDeleteButton, setPopupDeleteButton] = useState(false)
const [students, setStudents] = useState([])
const [concludedStudent, setConcludedStudent] = useState(false)
const [showForm, setShowForm] = useState(false)
const [showPost, setShowPost] = useState(false)
const [showSearch, setShowSearch] = useState(false)
const [oldList, setOldList] = useState([])
const [showDelete, setShowDelete] = useState(false)
   useEffect(() => {
     getStudents().then((list) => {
       setLoading(false)
       setStudents(list)
       setOldList(list)
      })
   },[])

let sortForm;
let createStudent;
let searchStudent;
if(showPost) {
  createStudent = <NewStudent setStudents={setStudents} />
}
if(showForm) {
 sortForm = <SortBy setStudents={setStudents} />
}
if(showSearch){
  searchStudent = <SearchStudent setStudents={setStudents} students={students} setOldList={setOldList} oldList={oldList} />
}

let thDelete = <DeleteButton><button onClick={() => setShowDelete(true)} >Delete</button></DeleteButton>
if(showDelete) {
    thDelete = <ShowButton><button onClick={() => setShowDelete(false)} >Hide</button></ShowButton>
}

if(loading) {
  return <div className="spinner"></div>
} else {

  
  return (
    <>
    
    <StyledDiv>

    <button onClick={() => {
      setShowForm(true)
      setShowPost(false)
      setShowSearch(false)
    }} >Sorter</button>
    <button onClick={() => {
      setShowForm(false)
      setShowPost(false)
      setShowSearch(true)
    }} >Search</button>
    <button onClick={() => {
      setShowSearch(false)
      setShowPost(true)
      setShowForm(false)
    }} >Create</button>
   {sortForm}
   {createStudent}
   {searchStudent}
    </StyledDiv>
    <StyledTable>
            <thead>

            <tr>
                <th>Student</th>
                <th>Presence</th>
                <th>Bank</th>
                <th>Payment</th>
                <th>Classes</th>
                <th>Concluded</th>
               {thDelete}
            </tr>
            </thead>

    {students.map((student, index) => {
      let paymentStatusButton;
      let paymentConcludedStyle;
      let showDeleteButton;
      if(showDelete) {
        showDeleteButton = <DeleteStudent  index={index} student={student} firstName={student.firstName} student_id={student._id} setStudents={setStudents}  />
      }
      if(student.concluded) {
        paymentConcludedStyle = {
          background: 'orange'
        } 
      }
      if(student.paymentStatus) {
        paymentStatusButton = <Button style={{background: 'green'}} setConcludedStudent={setConcludedStudent} className="green">{student.paymentStatus} 💰</Button>
      } else {
      paymentStatusButton = <Button style={{background: 'red'}} setConcludedStudent={setConcludedStudent} >{student.paymentStatus} 💰</Button>
      }
      
        return (
            <tbody key={student._id}>
                <tr>
                <td style={paymentConcludedStyle} >{student.firstName}</td>
                <td style={paymentConcludedStyle} >{student.presence}</td>
                <td style={paymentConcludedStyle} >{student.bank}</td>
                <td style={paymentConcludedStyle} > <Link to={`/payments/${student._id}/`} >
                {paymentStatusButton} </Link> </td>
                <td style={paymentConcludedStyle} ><Link to={`/students/${student._id}`} >
                <ClassButton>📅</ClassButton> 
                </Link> 
                </td>
                <td style={paymentConcludedStyle} ><UpdateConcluded index={index} student={student} firstName={student.firstName} student_id={student._id} setStudents={setStudents} concludedBool={student.concluded} /></td>
                <td style={paymentConcludedStyle} >{showDeleteButton}</td>
                </tr>
            </tbody>
           
           
           )
          })}
    
        </StyledTable>
   
    </>
  )
}
}

const DeleteButton = styled.th/*css*/`
padding: 0px;
button {
    background-color:red;
    height:30px;
    width: 60px;
    font-size: 15px;
    font-weight: bold;
    transition:0.2s 0.2s;
    &:hover {
      transform: scale(1.1);
      transition:0.2s 0s;
      
    }
    :active {
    background-color: green;
    // box-shadow: 5px 5px #666;
    // transform: translateY(4px);
    transform: scale(1);
    transition:0s 0s;
    
    }
}

`
const ShowButton = styled.th/*css*/`
padding: 0px;
button {
    background-color: green;
    height:30px;
    width: 60px;
    font-size: 15px;
    font-weight: bold;
    transition:0.2s 0.2s;
    &:hover {
      transform: scale(1.1);
      transition:0.2s 0s;
      
    }
    :active {
    background-color: red;
    // box-shadow: 5px 5px #666;
    // transform: translateY(4px);
    transform: scale(1);
    transition:0s 0s;
    
  }
}

`

const StyledDiv = styled.div/*css*/`
button {
  color: black;
  font-weight: bold;
  margin: 5px;
    margin-bottom:20px;
    width: 60px;
    height: 25px;
    font-size: 10px;
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
`

const StyledTable = styled.table/*css*/`
margin-right: auto;
margin-left: auto;
margin-top: 30px;
background-color:black;
box-shadow: 0 15px 25px rgba(0,0,0,.9);
tr {
  background-color: lightgreen;
  th {
    font-size: 20px;
  }
  
}
tr, td {
    font-size: 20px;

}
`
const Button = styled.button/*css*/`
font-size: 20px;
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

const ClassButton = styled.button/*css*/`
background-color: lightblue;
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
const ConcludedButton = styled.button/*css*/`
background-color: lightblue;
height:40px;
width: 40px;
font-size: 20px;
&:hover {
    transform: scale(1.1);
}

`

export default Students



{/* <td><CreateClass firstName={student.firstName} lastName={student.lastName}  student_id={student._id} trigger={popupDeleteButton} setTrigger={setPopupDeleteButton} /></td> */}