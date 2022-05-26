import React from 'react'
import {putPaymentType} from '../../utils/api'
const PaymentType = ({pay_id, setPay, paymentType}) => {
  
const handleClick = () => {
    let paymentTypeBool = true;
    if(paymentType) {
        paymentTypeBool = false
    }
    putPaymentType(pay_id, paymentTypeBool).then((curr) => {
        setPay((post) => {
            let newPaid = [...post]
            newPaid.splice(0,1,curr)
            return newPaid
          })
    })
}

    if(paymentType) {

        return <button style={{background: 'lightgreen'}} onClick={handleClick} >Up Front</button>
    } else {
        return <button style={{background: 'lightgrey'}} onClick={handleClick} >After Month</button>
    }
}

export default PaymentType