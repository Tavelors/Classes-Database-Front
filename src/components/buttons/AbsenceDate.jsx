import React, {useEffect, useState}from 'react'
import DatePicker from 'react-datepicker'
import {AbsenceDatePick, postAbsenceClass, updatePresence, updateStudentBankAndPresence} from '../../utils/api'
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'
const AbsenceDate = ({class_id, setStudentLesson, student_id, firstName, lastName}) => {
    const [startDate, setStartDate] = useState(new Date())
    
 const changeDate = async (date) => {
     
   const curr = await  AbsenceDatePick(class_id, date)
         setStartDate(date)

     const post = await  postAbsenceClass(firstName, lastName, student_id)
     const secondCurr = await AbsenceDatePick(post.class._id, curr.AbsenceDate)
     updateStudentBankAndPresence(student_id, -1, 1)
         setStudentLesson(current => [...current, post.class] )
          
         setStudentLesson((setDate) => {
            let newDate = [...setDate]
            for (let i = 0; i < newDate.length; i++) {
                if(secondCurr._id === newDate[i]._id) {
                    newDate.splice(i,1,secondCurr)
                }
                
            }
            return newDate
         })
    // await updatePresence(false, false, true, false, post.class_id)
    
    setStudentLesson((post) => {
        let newDate = [...post]
        for (let i = 0; i < newDate.length; i++) {
            if(curr._id === newDate[i]._id) {
                newDate.splice(i,1,curr)
            }
        }

        return newDate
    })
// })
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
  font-color:
  padding:0px;
  border:2px solid black;
  &:hover {
    transform: scale(1.3);
  }
}
`

export default AbsenceDate