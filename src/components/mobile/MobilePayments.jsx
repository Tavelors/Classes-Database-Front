import React, {useEffect, useState} from 'react'
import {getPaymentByStudent,getStudentById} from '../../utils/api'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import PaymentDate from './../paymentButtons/PaymentDate'
import PaymentPaid from './../paymentButtons/PaymentPaid'
import NewPayment from './../paymentButtons/NewPayment'
import PaymentType from './../paymentButtons/PaymentType'
import DeletePay from './../paymentButtons/DeletePay'
import Moment from 'react-moment'
const MobilePayments = () => {
    const {student_id} = useParams()
const [pay, setPay] = useState([])
const [student, setStudent] = useState({})
const [loading, setLoading] = useState(true)
const [showDelete, setShowDelete] = useState(false)

        useEffect(() => {
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
  

        {pay.map((list, index) => {
             let showDeleteButtons;
       if(showDelete) {
        showDeleteButtons = <DeletePay index={index} list={list} pay_id={list._id} setPay={setPay} firstName={list.firstName}  />
           }
           
          
            return (

                <StyledTable key={`${list._id}${index}`}>
                  
                    <tbody>

           <tr>
               <td>Payment Type</td>
           <td><PaymentType index={index} list={list} pay_id={list._id} setPay={setPay} paymentType={list.paymentType} /> </td>
           </tr>
           <tr>
           <td>Date</td>
           <TD  ><PaymentDate pay_id={list._id} setPay={setPay}  /><Moment className='date-format' format='MMMM YY' >{list.dateChange}</Moment></TD>
           </tr>
           <tr>
           <td>Paid</td>
           <td><PaymentPaid index={index} list={list} pay_id={list._id} setPay={setPay} paidBoolean={list.paid} firstName ={student.firstName} /></td>
           </tr>
           <tr>
               {thDelete}
               {showDeleteButtons}
           </tr>
           
                    </tbody>
                   
       </StyledTable>
      
       
       )

    })}
      </>
      )}}
const HideDiv = styled.div/*css*/`
@media screen and (min-width: 960px) {
    display:none;
      }
`


const StyledTable = styled.table/*css*/`
margin-bottom: 30px;
padding: 10px;
border: 2px solid;
@media screen and (min-width: 960px) {
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
        font-size: 15px;
      }
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
        font-size: 15px;
      }
}

`

export default MobilePayments