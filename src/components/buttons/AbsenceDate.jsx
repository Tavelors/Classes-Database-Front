import React, {useEffect, useState}from 'react'
import DatePicker from 'react-datepicker'
import {AbsenceDatePick, postAbsenceClass, updateDate, updateStudentBankAndPresence} from '../../utils/api'
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'
const AbsenceDate = ({class_id, setStudentLesson, student_id, firstName, lastName, class_number}) => {
    const [startDate, setStartDate] = useState(new Date())
    
 const changeDate = async (e) => {
   e.preventDefault()
   await updateStudentBankAndPresence(student_id, -1)
     const post = await  postAbsenceClass(firstName, lastName, student_id)
     setStudentLesson(current => [post.class, ...current] )
     const logDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'short', timeStyle: 'short' }).format(startDate)
  const logNote = `Student: ${firstName}, Class: ${class_number}, Rescheduled Class set to ${logDate}`
   const curr = await  AbsenceDatePick(class_id, startDate, logNote)
       await updateDate(post.class._id, startDate, logNote)

     const secondCurr = await AbsenceDatePick(post.class._id, curr.AbsenceDate)
          
         setStudentLesson((setDate) => {
            let newDate = [...setDate]
            for (let i = 0; i < newDate.length; i++) {
                if(secondCurr._id === newDate[i]._id) {
                    newDate.splice(i,1,secondCurr)
                }
                
            }
            return newDate
         })

    
    setStudentLesson((post) => {
        let newDate = [...post]
        for (let i = 0; i < newDate.length; i++) {
            if(curr._id === newDate[i]._id) {
                newDate.splice(i,1,curr)
            }
        }

        return newDate
    })

 }
 

  return (
<DateStyle>
<form onSubmit={changeDate} >


    <DatePicker className="datepicker" 
     placeholderText="Select Date"
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
@media screen and (max-width: 960px) {
  height:30px;
  width: 80px;
  font-size: 15px;
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
  @media screen and (max-width: 960px) {
    margin-bottom: 15px;
    height:40px;
    width: 90px;
    font-size: 16px;
  }
}
`

export default AbsenceDate