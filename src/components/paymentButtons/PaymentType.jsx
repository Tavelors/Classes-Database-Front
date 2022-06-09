import React from 'react'
import {putPaymentType} from '../../utils/api'
import styled from 'styled-components'
const PaymentType = ({index, list, pay_id, setPay, paymentType}) => {
  
const handleClick = () => {
    let paymentTypeBool = true;
    if(paymentType) {
        paymentTypeBool = false
    }
    setPay((post) => {
        let newPaid = [...post]
        list.paymentType = paymentTypeBool
        newPaid.splice(index,1,list)
        return newPaid
    })
    
    putPaymentType(pay_id, paymentTypeBool)
}

    if(paymentType) {

        return <StyledButton style={{background: 'lightgreen'}} onClick={handleClick} >Up Front</StyledButton>
    } else {
        return <StyledButton style={{background: 'lightgrey'}} onClick={handleClick} >After Month</StyledButton>
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
  font-size: 15px;
}
`


export default PaymentType