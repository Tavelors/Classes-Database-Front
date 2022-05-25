import React, {useEffect, useState} from 'react'
import {getAllPayments} from '../utils/api'
import {useParams} from 'react-router-dom'
const AllPayments = () => {
    const {student_id} = useParams()
const [pay, setPay] = useState([])



        useEffect(() => {

            getAllPayments().then((list) => {
                    setPay(list)
            })
        },[student_id])
        console.log(pay);
  return (
      <>
     
    <table>
         <thead>

<tr>
    <th>Student</th>
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
           <td><p>
           {list.firstName}
           
               </p></td>
           
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

export default AllPayments