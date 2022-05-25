import React, {useEffect, useState} from 'react'
import {getTickets} from '../utils/api'
const StudentClass = ({student_id}) => {
  const [ticket, setTicket] = useState([])
    const [date, setDate] = useState("");

    useEffect(() => {
        getTickets().then((res) => {
            setTicket(res)
        })
    },[])

    const handleChange = (e) => {
        e.preventDefault();
        // console.log(e);
        setDate(e.target.value);
      };

      console.log(date);
      let year;
      let month;
      let day;
      if (date) {
        const newDate = date.split("");
      
        year = newDate[0] + newDate[1] + newDate[2] + newDate[3];
        month = newDate[5] + newDate[6];
        day = newDate[8] + newDate[9];
        // console.log(year);
      }
console.log(ticket);

  return (
    <table>
         <thead>

<tr>
    <th>Student</th>
    <th>Class Date</th>
    <th>Created</th>
    <th>Rescheduled</th>
    <th>Rescheduled Presence</th>
</tr>
</thead>
        {ticket.map((list, index) => {
            index++
            return (

                <tbody key={list._id}>
           <tr>
           <td>{list.firstName}</td>
           <td>{list.classDate}</td>
           
           <td>{list.created}</td>
           <td><input type='checkbox' /></td>
           <td><input type='checkbox' /></td>
         
        
           </tr>
       </tbody>
               )
        })}
    </table>
  )
}

export default StudentClass