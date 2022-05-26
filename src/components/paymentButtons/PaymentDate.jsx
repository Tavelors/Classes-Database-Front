import React, {useEffect, useState}from 'react'
import DatePicker from 'react-datepicker'
import {updatePaymentDate} from '../../utils/api'
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'

const PaymentDate = ({pay_id, setPay}) => {
    const [startDate, setStartDate] = useState(new Date())
   
 const changeDate = (date) => {
console.log(date);
    updatePaymentDate(pay_id, date).then((curr) => {
      setStartDate(date)

      setPay((post) => {
  let newDate = [...post]
        newDate.splice(0,1,curr)
  return newDate
})
    })
 }
 

  return (
<DateStyle>


    <DatePicker className="datepicker"  placeholderText="Select Date" onChange={changeDate} />

</DateStyle>
    )
}


const DateStyle = styled.div/*css*/`
z-index: 2;

.datepicker {
  width: 62px;
  height: 17px;
  margin-bottom: 2px;
  font-size:12px;
  background-color: lightblue;
  font-color
  padding:0px;
  border:2px solid black;
  &:hover {
    transform: scale(1.3);
  }
}
`

export default PaymentDate