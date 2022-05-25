import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useTable} from 'react-table'
import {getStudents} from '../utils/api'
import CreateClass from './CreateClass'
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

    <table>
            <thead>

            <tr>
                <th>Student</th>
                <th>Presence</th>
                <th>Bank</th>
                <th>Status</th>
                <th>Info</th>
            </tr>
            </thead>

    {students.map((student) => {
  
        return (
            <tbody key={student._id}>
                <tr>
                <td style={{background:''}} >{student.firstName}</td>
                <td  >{student.presence}</td>
                <td>{student.bank}</td>
                <td> <Link to={`/home/students/${student._id}/payments`} >
                <button>{student.paymentStatus} &nbsp;</button> 
                </Link> 
                </td>
                <td>  
                <Link to={`/home/students/${student._id}`} >
                <button>{student.paymentStatus} view</button> 
                </Link> 
                </td>
                <td></td>
                </tr>
            </tbody>
           
           
           )
        })}
    
        </table>
   
    </>
  )
}

export default Students



{/* <td><CreateClass firstName={student.firstName} lastName={student.lastName}  student_id={student._id} trigger={popupDeleteButton} setTrigger={setPopupDeleteButton} /></td> */}