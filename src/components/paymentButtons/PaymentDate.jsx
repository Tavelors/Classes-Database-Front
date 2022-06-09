import React, {useEffect, useState}from 'react'
import DatePicker from 'react-datepicker'
import {updatePaymentDate} from '../../utils/api'
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'

const PaymentDate = ({pay_id, setPay}) => {
    const [startDate, setStartDate] = useState(new Date())
   
 const changeDate = (date) => {
    updatePaymentDate(pay_id, date).then((curr) => {
      setStartDate(date)

      setPay((post) => {
        let newDate = [...post]
        for (let i = 0; i < newDate.length; i++) {
          if(curr._id === newDate[i]._id) {
              newDate.splice(i,1,curr)
            }
          }

          return newDate
})
    })
 }
 

  return (
<DateStyle>


    <DatePicker className="datepicker"  placeholderText="Select Date" onChange={changeDate}
    showMonthYearPicker />

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
  height:25px;
  width: 70px;
  font-size: 13px;
}
`

export default PaymentDate