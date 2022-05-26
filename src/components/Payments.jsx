import React, {useEffect, useState} from 'react'
import {getPaymentByStudent,getStudentById} from '../utils/api'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import PaymentDate from './paymentButtons/PaymentDate'
import PaymentPaid from './paymentButtons/PaymentPaid'
import PaymentConcluded from './paymentButtons/PaymentConcluded'
import PaymentType from './paymentButtons/PaymentType'
import Moment from 'react-moment'
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
    <StyledTable>
         <thead>

<tr>
    
    <th>Payment Type</th>
    <th>Date</th>
    <th>Paid</th>
    <th>Concluded</th>

</tr>
</thead>
        {pay.map((list, index) => {
            index++
            console.log(list);
            return (

                <tbody key={list._id}>
           <tr>
           
           
           <td><PaymentType pay_id={list._id} setPay={setPay} paymentType={list.paymentType} /> </td>
           <TD  ><PaymentDate pay_id={list._id} setPay={setPay}  /><Moment className='date-format' format='DD/MM/YYYY' >{list.dateChange}</Moment></TD>
           <td><PaymentPaid pay_id={list._id} setPay={setPay} paidBoolean={list.paid} /></td>
           <td><PaymentConcluded pay_id={list._id} setPay={setPay} concludedBool={list.concluded} /></td>
         
           
        
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
`

const TD = styled.td/*css*/`
.date-format {
    color: black ;
    font-size:18px;
    font-weight: bold;

}
`

export default Payments