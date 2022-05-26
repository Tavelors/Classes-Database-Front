import React from 'react'
import {updatePaymentConcluded} from '../../utils/api'
const PaymentConcluded = ({pay_id, setPay, concludedBool}) => {
  
const handleClick = () => {
    let concludedBoolean = true;
    if(concludedBool) {
        concludedBoolean = false
    }
    updatePaymentConcluded(pay_id, concludedBoolean).then((curr) => {
        setPay((post) => {
            let newPaid = [...post]
            newPaid.splice(0,1,curr)
            return newPaid
          })
    })
}

    if(concludedBool) {

        return <button style={{background: 'green'}} onClick={handleClick} >&nbsp;</button>
    } else {
        return <button style={{background: 'red'}} onClick={handleClick} >&nbsp;</button>
    }
}

export default PaymentConcluded