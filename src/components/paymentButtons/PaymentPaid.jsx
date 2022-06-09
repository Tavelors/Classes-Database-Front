import React from 'react'
import {updatePaymentPaid} from '../../utils/api'
import styled from 'styled-components'
const PaymentPaid = ({index, list, pay_id, setPay, paidBoolean, firstName}) => {
  
const handleClick = () => {
    let paymentBool = true;
    let logNote = `Student: ${firstName}, Set monthly payment to true`
    if(paidBoolean) {
        logNote = `Student: ${firstName}, Set monthly payment to false`
        paymentBool = false
    }
    setPay((post) => {
        let newPaid = [...post]
        list.paid = paymentBool
        newPaid.splice(index,1,list)
        
        
        
        return newPaid
    })
    updatePaymentPaid(pay_id, paymentBool, logNote)
    
}

    if(paidBoolean) {

        return <StyledButton style={{background: 'green'}} onClick={handleClick} >&nbsp;</StyledButton>
    } else {
        return <StyledButton style={{background: 'red'}} onClick={handleClick} >&nbsp;</StyledButton>
    }
}
const StyledButton = styled.button/*css*/`

    // display: inline-block;
    // font-family: 'RobotoMono Regular';
    // padding: 1rem 2rem;
    // font-size: 1.3rem;
    // color: #90b4e8;
    // outline: none;
    color: black;
  font-weight: bold;
//   margin: 5px;
  // margin-bottom:20px;
//   width: 120px;
//   height: 50px;
//   font-size: 15px;
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
@media screen and (max-width: 960px) {
  height:60px;
  width: 60px;
  font-size: 25px;
}
`


export default PaymentPaid