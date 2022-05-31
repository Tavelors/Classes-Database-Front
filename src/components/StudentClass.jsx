import React, {useEffect, useState} from 'react'
import {getStudentClass, updateDate, postClass} from '../utils/api'
import {Link, useNavigate} from 'react-router-dom'
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
import Notes from './buttons/Notes'
import Moment from 'react-moment'
const StudentClass = ({studentLesson, setStudentLesson, student_id}) => {
    const navigate = useNavigate()
const token = localStorage.getItem("alphstains-secret-user-token");
if(!token) {
    navigate('/login')
}
    // const [studentLesson, setStudentLesson] = useState([])
    const [date, setDate] = useState("");
    const [putPresence, setPutPresence] = useState(false)
    const [putRescheduled, setPutRescheduled] = useState(false)
    const [putRescheduledPresence, setPutRescheduledPresence] = useState(false)
    const [putAbsence, setPutAbsence] = useState(false)
    const [deletePopup, setDeletePopup] = useState(false)
    const [deleteId, setDeleteId] = useState('')
    const [showDelete, setShowDelete] = useState(false)
    // const [colorChange, setColorChange] = useState(false)
    useEffect(() => {
        getStudentClass(student_id).then((res) => {
            setStudentLesson(res)
        })
        
    },[student_id, setStudentLesson])
   //❔❕



// const DeleteClass = ({class_id}) => {
//     const handleD = () => {
//         console.log(class_id);
//     }
// return <button onClick={handleD} >hi</button>
// }
   
    const handleDate = (e) => {
        e.preventDefault();
        updateDate()
        setDate(e.target.value);
      };

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
      let thDelete = <DeleteButton><button onClick={() => setShowDelete(true)} >Delete</button></DeleteButton>
      if(showDelete) {
          thDelete = <ShowButton><button onClick={() => setShowDelete(false)} >Hide</button></ShowButton>
      }
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
    <th>Notes</th>
    {/* <th>Rescheduled Presence</th> */}
    {/* <th>Payment</th> */}
    {thDelete}
    
</tr>
</thead>
        {studentLesson.map((list, index) => {
           
            let showDeleteButtons;
            let actualDate;
            let actualAbsenceDate;
            let presenceRemovealButton;
            // if(!putAbsence) {
            //     presenceRemovealButton = 
            // } 
           
            if(showDelete) {
            showDeleteButtons = <DeleteClass class_id={list._id} setStudentLesson={setStudentLesson}   deletePopup={deletePopup}  setDeletePopup={setDeletePopup} deleteId={deleteId}  class_number={list.classNumber} firstName={list.firstName}  />
            }
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
         actualDate = <TD style={normalPost} ><DatePick class_id={list._id} setStudentLesson={setStudentLesson}  class_number={list.classNumber} firstName={list.firstName}   />
         <div>Please Choose</div>
                <div>a Date</div>
        </TD>
        } else if (list.lockButton) {
            actualDate = <TD style={normalPost} >
         <Moment className='date-format' format='LL' >{list.classDate}</Moment><div>
        <Moment className='date-format' format='LT' >{list.classDate}</Moment></div></TD>
        } else {
      actualDate = <TD style={normalPost} ><DatePick class_id={list._id} setStudentLesson={setStudentLesson}  class_number={list.classNumber} firstName={list.firstName}   />
         <Moment className='date-format' format='LL' >{list.classDate}</Moment><div>
        <Moment className='date-format' format='LT' >{list.classDate}</Moment></div></TD>
        }
        if (list.lockButton && list.AbsenceDate === undefined) {
           actualAbsenceDate = <TD style={absencePost} >
               <div>Please Choose</div>
                <div>a Date</div>
           </TD>
       } else if(list.AbsenceDate === undefined) {
            actualAbsenceDate = <TD style={absencePost} ><AbsenceDate class_id={list._id} setStudentLesson={setStudentLesson} student_id={student_id} firstName={list.firstName} lastName={list.lastName} class_number={list.classNumber} />
            <div>Please Choose</div>
                <div>a Date</div></TD>
        } else if(list.lockButton) {
            actualAbsenceDate = <TD style={absencePost} ><Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>
        } else {
            actualAbsenceDate = <TD style={absencePost} ><AbsenceDate class_id={list._id} setStudentLesson={setStudentLesson} student_id={student_id} firstName={list.firstName} lastName={list.lastName} class_number={list.classNumber} /><Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>
        }
            if (!list.presence && !list.rescheduled && !list.rescheduledPresence && !list.absence && !list.lockButton) {  return (
                // ORIGIN CLASS //
                 // UNlOCKED //
<tbody key={`${list._id}${index}`}>
<tr>
<td style={normalPost} className='classLock' ><LockButton index={index} list={list} class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={normalPost} ><ColorChanger  classNum={index} list={list} index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
{actualDate}
<td style={normalPost} ><PutPresenceTrue index={index} list={list} class_id={list._id} setPutPresence={setPutPresence} setStudentLesson={setStudentLesson} student_id={student_id}  class_number={list.classNumber} firstName={list.firstName} /></td>
<td style={normalPost}  ><PutAbsenceTrue index={index} list={list} class_id={list._id} setPutAbsence={setPutAbsence} setStudentLesson={setStudentLesson} student_id={student_id} class_number={list.classNumber} firstName={list.firstName}  />  </td>
<td style={normalPost} ></td>
{/* <td style={normalPost} >
    <PutRescheduledPresenceTrue class_id={list._id} setPutRescheduledPresence={setPutRescheduledPresence} setStudentLesson={setStudentLesson} student_id={student_id} />
</td> */}
{/* <td style={normalPost} ><Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
   
<td style={normalPost} ><Link to={`/notes/${list._id}`}  ><Button></Button></Link></td>
<td style={normalPost} >
    {showDeleteButtons}
    </td>

</tr>
</tbody>
                   )   } else if (!list.presence && !list.rescheduled && !list.rescheduledPresence && !list.absence && list.lockButton) {  return (
                       // ORIGIN CLASS //
                       // lOCKED //
<tbody key={list._id}>
<tr>
<td style={normalPost} className='classLock' ><UnlockButton index={index} list={list} class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={normalPost} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
{actualDate}
<td style={normalPost} ></td>
<td style={normalPost} ></td>
<td style={normalPost} ></td>
<td style={normalPost} ><Link to={`/notes/${list._id}`}  ><Button></Button></Link></td>
<td style={normalPost} ></td>
{/* <td style={normalPost} ><Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
{/* <td style={normalPost} ></td> */}
</tr>
</tbody>
                   )   }  else if (list.presence && !list.rescheduledPresence && !list.lockButton) {  return (
                               // PRESENCE CLASS //
                                  // UNLOCKED //
<tbody key={list._id}>
<tr>
<td style={presencePost}  className='classLock' ><LockButton index={index} list={list} class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={presencePost} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={presencePost} ><Moment className='date-format' format='LL' >{list.classDate}</Moment><div><Moment className='date-format' format='LT' >{list.classDate}</Moment></div></TD>
<td style={presencePost} > <PutPresenceFalse index={index} list={list} class_id={list._id} setPutPresence={setPutPresence} setStudentLesson={setStudentLesson} student_id={student_id} class_number={list.classNumber} firstName={list.firstName}  /> </td>
<td style={presencePost} ></td>
<td style={presencePost} ></td>
<td style={presencePost} ><Link to={`/notes/${list._id}`}  ><Button></Button></Link></td>
{/* <td style={presencePost} ></td> */}
{/* <td style={presencePost} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
<td style={presencePost} >
    {/* <button className='delete-button'  onClick={handleDelete} >🗑️</button> */}
    {showDeleteButtons}</td>

</tr>
</tbody>
               )   } else if(list.presence && !list.rescheduledPresence && list.lockButton) {   return (
                              // PRESENCE CLASS //
                                  // lOCKED //
<tbody key={list._id}>
<tr>
<td style={presencePost}  className='classLock' ><UnlockButton index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={presencePost} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={presencePost} ><Moment className='date-format' format='LL' >{list.classDate}</Moment><div><Moment className='date-format' format='LT' >{list.classDate}</Moment></div></TD>
<td style={presencePost} ></td>
<td style={presencePost} ></td>
<td style={presencePost} ></td>
<td style={presencePost} ><Link to={`/notes/${list._id}`}  ><Button></Button></Link></td>
{/* <td style={presencePost} ></td> */}
{/* <td style={presencePost} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
<td style={presencePost} ></td>
</tr>
</tbody>
                )  } else if(list.rescheduled && !list.lockButton) {  return (
                             // RESCHEDULED CLASS //
                                  // UNLOCKED //
<tbody key={list._id}>
<tr>
<td  style={rescheduledPost} className='classLock' ><LockButton  index={index} list={list} class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPost} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={rescheduledPost} ><DatePick class_id={list._id} setStudentLesson={setStudentLesson}  class_number={list.classNumber} firstName={list.firstName}   /><Moment className='date-format' format='LL' >{list.classDate}</Moment><div><Moment className='date-format' format='LT' >{list.classDate}</Moment></div></TD>
<td style={rescheduledPost} ></td>
<td style={rescheduledPost} ></td>
<td style={rescheduledPost} ></td>
<td style={rescheduledPost} ><Link to={`/notes/${list._id}`}  ><Button></Button></Link></td>
{/* <td style={rescheduledPost} ></td> */}
{/* <td style={rescheduledPost} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
<td style={rescheduledPost} >
   
{showDeleteButtons}</td>
</tr>
</tbody>
                   ) 
            } else if(list.rescheduled && list.lockButton) { return (
                                // RESCHEDULED CLASS //
                                  // lOCKED //
<tbody key={list._id}>
<tr>
<td  style={rescheduledPost} className='classLock' ><UnlockButton  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPost} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={rescheduledPost} ><DatePick class_id={list._id} setStudentLesson={setStudentLesson}  class_number={list.classNumber} firstName={list.firstName}   /><Moment className='date-format' format='LL' >{list.classDate}</Moment><div><Moment className='date-format' format='LT' >{list.classDate}</Moment></div></TD>
<td style={rescheduledPost} ></td>
<td style={rescheduledPost} ></td>
<td style={rescheduledPost} ></td>
<td style={rescheduledPost} ><Link to={`/notes/${list._id}`}  ><Button></Button></Link></td>
{/* <td style={rescheduledPost} ></td> */}
{/* <td style={rescheduledPost} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
<td style={rescheduledPost} >{showDeleteButtons}</td>
</tr>
</tbody>
                   )  } else if (list.rescheduledPresence && !list.presence && !list.lockButton) { return (
                             // RESCHEDULED PRESENCE CLASS //
                                  // UNLOCKED //
<tbody key={list._id}>
<tr>
<td  style={rescheduledPresence} className='classLock' ><LockButton  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPresence} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={rescheduledPresence} ><Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>
<TD style={rescheduledPresence} ><PresenceRescheduledPut  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson}  class_number={list.classNumber} firstName={list.firstName}  /></TD>
<td style={rescheduledPresence}><RescheduledAbsence  index={index} list={list}  class_id={list._id} setPutRescheduledPresence={setPutRescheduledPresence} setStudentLesson={setStudentLesson} student_id={student_id}  class_number={list.classNumber} firstName={list.firstName}  /></td>
<td style={rescheduledPresence} ></td>
<td style={rescheduledPresence} ><Link to={`/notes/${list._id}`}  ><Button></Button></Link></td>
{/* <td style={rescheduledPresence} ></td> */}
{/* <td style={rescheduledPresence} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button ></Link></td> */}
<td style={rescheduledPresence} >{showDeleteButtons}</td>
</tr>
</tbody>
                   ) } else if (list.rescheduledPresence && !list.presence && list.lockButton) { return (
                         // RESCHEDULED PRESENCE CLASS //
                                  // lOCKED //
<tbody key={list._id}>
<tr>
<td  style={rescheduledPresence} className='classLock' ><UnlockButton  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPresence} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={rescheduledPresence} ><Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>              
<td style={rescheduledPresence} ></td>
<td style={rescheduledPresence}></td>
<TD style={rescheduledPresence} ></TD>
<td style={rescheduledPresence} ><Link to={`/notes/${list._id}`}  ><Button></Button></Link></td>
{/* <td style={rescheduledPresence} ></td> */}
{/* <td style={rescheduledPresence} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button ></Link></td> */}
<td style={rescheduledPresence} ></td>
</tr>
</tbody>
                   )   } else if (list.absence && !list.lockButton) {  return (
                             // ABSENCE CLASS //
                                  // UNLOCKED //
<tbody key={list._id}>
<tr>
<td style={absencePost} className='classLock' ><LockButton index={index} list={list} class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={absencePost} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={absencePost} ><Moment className='date-format' format='LL' >{list.classDate}</Moment><div><Moment className='date-format' format='LT' >{list.classDate}</Moment></div></TD>
<td style={absencePost} ></td>
<td style={absencePost} > <PutAbsenceFalse index={index} list={list} class_id={list._id} setPutAbsence={setPutAbsence} setStudentLesson={setStudentLesson} student_id={student_id}  class_number={list.classNumber} firstName={list.firstName}  /> </td>
{actualAbsenceDate}
<td style={absencePost} ><Link to={`/notes/${list._id}`}  ><Button></Button></Link></td>
{/* <td style={absencePost} ></td> */}
{/* <td style={absencePost} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
<td style={absencePost} >{showDeleteButtons}</td>

</tr>
</tbody>
                   )   } else if (list.absence && list.lockButton) {  return (
                             // ABSENCE CLASS //
                                  // lOCKED //
<tbody key={list._id}>
<tr>
<td style={absencePost} className='classLock' ><UnlockButton  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={absencePost} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={absencePost} ><Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>
<td style={absencePost} ></td>
<td style={absencePost} > </td>
{actualAbsenceDate}
<td style={absencePost} ><Link to={`/notes/${list._id}`}  ><Button></Button></Link></td>
{/* <td style={absencePost} ></td> */}
{/* <td style={absencePost} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
<td style={absencePost} ></td>
</tr>
</tbody>
               ) 
            } else if (list.rescheduledPresence && list.presence && !list.lockButton) {  return (
                             // RESCHEDULED PRESENCE BUTTON CLASS //
                                 // UNlOCKED //
<tbody key={list._id}>
<tr>
<td style={rescheduledPresenceButton}  className='classLock' ><LockButton  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPresenceButton} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={rescheduledPresenceButton} ><Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>
<td style={rescheduledPresenceButton} ><PresenceRescheduledPutLocked  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson}  class_number={list.classNumber} firstName={list.firstName}  /></td>
<td style={rescheduledPresenceButton} > </td>
<TD style={rescheduledPresenceButton} ><Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>
<td style={rescheduledPresenceButton} ><Link to={`/notes/${list._id}`}  ><Button></Button></Link></td>
{/* <td style={absencePost} ></td> */}
{/* <td style={absencePost} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
<td style={rescheduledPresenceButton} >{showDeleteButtons}</td>
</tr>
</tbody>
  ) 
} else  {  return (
                     // RESCHEDULED PRESENCE BUTTON CLASS //
                               // lOCKED //
<tbody key={list._id}>
<tr>
<td style={rescheduledPresenceButton}  className='classLock' ><UnlockButton  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPresenceButton} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
<TD style={rescheduledPresenceButton} ><Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>
<td style={rescheduledPresenceButton} ></td>
<td style={rescheduledPresenceButton} > </td>
<TD style={rescheduledPresenceButton} ><Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>
<td style={rescheduledPresenceButton} ><Link to={`/notes/${list._id}`}  ><Button></Button></Link></td>
{/* <td style={absencePost} ></td> */}
{/* <td style={absencePost} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td> */}
<td style={rescheduledPresenceButton} > </td>
</tr>
</tbody>
) 
}
        })}
    </Table>
      </div>
  )
}
const DeleteButton = styled.th/*css*/`
padding: 0px;
button {
    background-color:red;
    height:30px;
    width: 60px;
    font-size: 15px;
    font-weight: bold;
    transition:0.2s 0.2s;
    &:hover {
      transform: scale(1.1);
      transition:0.2s 0s;
      
    }
    :active {
    background-color: green;
    // box-shadow: 5px 5px #666;
    // transform: translateY(4px);
    transform: scale(1);
    transition:0s 0s;
    
    }
}

`
const ShowButton = styled.th/*css*/`
padding: 0px;
button {
    background-color: green;
    height:30px;
    width: 60px;
    font-size: 15px;
    font-weight: bold;
    transition:0.2s 0.2s;
    &:hover {
      transform: scale(1.1);
      transition:0.2s 0s;
      
    }
    :active {
    background-color: red;
    // box-shadow: 5px 5px #666;
    // transform: translateY(4px);
    transform: scale(1);
    transition:0s 0s;
    
    }
}

`
const Button = styled.button/*css*/`
background-color: lightblue;
height:40px;
width: 40px;
font-size: 20px;
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
`

const Table = styled.table/*css*/`
box-shadow: 0 15px 25px rgba(0,0,0,.9);
background-color: black;
margin-right: auto;
margin-left: auto;
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


export default StudentClass