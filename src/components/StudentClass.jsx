import React, {useEffect, useState} from 'react'
import {getStudentClass, updateDate} from '../utils/api'
import styled from 'styled-components'
import PutPresenceTrue from './buttons/PutPresenceTrue'
import PutPresenceFalse from './buttons/PutPresenceFalse'
import PutRescheduledTrue from './buttons/PutRescheduledTrue'
import PutRescheduledFalse from './buttons/PutRescheduledFalse'
import PutRescheduledPresenceTrue from './buttons/PutRescheduledPresenceTrue'
import PutRescheduledPresenceFalse from './buttons/PutRescheduledPresenceFalse'
import PutAbsenceTrue from './buttons/PutAbsenceTrue'
import PutAbsenceFalse from './buttons/PutAbsenceFalse'
import DatePick from './buttons/DatePick'
import AbsenceDate from './buttons/AbsenceDate'
import DeleteClass from './buttons/DeleteClass'
import Moment from 'react-moment'
const StudentClass = ({studentLesson, setStudentLesson, student_id}) => {
    // const [studentLesson, setStudentLesson] = useState([])
    const [date, setDate] = useState("");
    const [putPresence, setPutPresence] = useState(false)
    const [putRescheduled, setPutRescheduled] = useState(false)
    const [putRescheduledPresence, setPutRescheduledPresence] = useState(false)
    const [putAbsence, setPutAbsence] = useState(false)
    const [colorChange, setColorChange] = useState(false)
    useEffect(() => {
        getStudentClass(student_id).then((res) => {
            setStudentLesson(res)
        })
        
    },[student_id, setStudentLesson])

    const handleDate = (e) => {
        e.preventDefault();
        updateDate()
        setDate(e.target.value);
      };

      let normalPost;
      let presencePost;
      let rescheduledPost;
      let rescheduledPresence;

      const changeColor = (e) => {
        e.preventDefault()
        // setColorChange(true)
        // setColorChange(false)
      }

    
      if(!colorChange) {
          
          normalPost = {
             background: '#fdff62'
         }
          presencePost = {
           background: '#84ff7c'
         }
          rescheduledPost = {
           background: '#ffc259'
         }
          rescheduledPresence = {
           background: '#8fb9ff'
         }
      } else {

        normalPost = {
            background: '#ffa0fb'
        }
         presencePost = {
          background: '#ffa0fb'
        }
         rescheduledPost = {
          background: '#ffa0fb'
        }
         rescheduledPresence = {
          background: '#ffa0fb'
        }
        
      }
      
     
        
     
  return (
      <div>

    <table>
         <thead>

<tr>
    <th >Ticket</th>
    <th>Class Date</th>
    <th>Presence</th>
    <th>Absence</th>
    <th>Rescheduled</th>
    <th>Rescheduled Presence</th>
    <th>Delete</th>
</tr>
</thead>
        {studentLesson.map((list, index) => {
            index++
            // console.log(list);
            if (!list.presence && !list.rescheduled && !list.rescheduledPresence && !list.absence) {
                return (

                    <tbody key={list._id}>
               <tr>
               <td style={normalPost} ><button onClick={changeColor} >{index}</button></td>
               <TD style={normalPost} > <DatePick class_id={list._id} setStudentLesson={setStudentLesson} />
                   <Moment className='date-format' format='DD/MM/YYYY' >{list.classDate}</Moment>
                   
                   </TD>
               
               <td style={normalPost} ><PutPresenceTrue class_id={list._id} setPutPresence={setPutPresence} setStudentLesson={setStudentLesson} student_id={student_id} /></td>
               <td  style={normalPost}  > <PutAbsenceTrue class_id={list._id} setPutAbsence={setPutAbsence} setStudentLesson={setStudentLesson} student_id={student_id}  />  </td>
               <td style={normalPost} ><PutRescheduledTrue class_id={list._id} setPutRescheduled={setPutRescheduled} setStudentLesson={setStudentLesson}  /></td>
               <td style={normalPost} ><PutRescheduledPresenceTrue class_id={list._id} setPutRescheduledPresence={setPutRescheduledPresence} setStudentLesson={setStudentLesson} student_id={student_id} /></td>
               <td style={normalPost} ><DeleteClass class_id={list._id}      setStudentLesson={setStudentLesson}   /></td>
             
            
               </tr>
           </tbody>
                   ) 
            } else if (list.presence) {

                
                return (
                    
                <tbody key={list._id}>
           <tr>
           <td style={presencePost} >{index}</td>
           <TD style={presencePost} ><DatePick class_id={list._id} setStudentLesson={setStudentLesson} /><Moment className='date-format' format='DD/MM/YYYY' >{list.classDate}</Moment></TD>
           
           <td style={presencePost} > <PutPresenceFalse class_id={list._id} setPutPresence={setPutPresence} setStudentLesson={setStudentLesson} student_id={student_id} /> </td>
           <td  style={presencePost} ></td>
           <td style={presencePost} ></td>
           <td style={presencePost} ></td>
                    <td style={presencePost} ><DeleteClass class_id={list._id} setStudentLesson={setStudentLesson}   /></td>
         
        
           </tr>
       </tbody>
               )
            } else if(list.rescheduled) {
               return (

                    <tbody key={list._id}>
               <tr>
               <td style={rescheduledPost} >{index}</td>
               <TD style={rescheduledPost} ><DatePick class_id={list._id} setStudentLesson={setStudentLesson} /><Moment className='date-format' format='DD/MM/YYYY' >{list.classDate}</Moment></TD>
               
               <td style={rescheduledPost} >

               </td>
               <td style={rescheduledPost} ></td>
               <td style={rescheduledPost} ><PutRescheduledFalse class_id={list._id} setPutRescheduled={setPutRescheduled} setStudentLesson={setStudentLesson} /></td>
               
               <td style={rescheduledPost} ></td>
               <td style={rescheduledPost} ><DeleteClass class_id={list._id}  setStudentLesson={setStudentLesson}  /></td>
             
            
               </tr>
           </tbody>
                   ) 
            } else if (list.rescheduledPresence) {
                return (

                    <tbody key={list._id}>
               <tr>
               <td style={rescheduledPresence} >{index}</td>
               <TD style={rescheduledPresence} >
                   {/* <DatePick class_id={list._id} setStudentLesson={setStudentLesson} /><Moment className='date-format' format='DD/MM/YYYY' >{list.classDate}</Moment> */}
                   </TD>
               
               <td style={rescheduledPresence} >
                   
               </td>
               <td style={rescheduledPresence}></td>
               <td style={rescheduledPresence} ><Moment className='date-format' format='DD/MM/YYYY' >{list.AbsenceDate}</Moment></td>
               <td style={rescheduledPresence} ><PutRescheduledPresenceFalse class_id={list._id} setPutRescheduledPresence={setPutRescheduledPresence} setStudentLesson={setStudentLesson} student_id={student_id} /></td>
               
               <td style={rescheduledPresence} ><DeleteClass class_id={list._id}  setStudentLesson={setStudentLesson}  /></td>
             
            
               </tr>
           </tbody>
                   ) 
            } else {
                return (

                    <tbody key={list._id}>
               <tr>
               <td style={{background: '#ff3c29'}} >{index}</td>
               <TD style={{background: '#ff3c29'}} ><DatePick class_id={list._id} setStudentLesson={setStudentLesson} /><Moment className='date-format' format='DD/MM/YYYY' >{list.classDate}</Moment></TD>
               
               <td style={{background: '#ff3c29'}} >
                   
            
               </td>
               <td style={{background: '#ff3c29'}} > <PutAbsenceFalse class_id={list._id} setPutAbsence={setPutAbsence} setStudentLesson={setStudentLesson} student_id={student_id} /> </td>
               <td style={{background: '#ff3c29'}} ><AbsenceDate class_id={list._id} setStudentLesson={setStudentLesson} student_id={student_id} firstName={list.firstName} lastName={list.lastName}  /><Moment className='date-format' format='DD/MM/YYYY' >{list.AbsenceDate}</Moment></td>
               <td style={{background: '#ff3c29'}} ></td>
               
               <td style={{background: '#ff3c29'}} ><DeleteClass class_id={list._id} setStudentLesson={setStudentLesson}   /></td>
             
            
               </tr>
           </tbody>
                   ) 
            }
        })}
    </table>
      </div>
  )
}

const TD = styled.td/*css*/`
.date-format {
    color: ;
    font-size:18px;

}
`


export default StudentClass