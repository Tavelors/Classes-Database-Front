import React from 'react'
import {updatePaymentPaid} from '../../utils/api'
const PaymentPaid = ({pay_id, setPay, paidBoolean}) => {
  
const handleClick = () => {
    let paymentBool = true;
    if(paidBoolean) {
        paymentBool = false
    }
    updatePaymentPaid(pay_id, paymentBool).then((curr) => {
        setPay((post) => {
            let newPaid = [...post]
            newPaid.splice(0,1,curr)
            return newPaid
          })
    })
}

    if(paidBoolean) {

        return <button style={{background: 'green'}} onClick={handleClick} >&nbsp;</button>
    } else {
        return <button style={{background: 'red'}} onClick={handleClick} >&nbsp;</button>
    }
}

export default PaymentPaid