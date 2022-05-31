import React, {useEffect, useState} from 'react'
import {getPaymentByStudent,getStudentById} from '../utils/api'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import PaymentDate from './paymentButtons/PaymentDate'
import PaymentPaid from './paymentButtons/PaymentPaid'
import NewPayment from './paymentButtons/NewPayment'
import PaymentConcluded from './paymentButtons/PaymentConcluded'
import PaymentType from './paymentButtons/PaymentType'
import Moment from 'react-moment'
const Payments = ({setConcludedStudent}) => {
    const {student_id} = useParams()
const [pay, setPay] = useState([])
const [student, setStudent] = useState({})
const [loading, setLoading] = useState(true)


        useEffect(() => {
            // getStudentById(student_id).then((list) => {
            //     setStudent(list)
            // })
            getPaymentByStudent(student_id).then((list) => {
                setLoading(false)
                    setPay(list)
            })
        },[student_id])
        console.log(pay);
        if(loading) {
            return <div class="spinner"></div>
        } else {

            return (
                <>
      <h2>{pay.firstName} {pay.lastName}</h2>
      <NewPayment student_id={student_id} setPay={setPay} />
    <StyledTable>
         <thead>

<tr>
    
    <th>Payment Type</th>
    <th>Date</th>
    <th>Paid</th>
    {/* <th>Concluded</th> */}

</tr>
</thead>
        {pay.map((list, index) => {
           
            console.log(list);
            return (

                <tbody key={`${list._id}${index}`}>
           <tr>
           
           
           <td><PaymentType index={index} list={list} pay_id={list._id} setPay={setPay} paymentType={list.paymentType} /> </td>
           <TD  ><PaymentDate pay_id={list._id} setPay={setPay}  /><Moment className='date-format' format='MMMM YY' >{list.dateChange}</Moment></TD>
           <td><PaymentPaid index={index} list={list} pay_id={list._id} setPay={setPay} paidBoolean={list.paid} firstName ={student.firstName} /></td>
           {/* <td><PaymentConcluded pay_id={list._id} setPay={setPay} concludedBool={list.concluded} /></td> */}
         
           
        
           </tr>
       </tbody>
       
       )
    })}
    </StyledTable>
    
      </>
  )
}
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
// const Button = styled.button/*css*/`
// color: black;
// font-weight: bold;
// margin: 5px;
// margin-bottom:20px;
// width: 120px;
// height: 50px;
// font-size: 15px;
// background-color: #72b3d0;
// &:hover {
//   transform: scale(1.1);
// }
// `

export default Payments