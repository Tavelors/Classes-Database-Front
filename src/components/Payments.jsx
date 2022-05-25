import React, {useEffect, useState} from 'react'
import {getPaymentByStudent,getStudentById} from '../utils/api'
import {useParams} from 'react-router-dom'
const Payments = () => {
    const {student_id} = useParams()
const [pay, setPay] = useState([])
const [student, setStudent] = useState({})


        useEffect(() => {
            getStudentById(student_id).then((list) => {
                setStudent(list)
                })
            getPaymentByStudent(student_id).then((list) => {
                    setPay(list)
            })
        },[student_id])
        console.log(pay);
  return (
      <>
      <p>{student.firstName} {student.lastName}</p>
    <table>
         <thead>

<tr>
    <th>Ticket</th>
    <th>Up Front</th>
    <th>After Month</th>
    <th>Date</th>
    <th>Paid</th>
    <th>Concluded</th>
</tr>
</thead>
        {pay.map((list, index) => {
            index++
            return (

                <tbody key={list._id}>
           <tr>
           <td>{index}</td>
           
           <td><input type='checkbox' /></td>
           <td><input type='checkbox' /></td>
           <td></td>
           <td><input type='checkbox' /></td>
           <td><input type='checkbox' /></td>
         
        
           </tr>
       </tbody>
               )
        })}
    </table>
      </>
  )
}

export default Payments