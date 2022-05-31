import React, {useEffect, useState}from 'react'
// import {getTodays} from '../utils/api'
import {getStudentClass, updateDate, postClass, getTodays} from '../utils/api'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import PutPresenceTrue from './buttons/PutPresenceTrue'
import PutPresenceFalse from './buttons/PutPresenceFalse'
import PutRescheduledTrue from './buttons/PutRescheduledTrue'
import PutRescheduledFalse from './buttons/PutRescheduledFalse'
import PutRescheduledPresenceTrue from './buttons/PutRescheduledPresenceTrue'
import PutRescheduledPresenceFalse from './buttons/PutRescheduledPresenceFalse'
import PresenceRescheduledPutLocked from './buttons/PresenceRescheduledPutLocked'
import RescheduledAbsence from './buttons/RescheduledAbsence'
import PresenceRescheduledPut from './buttons/PresenceRescheduledPut'
import PutAbsenceTrue from './buttons/PutAbsenceTrue'
import PutAbsenceFalse from './buttons/PutAbsenceFalse'
import ColorChanger from './buttons/ColorChanger'
import DatePick from './buttons/DatePick'
import LockButton from './buttons/LockButton'
import UnlockButton from './buttons/UnlockButton'
import AbsenceDate from './buttons/AbsenceDate'
import DeleteClass from './buttons/DeleteClass'
import Moment from 'react-moment'
import {useNavigate} from 'react-router-dom'
const UpcomingClass = () => {
    const navigate = useNavigate()
const token = localStorage.getItem("alphstains-secret-user-token");
if(!token) {
    navigate('/login')
}
const [loading, setLoading] = useState(true)
const [studentLesson, setStudentLesson] = useState([])
const [date, setDate] = useState("");
const [putPresence, setPutPresence] = useState(false)
const [putRescheduled, setPutRescheduled] = useState(false)
const [putRescheduledPresence, setPutRescheduledPresence] = useState(false)
const [putAbsence, setPutAbsence] = useState(false)
const [deletePopup, setDeletePopup] = useState(false)
const [deleteId, setDeleteId] = useState('')
    useEffect(() => {
        getTodays().then((list) => {
            setLoading(false)
            setStudentLesson(list)
        })
    },[])
      const handleDelete = (e) => {
          e.preventDefault()
        setDeletePopup(true)
      }
      let normalPost;
      let presencePost;
      let rescheduledPost;
      let rescheduledPresence;
      let absencePost;
      let rescheduledPresenceButton;
        if(loading) {
            return <div class="spinner"></div>
        } else {

       
  return (
      <div>
    <Table>
         <thead>
<tr>
    <th>Lock</th>
    <th>Class</th>
    <th>Student</th>
    <th>Class Date</th>
    <th>Presence</th>
    <th>Absence</th>

</tr>
</thead>
        {studentLesson.map((list, index) => {
            
           let actualDate;
            if(list.colorChange) {
            normalPost = {background: '#ffa0fb'}
            presencePost = {background: '#ffa0fb'}
            rescheduledPost = {background: '#ffa0fb'}
            rescheduledPresence = {background: '#ffa0fb'}
            absencePost = {background: '#ffa0fb'}
            rescheduledPresenceButton = {background: '#ffa0fb'}
            } else {
            normalPost = {background: '#fdff62'}
            presencePost = {background: '#84ff7c'}
            rescheduledPost = {background: '#ffc259'}
            rescheduledPresence = {background: '#8fb9ff'}
             absencePost = {background: '#ff3c29'}
             rescheduledPresenceButton = {background: '#8B99B8'}
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
<tbody key={list._id}>
<tr>
<td className='classLock' ><LockButton index={index} list={list} class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={normalPost} ><ColorChanger  classNum={index} list={list}   index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TableName style={normalPost} className='student-name' ><p>{list.firstName}</p><p>{list.lastName}</p></TableName>
{actualDate}
<td style={normalPost} ><PutPresenceTrue  index={index} list={list}  class_id={list._id} setPutPresence={setPutPresence} setStudentLesson={setStudentLesson} student_id={list.student_id}  class_number={list.classNumber} firstName={list.firstName} /></td>
<td style={normalPost}  ><PutAbsenceTrue  index={index} list={list}  class_id={list._id} setPutAbsence={setPutAbsence} setStudentLesson={setStudentLesson} student_id={list.student_id} class_number={list.classNumber} firstName={list.firstName}  />  </td>
{/* <td style={normalPost} ></td> */}
{/* <td style={normalPost} >
    <PutRescheduledPresenceTrue class_id={list._id} setPutRescheduledPresence={setPutRescheduledPresence} setStudentLesson={setStudentLesson} student_id={list.student_id} />
    </td> */}
{/* <td style={normalPost} ><Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
{/* <td style={normalPost} >
    
    <DeleteClass class_id={list._id} setStudentLesson={setStudentLesson}   deletePopup={deletePopup}  setDeletePopup={setDeletePopup} deleteId={deleteId}  /></td> */}

</tr>
</tbody>
                   )   } else if (!list.presence && !list.rescheduled && !list.rescheduledPresence && !list.absence && list.lockButton) {  return (
                       // ORIGIN CLASS //
                       // lOCKED //
<tbody key={list._id}>
<tr>
<td className='classLock' ><UnlockButton  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={normalPost} ><ColorChanger  classNum={index} list={list}   index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TableName style={normalPost} className='student-name' ><p>{list.firstName}</p><p>{list.lastName}</p></TableName>
{actualDate}
<td style={normalPost} ></td>
<td style={normalPost} ></td>
{/* <td style={normalPost} ></td>
<td style={normalPost} ></td> */}
{/* <td style={normalPost} ><Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
{/* <td style={normalPost} ></td> */}
</tr>
</tbody>
                   )   }  else if (list.rescheduledPresence && !list.presence && !list.lockButton) { return (
                             // RESCHEDULED PRESENCE CLASS //
                                  // UNLOCKED //
<tbody key={list._id}>
<tr>
<td className='classLock' ><LockButton  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPresence} ><ColorChanger   classNum={index} list={list}  index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TableName style={rescheduledPresence} className='student-name' ><p>{list.firstName}</p><p>{list.lastName}</p></TableName>
<TD style={rescheduledPresence} ><Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>
<TD style={rescheduledPresence} ><PresenceRescheduledPut  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson}  class_number={list.classNumber} firstName={list.firstName}  /></TD>
<td style={rescheduledPresence}><RescheduledAbsence  index={index} list={list}  class_id={list._id} setPutRescheduledPresence={setPutRescheduledPresence} setStudentLesson={setStudentLesson} student_id={list.student_id}  class_number={list.classNumber} firstName={list.firstName}  /></td>
{/* <td style={rescheduledPresence} ></td> */}
{/* <td style={rescheduledPresence} ></td> */}
{/* <td style={rescheduledPresence} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button ></Link></td> */}
{/* <td style={rescheduledPresence} ><DeleteClass class_id={list._id}  setStudentLesson={setStudentLesson}  deletePopup={deletePopup}  setDeletePopup={setDeletePopup}  /></td> */}
</tr>
</tbody>
                   ) } else if (list.rescheduledPresence && !list.presence && list.lockButton) { return (
                         // RESCHEDULED PRESENCE CLASS //
                                  // lOCKED //
<tbody key={list._id}>
<tr>
<td className='classLock' ><UnlockButton  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPresence} ><ColorChanger  classNum={index} list={list}   index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TableName style={rescheduledPresence} className='student-name' ><p>{list.firstName}</p><p>{list.lastName}</p></TableName>
<TD style={rescheduledPresence} ><Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>              
<td style={rescheduledPresence} ></td>
<td style={rescheduledPresence}></td>
{/* <TD style={rescheduledPresence} ></TD> */}
{/* <td style={rescheduledPresence} ></td> */}
{/* <td style={rescheduledPresence} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button ></Link></td> */}
{/* <td style={rescheduledPresence} ></td> */}
</tr>
</tbody>
                   )   } 
        })}
    </Table>
      </div>
  )
}
}

const TableName = styled.td/*css*/`

p {
    font-size: 20px;
    margin: 5px;
    font-weight: bold;
}
`

const Table = styled.table/*css*/`
box-shadow: 0 15px 25px rgba(0,0,0,.9);
background-color: black;
margin-right: auto;
margin-left: auto;
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
`
const TD = styled.td/*css*/`
.date-format {
    padding:0px;
    color: black ;
    font-size:15px;
    font-weight: bold;

}
`


export default UpcomingClass