import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useTable} from 'react-table'
import {getStudents} from '../utils/api'
import CreateClass from './CreateClass'
import styled from 'styled-components'
import NewStudent from './NewStudent'
const Students = () => {
const [popupDeleteButton, setPopupDeleteButton] = useState(false)
const [students, setStudents] = useState([])
   useEffect(() => {
    getStudents().then((list) => {
    setStudents(list)
    })
   },[])

//   const handleClick = (e) => {
// e.preventDefault()
// setPopupDeleteButton(true)
//   }

  return (
    <>
    <NewStudent />

    <StyledTable>
            <thead>

            <tr>
                <th>Student</th>
                <th>Presence</th>
                <th>Bank</th>
                <th>Payment</th>
                <th>Classes</th>
            </tr>
            </thead>

    {students.map((student) => {
      let paymentStatusButton;
      console.log(student.paymentStatus);
      if(student.paymentStatus) {
        paymentStatusButton = <Button style={{background: 'green'}} className="green">{student.paymentStatus} 💰</Button>
      } else {
      paymentStatusButton = <Button style={{background: 'red'}} >{student.paymentStatus} 💰</Button>
      }
        return (
            <tbody key={student._id}>
                <tr>
                <td style={{background:''}} >{student.firstName}</td>
                <td  >{student.presence}</td>
                <td>{student.bank}</td>
                <td> <Link to={`/home/students/${student._id}/payments`} >
                {paymentStatusButton} 
                </Link> 
                </td>
                <td>  
                <Link to={`/home/students/${student._id}`} >
                <ClassButton>📅 </ClassButton> 
                </Link> 
                </td>
                
                </tr>
            </tbody>
           
           
           )
        })}
    
        </StyledTable>
   
    </>
  )
}

const StyledTable = styled.table/*css*/`
margin-right: auto;
margin-left: auto;
margin-top: 30px;
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

height:40px;
width: 40px;
&:hover {
    transform: scale(1.1);
}

`

const ClassButton = styled.button/*css*/`
background-color: lightblue;
height:40px;
width: 40px;
&:hover {
    transform: scale(1.1);
}

`

export default Students



{/* <td><CreateClass firstName={student.firstName} lastName={student.lastName}  student_id={student._id} trigger={popupDeleteButton} setTrigger={setPopupDeleteButton} /></td> */}