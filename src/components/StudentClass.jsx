import React, {useEffect, useState} from 'react'
import {getStudentClass, updateDate, postClass} from '../utils/api'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import PutPresenceTrue from './buttons/PutPresenceTrue'
import PutPresenceFalse from './buttons/PutPresenceFalse'
import PutRescheduledTrue from './buttons/PutRescheduledTrue'
import PutRescheduledFalse from './buttons/PutRescheduledFalse'
import PutRescheduledPresenceTrue from './buttons/PutRescheduledPresenceTrue'
import PutRescheduledPresenceFalse from './buttons/PutRescheduledPresenceFalse'
import RescheduledAbsence from './buttons/RescheduledAbsence'
import PutAbsenceTrue from './buttons/PutAbsenceTrue'
import PutAbsenceFalse from './buttons/PutAbsenceFalse'
import ColorChanger from './buttons/ColorChanger'
import DatePick from './buttons/DatePick'
import LockButton from './buttons/LockButton'
import UnlockButton from './buttons/UnlockButton'
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
    const [deletePopup, setDeletePopup] = useState(false)
    // const [colorChange, setColorChange] = useState(false)
    useEffect(() => {
        getStudentClass(student_id).then((res) => {
            setStudentLesson(res)
        })
        
    },[student_id, setStudentLesson])
   //❔❕
    const handleDate = (e) => {
        e.preventDefault();
        updateDate()
        setDate(e.target.value);
      };

      const handleDelete = () => {
        setDeletePopup(true)
      }
      let normalPost;
      let presencePost;
      let rescheduledPost;
      let rescheduledPresence;
      let absencePost;
  
    //   const handleClick = async () => {
        
    //   const post = await postClass(student_id)
            
    //         setStudentLesson(curr => [...curr, post])

    //   }
     
  return (
      <div>
          {/* <button onClick={handleClick} >create</button> */}
    <Table>
         <thead>
<tr>
    <th>Lock</th>
    <th>Class</th>
    <th>Class Date</th>
    <th>Presence</th>
    <th>Absence</th>
    <th>Rescheduled</th>
    <th>Rescheduled Presence</th>
    {/* <th>Payment</th> */}
    <th>Delete</th>
</tr>
</thead>
        {studentLesson.map((list, index) => {
            index++
            if(list.colorChange) {
            normalPost = {background: '#ffa0fb'}
            presencePost = {background: '#ffa0fb'}
            rescheduledPost = {background: '#ffa0fb'}
            rescheduledPresence = {background: '#ffa0fb'}
            absencePost = {background: '#ffa0fb'}
            } else {
            normalPost = {background: '#fdff62'}
            presencePost = {background: '#84ff7c'}
            rescheduledPost = {background: '#ffc259'}
            rescheduledPresence = {background: '#8fb9ff'}
             absencePost = {background: '#ff3c29'}
            }
            if (!list.presence && !list.rescheduled && !list.rescheduledPresence && !list.absence && !list.lockButton) {  return (
<tbody key={list._id}>
<tr>
<td className='classLock' ><LockButton class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={normalPost} ><ColorChanger  index={index} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={normalPost} ><DatePick class_id={list._id} setStudentLesson={setStudentLesson} /><Moment className='date-format' format='DD/MM/YYYY' >{list.classDate}</Moment></TD>
<td style={normalPost} ><PutPresenceTrue class_id={list._id} setPutPresence={setPutPresence} setStudentLesson={setStudentLesson} student_id={student_id} /></td>
<td style={normalPost}  ><PutAbsenceTrue class_id={list._id} setPutAbsence={setPutAbsence} setStudentLesson={setStudentLesson} student_id={student_id}  />  </td>
<td style={normalPost} ></td>
<td style={normalPost} >
    <PutRescheduledPresenceTrue class_id={list._id} setPutRescheduledPresence={setPutRescheduledPresence} setStudentLesson={setStudentLesson} student_id={student_id} />
    </td>
{/* <td style={normalPost} ><Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
<td style={normalPost} ><button onClick={handleDelete} >Delete</button><DeleteClass class_id={list._id} setStudentLesson={setStudentLesson}   deletePopup={deletePopup}  setDeletePopup={setDeletePopup}  /></td>
</tr>
</tbody>
                   )   } else if (!list.presence && !list.rescheduled && !list.rescheduledPresence && !list.absence && list.lockButton) {  return (
<tbody key={list._id}>
<tr>
<td className='classLock' ><UnlockButton class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={normalPost} ><ColorChanger  index={index} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={normalPost} ><Moment className='date-format' format='DD/MM/YYYY' >{list.classDate}</Moment></TD>
<td style={normalPost} ></td>
<td style={normalPost} ></td>
<td style={normalPost} ></td>
<td style={normalPost} ></td>
{/* <td style={normalPost} ><Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
<td style={normalPost} ></td>
</tr>
</tbody>
                   )   }  else if (list.presence && !list.lockButton) {  return (
<tbody key={list._id}>
<tr>
<td className='classLock' ><LockButton class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={presencePost} ><ColorChanger  index={index} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={presencePost} ><DatePick class_id={list._id} setStudentLesson={setStudentLesson} /><Moment className='date-format' format='DD/MM/YYYY' >{list.classDate}</Moment></TD>
<td style={presencePost} > <PutPresenceFalse class_id={list._id} setPutPresence={setPutPresence} setStudentLesson={setStudentLesson} student_id={student_id} /> </td>
<td style={presencePost} ></td>
<td style={presencePost} ></td>
<td style={presencePost} ></td>
{/* <td style={presencePost} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
<td style={presencePost} ><button onClick={handleDelete} >Delete</button><DeleteClass class_id={list._id} setStudentLesson={setStudentLesson}   deletePopup={deletePopup}  setDeletePopup={setDeletePopup}  /></td>
</tr>
</tbody>
               )   } else if(list.presence && list.lockButton) {   return (
<tbody key={list._id}>
<tr>
<td className='classLock' ><UnlockButton class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={presencePost} ><ColorChanger  index={index} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={presencePost} ><Moment className='date-format' format='DD/MM/YYYY' >{list.classDate}</Moment></TD>
<td style={presencePost} ></td>
<td style={presencePost} ></td>
<td style={presencePost} ></td>
<td style={presencePost} ></td>
{/* <td style={presencePost} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
<td style={presencePost} ></td>
</tr>
</tbody>
                )  } else if(list.rescheduled && !list.lockButton) {  return (
<tbody key={list._id}>
<tr>
<td className='classLock' ><LockButton class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPost} ><ColorChanger  index={index} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={rescheduledPost} ><DatePick class_id={list._id} setStudentLesson={setStudentLesson} /><Moment className='date-format' format='DD/MM/YYYY' >{list.classDate}</Moment></TD>
<td style={rescheduledPost} ></td>
<td style={rescheduledPost} ></td>
<td style={rescheduledPost} ></td>
<td style={rescheduledPost} ></td>
{/* <td style={rescheduledPost} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
<td style={rescheduledPost} ><button onClick={handleDelete} >Delete</button><DeleteClass class_id={list._id}  setStudentLesson={setStudentLesson}  deletePopup={deletePopup}  setDeletePopup={setDeletePopup}  /></td>
</tr>
</tbody>
                   ) 
            } else if(list.rescheduled && list.lockButton) { return (
<tbody key={list._id}>
<tr>
<td className='classLock' ><UnlockButton class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPost} ><ColorChanger  index={index} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={rescheduledPost} ><DatePick class_id={list._id} setStudentLesson={setStudentLesson} /><Moment className='date-format' format='DD/MM/YYYY' >{list.classDate}</Moment></TD>
<td style={rescheduledPost} ></td>
<td style={rescheduledPost} ></td>
<td style={rescheduledPost} ></td>
<td style={rescheduledPost} ></td>
{/* <td style={rescheduledPost} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
<td style={rescheduledPost} ><DeleteClass class_id={list._id}  setStudentLesson={setStudentLesson}  deletePopup={deletePopup}  setDeletePopup={setDeletePopup}  /></td>
</tr>
</tbody>
                   )  } else if (list.rescheduledPresence && !list.lockButton) { return (
<tbody key={list._id}>
<tr>
<td className='classLock' ><LockButton class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPresence} ><ColorChanger  index={index} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={rescheduledPresence} ><Moment className='date-format' format='DD/MM/YYYY' >{list.AbsenceDate}</Moment></TD>
<TD style={rescheduledPresence} ></TD>
<td style={rescheduledPresence}><RescheduledAbsence class_id={list._id} setPutRescheduledPresence={setPutRescheduledPresence} setStudentLesson={setStudentLesson} student_id={student_id} /></td>
<td style={rescheduledPresence} ></td>
<td style={rescheduledPresence} >
</td>
{/* <td style={rescheduledPresence} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button ></Link></td> */}
<td style={rescheduledPresence} ><button onClick={handleDelete} >Delete</button><DeleteClass class_id={list._id}  setStudentLesson={setStudentLesson}  deletePopup={deletePopup}  setDeletePopup={setDeletePopup}  /></td>
</tr>
</tbody>
                   ) } else if (list.rescheduledPresence && list.lockButton) { return (
<tbody key={list._id}>
<tr>
<td className='classLock' ><UnlockButton class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPresence} ><ColorChanger  index={index} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={rescheduledPresence} ></TD>              
<td style={rescheduledPresence} ></td>
<td style={rescheduledPresence}></td>
<TD style={rescheduledPresence} ><Moment className='date-format' format='DD/MM/YYYY' >{list.AbsenceDate}</Moment></TD>
<td style={rescheduledPresence} ></td>
{/* <td style={rescheduledPresence} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button ></Link></td> */}
<td style={rescheduledPresence} ></td>
</tr>
</tbody>
                   )   } else if (list.absence && !list.lockButton) {  return (
<tbody key={list._id}>
<tr>
<td className='classLock' ><LockButton class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={absencePost} ><ColorChanger  index={index} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={absencePost} ><DatePick class_id={list._id} setStudentLesson={setStudentLesson} /><Moment className='date-format' format='DD/MM/YYYY' >{list.classDate}</Moment></TD>
<td style={absencePost} ></td>
<td style={absencePost} > <PutAbsenceFalse class_id={list._id} setPutAbsence={setPutAbsence} setStudentLesson={setStudentLesson} student_id={student_id} /> </td>
<TD style={absencePost} ><AbsenceDate class_id={list._id} setStudentLesson={setStudentLesson} student_id={student_id} firstName={list.firstName} lastName={list.lastName}  /><Moment className='date-format' format='DD/MM/YYYY' >{list.AbsenceDate}</Moment></TD>
<td style={absencePost} ></td>
{/* <td style={absencePost} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
<td style={absencePost} ><button onClick={handleDelete} >Delete</button><DeleteClass class_id={list._id} setStudentLesson={setStudentLesson}  deletePopup={deletePopup}  setDeletePopup={setDeletePopup}   /></td>
</tr>
</tbody>
                   )   } else {  return (
<tbody key={list._id}>
<tr>
<td className='classLock' ><UnlockButton class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={absencePost} ><ColorChanger  index={index} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={absencePost} ><Moment className='date-format' format='DD/MM/YYYY' >{list.classDate}</Moment></TD>
<td style={absencePost} ></td>
<td style={absencePost} > </td>
<TD style={absencePost} ><Moment className='date-format' format='DD/MM/YYYY' >{list.AbsenceDate}</Moment></TD>
<td style={absencePost} ></td>
{/* <td style={absencePost} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
<td style={absencePost} ></td>
</tr>
</tbody>
               ) 
            }
        })}
    </Table>
      </div>
  )
}

const StyledDiv = styled.div/*css*/`

justify-content:center;
`

const Table = styled.table/*css*/`
background-color: black;
margin-right: auto;
margin-left: auto;
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
    color: black ;
    font-size:18px;
    font-weight: bold;

}
`


export default StudentClass