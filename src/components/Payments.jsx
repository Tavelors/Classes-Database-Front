import React, {useEffect, useState} from 'react'
import {getPaymentByStudent,getStudentById} from '../utils/api'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import PaymentDate from './paymentButtons/PaymentDate'
import PaymentPaid from './paymentButtons/PaymentPaid'
import NewPayment from './paymentButtons/NewPayment'
import PaymentConcluded from './paymentButtons/PaymentConcluded'
import PaymentType from './paymentButtons/PaymentType'
import DeletePay from './paymentButtons/DeletePay'
import Moment from 'react-moment'
const Payments = ({setConcludedStudent}) => {
    const {student_id} = useParams()
const [pay, setPay] = useState([])
const [student, setStudent] = useState({})
const [loading, setLoading] = useState(true)
const [showDelete, setShowDelete] = useState(false)

        useEffect(() => {
            // getStudentById(student_id).then((list) => {
            //     setStudent(list)
            // })
            getPaymentByStudent(student_id).then((list) => {
                setLoading(false)
                    setPay(list)
            })
        },[student_id])
     
        let thDelete = <DeleteButton><button onClick={() => setShowDelete(true)} >Delete</button></DeleteButton>
        if(showDelete) {
            thDelete = <ShowButton><button onClick={() => setShowDelete(false)} >Hide</button></ShowButton>
        }

        if(loading) {
            return <h1 >Loading...</h1>
        } else {

            return (
                <>
      <h2>{pay.firstName} {pay.lastName}</h2>
      <HideDiv>

      <NewPayment student_id={student_id} setPay={setPay} />
      </HideDiv>
    <StyledTable>
         <thead>

<tr>
    
    <th>Payment Type</th>
    <th>Date</th>
    <th>Paid</th>
    {thDelete}

</tr>
</thead>
        {pay.map((list, index) => {
             let showDeleteButtons;
       if(showDelete) {
        showDeleteButtons = <DeletePay index={index} list={list} pay_id={list._id} setPay={setPay} firstName={list.firstName}  />
           }
           
   
            return (

                <tbody key={`${list._id}${index}`}>
           <tr>
           
           
           <td><PaymentType index={index} list={list} pay_id={list._id} setPay={setPay} paymentType={list.paymentType} /> </td>
           <TD  ><PaymentDate pay_id={list._id} setPay={setPay}  /><Moment className='date-format' format='MMMM YY' >{list.dateChange}</Moment></TD>
           <td><PaymentPaid index={index} list={list} pay_id={list._id} setPay={setPay} paidBoolean={list.paid} firstName ={student.firstName} /></td>
           <td>{showDeleteButtons}</td>
          
         
           
        
           </tr>
       </tbody>
       
       )
    })}
    </StyledTable>
    
      </>
  )
}
}

const HideDiv = styled.div/*css*/`
@media screen and (max-width: 960px) {
    display:none;
      }
`

const StyledTable = styled.table/*css*/`
@media screen and (max-width: 960px) {
display:none;
  }
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

export default Payments