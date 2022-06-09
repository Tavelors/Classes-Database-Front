import React, {useEffect, useState}from 'react'
// import {getTodays} from '../utils/api'
import {getStudentClass, updateDate, postClass, getTodays} from '../../utils/api'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import PutPresenceTrue from './../buttons/PutPresenceTrue'
import RescheduledAbsence from './../buttons/RescheduledAbsence'
import PresenceRescheduledPut from './../buttons/PresenceRescheduledPut'
import PutAbsenceTrue from './../buttons/PutAbsenceTrue'
import ColorChanger from './../buttons/ColorChanger'
import DatePick from './../buttons/DatePick'
import LockButton from './../buttons/LockButton'
import UnlockButton from './../buttons/UnlockButton'
import AbsenceDate from './../buttons/AbsenceDate'
import DeleteClass from './../buttons/DeleteClass'
import Moment from 'react-moment'
import {useNavigate} from 'react-router-dom'

const MobileUpcomingClass = ({studentLesson, setStudentLesson}) => {

    const navigate = useNavigate()
const token = localStorage.getItem("alphstains-secret-user-token");
if(!token) {
    navigate('/login')
}

const [putPresence, setPutPresence] = useState(false)
const [putRescheduledPresence, setPutRescheduledPresence] = useState(false)
const [putAbsence, setPutAbsence] = useState(false)
const [deletePopup, setDeletePopup] = useState(false)

      const handleDelete = (e) => {
          e.preventDefault()
        setDeletePopup(true)
      }
      let normalPost;
      let rescheduledPresence;
 
  return (
      <div>

        {studentLesson.map((list, index) => {
            
           let actualDate;
            if(list.colorChange) {
            normalPost = {background: '#ffa0fb'}
            rescheduledPresence = {background: '#ffa0fb'}

            } else {
            normalPost = {background: '#fdff62'}
            rescheduledPresence = {background: '#8fb9ff'}

            }

            if(list.classDate === undefined) {
                actualDate = <TD style={normalPost} >
                <div>Please Choose</div>
                <div>a Date</div>
               </TD> 
               } else {
             actualDate = <TD style={normalPost} >
                <Moment className='date-format' format='LL' >{list.classDate}</Moment><div>
               <Moment className='date-format' format='LT' >{list.classDate}</Moment></div></TD>
               }

            if (!list.presence && !list.rescheduled && !list.rescheduledPresence && !list.absence && !list.lockButton) {  return (
                // ORIGIN CLASS //
                 // UNlOCKED //
<Table key={list._id}>
    <tbody>

<tr>
<td style={normalPost} className='classLock' ><LockButton index={index} list={list} class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={normalPost} ><ColorChanger  classNum={index} list={list}   index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
</tr>
<tr>
<TableName style={normalPost} className='student-name' ><p>{list.firstName}</p><p>{list.lastName}</p></TableName>
{actualDate}
</tr>
<tr>
<td style={normalPost} ><PutPresenceTrue  index={index} list={list}  class_id={list._id} setPutPresence={setPutPresence} setStudentLesson={setStudentLesson} student_id={list.student_id}  class_number={list.classNumber} firstName={list.firstName} /></td>
<td style={normalPost}  ><PutAbsenceTrue  index={index} list={list}  class_id={list._id} setPutAbsence={setPutAbsence} setStudentLesson={setStudentLesson} student_id={list.student_id} class_number={list.classNumber} firstName={list.firstName}  />  </td>
</tr>

</tbody>
</Table>
                   )   } else if (!list.presence && !list.rescheduled && !list.rescheduledPresence && !list.absence && list.lockButton) {  return (
                       // ORIGIN CLASS //
                       // lOCKED //
<Table key={list._id}>
    <tbody>

<tr>
<td style={normalPost} className='classLock' ><UnlockButton  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={normalPost} ><ColorChanger  classNum={index} list={list}   index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
</tr>
<tr>
<TableName style={normalPost} className='student-name' ><p>{list.firstName}</p><p>{list.lastName}</p></TableName>
{actualDate}
</tr>
</tbody>
</Table>
                   )   }  else if (list.rescheduledPresence && !list.presence && !list.lockButton) { return (
                             // RESCHEDULED PRESENCE CLASS //
                                  // UNLOCKED //
<Table key={list._id}>
    <tbody>

<tr>
<td style={rescheduledPresence}  className='classLock' ><LockButton  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPresence} ><ColorChanger   classNum={index} list={list}  index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
</tr>
<tr>
<TableName style={rescheduledPresence} className='student-name' ><p>{list.firstName}</p><p>{list.lastName}</p></TableName>
<TD style={rescheduledPresence} ><Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>
</tr>
<tr>
<TD style={rescheduledPresence} ><PresenceRescheduledPut  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson}  class_number={list.classNumber} firstName={list.firstName}  /></TD>
<td style={rescheduledPresence}><RescheduledAbsence  index={index} list={list}  class_id={list._id} setPutRescheduledPresence={setPutRescheduledPresence} setStudentLesson={setStudentLesson} student_id={list.student_id}  class_number={list.classNumber} firstName={list.firstName}  /></td>
</tr>
    </tbody>
</Table>
                   ) } else if (list.rescheduledPresence && !list.presence && list.lockButton) { return (
                         // RESCHEDULED PRESENCE CLASS //
                                  // lOCKED //
<Table key={list._id}>
    <tbody>

<tr>
<td style={rescheduledPresence} className='classLock' ><UnlockButton  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPresence} ><ColorChanger  classNum={index} list={list}   index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
</tr>
<tr>
<TableName style={rescheduledPresence} className='student-name' ><p>{list.firstName}</p><p>{list.lastName}</p></TableName>
<TD style={rescheduledPresence} ><Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>              
</tr>

    </tbody>
</Table>
                   )   } 
        })}
   
      </div>
  )

}

const TableName = styled.td/*css*/`

p {
    font-size: 20px;
    margin: 5px;
    font-weight: bold;
}
`

const Table = styled.table/*css*/`
@media screen and (min-width: 960px) {
    display:none;
}
margin-bottom: 40px;
box-shadow: 0 15px 25px rgba(0,0,0,.9);
background-color: black;
margin-right: auto;
margin-left: auto;
td {
    width: 100px;
    height: 100px;    
}
.student-name {
    font-size: 20px;
}
.delete-button {
    background-color: red;
    height:40px;
    width: 40px;
    font-size: 20px;
    &:hover {
        transform: scale(1.1);
    }
}

.classLock {
    background-color:white;
}
.paymentButton {
    background-color: red;
    height:40px;
    width: 40px;
    &:hover {
        transform: scale(1.1);
    }
}
thead, tr, th {
    max-width: 90px;
    max-height: 60px;
    font-size: 15px;
   
} 
@media screen and (max-width: 960px) {
   
    tr th {
        background-color: transparent;
        padding-left: 13.5px;
       //  max-width: 70px;
        font-size: 13px;
    }
   }
`
const TD = styled.td/*css*/`
.date-format {
    padding:0px;
    color: black ;
    font-size:15px;
    font-weight: bold;

}

`


export default MobileUpcomingClass