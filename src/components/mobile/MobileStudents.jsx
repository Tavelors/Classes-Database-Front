import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {getStudents} from '../../utils/api'
import SortBy from './../SortBy'
import UpdateConcluded from './../paymentButtons/UpdateConcluded'
import styled from 'styled-components'
import NewStudent from './../NewStudent'
import SearchStudent from './../SearchStudent'
import DeleteStudent from './../DeleteStudent'
const MobileStudents = () => {
  const navigate = useNavigate()
const token = localStorage.getItem("alphstains-secret-user-token");
if(!token) {
    navigate('/login')
}
const [loading, setLoading] = useState(true)
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
       setStudents(list.student)
       setOldList(list.student)
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
  return <h1 >Loading...</h1>
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
            <StyledTable key={student._id}>
                <tbody>

                <tr>
                <TableName style={paymentConcludedStyle} className='student-name' > <div>Student</div><p>{student.firstName}</p><p>{student.lastName}</p></TableName>
                <td style={paymentConcludedStyle} ><div>Concluded</div><UpdateConcluded index={index} student={student} firstName={student.firstName} student_id={student._id} setStudents={setStudents} concludedBool={student.concluded} /></td>
                </tr>
                <tr>
                <td style={paymentConcludedStyle} >
                    <div>Presence</div>
                    {student.presence}
                    </td>
                <td style={paymentConcludedStyle} ><div>Bank</div>{student.bank}</td>
                </tr>
                <tr>
                <td style={paymentConcludedStyle} ><div>Payment</div> <Link to={`/payments/${student._id}/`} >
                {paymentStatusButton} </Link> </td>
                <td style={paymentConcludedStyle} ><div>Classes</div><Link to={`/students/${student._id}`} >
                    <ClassButton>📅</ClassButton> </Link> </td>
                </tr>
                <tr style={paymentConcludedStyle} >

                {thDelete}
                <td style={paymentConcludedStyle} >{showDeleteButton}</td>
                </tr>
                
                </tbody>
            </StyledTable>
           
           
           )
          })}
    
       
   
    </>
  )
}
}

const TableName = styled.td/*css*/`
padding: 0px;
p {
    word-wrap: break-word;
    font-size: 16px;
    margin: 5px;
    margin-bottom:10px;
    font-weight: bold;
    
}
`

const DeleteButton = styled.td/*css*/`
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
    @media screen and (max-width: 960px) {
        height:60px;
        width: 60px;
      }
}

`
const ShowButton = styled.td/*css*/`
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
  @media screen and (max-width: 960px) {
    height:60px;
    width: 60px;
  }
}

`

const StyledDiv = styled.div/*css*/`
@media screen and (min-width: 960px) {
    display:none;
  
  }
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
@media screen and (min-width: 960px) {
  display:none;

}
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
   max-width: 130px;
   max-height: 130px;
    width: 130px;
   
    height: 130px;  
}
tr, td, div {
    margin-bottom: 15px;
    font-weight: bold;
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
@media screen and (max-width: 960px) {
    height:60px;
    width: 60px;
    font-size: 25px;
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
@media screen and (max-width: 960px) {
    height:60px;
    width: 60px;
    font-size: 25px;
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

export default MobileStudents
