import React from 'react'
import {updatePaymentType} from '../../utils/api'
const PayUpFront = ({pay_id}) => {
console.log(pay_id);
        const handleClick = () => {
            updatePaymentType()
        }

  return <button onClick={handleClick} >hi</button>
}

export default PayUpFront