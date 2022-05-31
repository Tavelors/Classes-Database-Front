import React, {useEffect, useState}from 'react'
import DatePicker from 'react-datepicker'
import {updateDate} from '../../utils/api'
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'
const DatePick = ({class_id, setStudentLesson, class_number, firstName}) => {
    const [startDate, setStartDate] = useState(new Date())
    // const ExampleCustomTimeInput = ({ date, value, onChange }) => (
      //   <input
      //     value={value}
    //     onChange={(e) => onChange(e.target.value)}
    //     style={{ border: "solid 1px pink" }}
    //   />
    // );
    
    // const handleColor = (time) => {
      //   return time.getHours() > 12 ? "text-success" : "text-error";
      // }
      const changeDate = (e) => {

        const logDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'short', timeStyle: 'short' }).format(startDate)
  const logNote = `Student: ${firstName}, Class: ${class_number}, Class Date set to ${logDate}`
  // console.log(logDate);
  // console.log(startDate.toLocaleDateString("ar-EG"), options)
  // console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'short', timeStyle: 'short' }).format(startDate))
  e.preventDefault();
  // console.log(date);
  // setStartDate(date)
  updateDate(class_id, startDate, logNote).then((curr) => {
    
setStudentLesson((post) => {
  let newDate = [...post]
  for (let i = 0; i < newDate.length; i++) {
    if(curr._id === newDate[i]._id) {
        newDate.splice(i,1,curr)
      }
    }
    // console.log(curr);
    // console.log(newDate);
    return newDate
  })
})
}



  return (
<DateStyle>

<form onSubmit={changeDate} >

    <DatePicker  className="datepicker"  placeholderText="Select Date"
     onChange={(date) => setStartDate(date)}  
     dateFormat="MMMM d h:mm"
     selected={startDate}
   
      showTimeSelect 
      timeIntervals={10}
      timeCaption="time"
      
      />
      <button>Update</button>
      </form>

</DateStyle>
    )
}


const DateStyle = styled.div/*css*/`
z-index: 2;
button {
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
}
}
.datepicker {
  width: 75px;
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

export default DatePick


