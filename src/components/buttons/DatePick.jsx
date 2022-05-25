import React, {useEffect, useState}from 'react'
import DatePicker from 'react-datepicker'
import {updateDate} from '../../utils/api'
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'
const DatePick = ({class_id, setStudentLesson}) => {
    const [startDate, setStartDate] = useState(new Date())
    
 const changeDate = (date) => {

    updateDate(class_id, date).then((curr) => {
      setStartDate(date)

setStudentLesson((post) => {
  let newDate = [...post]
  for (let i = 0; i < newDate.length; i++) {
    if(curr._id === newDate[i]._id) {
        newDate.splice(i,1,curr)
    }
  }
  console.log(curr);
  console.log(newDate);
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
  border:0px;
  &:hover {
    transform: scale(1.3);
  }
}
`

export default DatePick