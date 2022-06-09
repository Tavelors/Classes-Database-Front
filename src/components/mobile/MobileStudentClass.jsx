import React, {useEffect, useState} from 'react'
import {getStudentClass, updateDate, postClass} from '../../utils/api'
import {Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import PutPresenceTrue from './../buttons/PutPresenceTrue'
import PutPresenceFalse from './../buttons/PutPresenceFalse'
import PresenceRescheduledPutLocked from './../buttons/PresenceRescheduledPutLocked'
import RescheduledAbsence from './../buttons/RescheduledAbsence'
import PresenceRescheduledPut from './../buttons/PresenceRescheduledPut'
import PutAbsenceTrue from './../buttons/PutAbsenceTrue'
import PutAbsenceFalse from './../buttons/PutAbsenceFalse'
import ColorChanger from './../buttons/ColorChanger'
import DatePick from './../buttons/DatePick'
import LockButton from './../buttons/LockButton'
import UnlockButton from './../buttons/UnlockButton'
import AbsenceDate from './../buttons/AbsenceDate'
import DeleteClass from './../buttons/DeleteClass'
import Notes from './../buttons/Notes'
import Moment from 'react-moment'
const MobileStudentClass = ({studentLesson, setStudentLesson, student_id}) => {
    const navigate = useNavigate()
const token = localStorage.getItem("alphstains-secret-user-token");
if(!token) {
    navigate('/login')
}

    const [date, setDate] = useState("");
    const [putPresence, setPutPresence] = useState(false)
    const [putRescheduled, setPutRescheduled] = useState(false)
    const [putRescheduledPresence, setPutRescheduledPresence] = useState(false)
    const [putAbsence, setPutAbsence] = useState(false)
    const [deletePopup, setDeletePopup] = useState(false)
    const [deleteId, setDeleteId] = useState('')
    const [showDelete, setShowDelete] = useState(false)

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
    

        {studentLesson.map((list, index) => {
           
            let showDeleteButtons;
            let actualDate;
            let actualDateText;
            let actualAbsenceDate;
            let actualAbsenceDateText;

            if(showDelete) {
            showDeleteButtons = <DeleteClass  class_id={list._id} setStudentLesson={setStudentLesson}   deletePopup={deletePopup}  setDeletePopup={setDeletePopup} deleteId={deleteId}  class_number={list.classNumber} firstName={list.firstName}  />
            } else {
                showDeleteButtons = <Link to={`/notes/${list._id}`}  ><Button>Notes</Button></Link>
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
         actualDate = <TD style={normalPost} >
             <DatePick class_id={list._id} setStudentLesson={setStudentLesson}  class_number={list.classNumber} firstName={list.firstName}   />
        </TD>;
       actualDateText = <TD style={normalPost} >
         <div>Please Choose</div>
                <div>a Date</div>
                </TD>;
        } else if (list.lockButton) {
            actualDate = <TD style={normalPost} >
         <Moment className='date-format' format='LL' >{list.classDate}</Moment><div>
        <Moment className='date-format' format='LT' >{list.classDate}</Moment></div></TD>
        actualDateText = <TD style={normalPost} >
        <Moment className='date-format' format='LL' >{list.classDate}</Moment><div>
       <Moment className='date-format' format='LT' >{list.classDate}</Moment></div></TD>
        } else {
      actualDate = <TD style={normalPost} ><DatePick class_id={list._id} setStudentLesson={setStudentLesson}  class_number={list.classNumber} firstName={list.firstName}   />
        </TD>;
    actualDateText = <TD style={normalPost} >
             <Moment className='date-format' format='LL' >{list.classDate}</Moment><div>
        <Moment className='date-format' format='LT' >{list.classDate}</Moment></div>
        </TD>
        }
        if (list.lockButton && list.AbsenceDate === undefined) {
           actualAbsenceDate = <TD style={absencePost} >
               <div>Please Choose</div>
                <div>a Date</div>
           </TD>
       } else if(list.AbsenceDate === undefined) {
            actualAbsenceDate = <TD style={absencePost} ><AbsenceDate class_id={list._id} setStudentLesson={setStudentLesson} student_id={student_id} firstName={list.firstName} lastName={list.lastName} class_number={list.classNumber} />
            </TD>;
          actualAbsenceDateText = <TD style={absencePost} > <div>Please Choose</div>
                <div>a Date</div></TD>
        } else if(list.lockButton) {
            actualAbsenceDate = <TD style={absencePost} >
                <h2>Rescheduled</h2>
                <Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>
        } else {
            actualAbsenceDate = <TD style={absencePost} ><AbsenceDate class_id={list._id} setStudentLesson={setStudentLesson} student_id={student_id} firstName={list.firstName} lastName={list.lastName} class_number={list.classNumber} /></TD>
            actualAbsenceDateText = <TD style={absencePost} >
                <h2>Rescheduled</h2>
                <Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>
        }
            if (!list.presence && !list.rescheduled && !list.rescheduledPresence && !list.absence && !list.lockButton) {  return (
                // ORIGIN CLASS //
                 // UNlOCKED //
<Table key={`${list._id}${index}`}>
    <tbody>

<tr>
<td style={normalPost} className='classLock' ><LockButton index={index} list={list} class_id={list._id} setStudentLesson={setStudentLesson} /></td>

<td style={normalPost} ><ColorChanger  classNum={index} list={list} index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
</tr>
<tr>
{actualDate}
{actualDateText}
</tr>
<tr>
<td style={normalPost} ><PutPresenceTrue index={index} list={list} class_id={list._id} setPutPresence={setPutPresence} setStudentLesson={setStudentLesson} student_id={student_id}  class_number={list.classNumber} firstName={list.firstName} /></td>
<td style={normalPost}  ><PutAbsenceTrue index={index} list={list} class_id={list._id} setPutAbsence={setPutAbsence} setStudentLesson={setStudentLesson} student_id={student_id} class_number={list.classNumber} firstName={list.firstName}  />  </td>
</tr>
<tr style={normalPost} >
   
  {thDelete}   
    <td style={normalPost} >{showDeleteButtons}</td>

</tr>
<tr>
</tr>
    </tbody>
</Table>
                   )   } else if (!list.presence && !list.rescheduled && !list.rescheduledPresence && !list.absence && list.lockButton) {  return (
                       // ORIGIN CLASS //
                       // lOCKED //
<Table key={list._id}>
    <tbody>

<tr>
<td style={normalPost} className='classLock' ><UnlockButton index={index} list={list} class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={normalPost} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
</tr>
<tr>
{actualDateText}
<td style={normalPost} ><Link to={`/notes/${list._id}`}  ><Button>Notes</Button></Link></td>
</tr>
    </tbody>

</Table>
                   )   }  else if (list.presence && !list.rescheduledPresence && !list.lockButton) {  return (
                               // PRESENCE CLASS //
                                  // UNLOCKED //
<Table key={list._id}>
    <tbody>

<tr>
<td style={presencePost}  className='classLock' ><LockButton index={index} list={list} class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={presencePost} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
</tr>
<tr>
<TD style={presencePost} ><Moment className='date-format' format='LL' >{list.classDate}</Moment><div><Moment className='date-format' format='LT' >{list.classDate}</Moment></div></TD>
<td style={presencePost} > <PutPresenceFalse index={index} list={list} class_id={list._id} setPutPresence={setPutPresence} setStudentLesson={setStudentLesson} student_id={student_id} class_number={list.classNumber} firstName={list.firstName}  /> </td>
</tr>
<tr style={presencePost} >  
    {thDelete}  
   
    <td style={presencePost} >{showDeleteButtons}</td>
</tr>
    </tbody>


</Table>
               )   } else if(list.presence && !list.rescheduledPresence && list.lockButton) {   return (
                              // PRESENCE CLASS //
                                  // lOCKED //
<Table key={list._id}>
    <tbody>

<tr>
<td style={presencePost}  className='classLock' ><UnlockButton index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={presencePost} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
</tr>
<tr>
<TD style={presencePost} ><Moment className='date-format' format='LL' >{list.classDate}</Moment><div><Moment className='date-format' format='LT' >{list.classDate}</Moment></div></TD>
<td style={presencePost} ><Link to={`/notes/${list._id}`}  ><Button>Notes</Button></Link></td>
</tr>
    </tbody>


</Table>
                )  } else if (list.rescheduledPresence && !list.presence && !list.lockButton) { return (
                             // RESCHEDULED PRESENCE CLASS //
                                  // UNLOCKED //
<Table key={list._id}>
    <tbody>

<tr>
<td  style={rescheduledPresence} className='classLock' ><LockButton  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPresence} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
</tr>
<tr>
<TD style={rescheduledPresence} ><Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>
<td style={rescheduledPresence} ></td>
</tr>
<tr>
<TD style={rescheduledPresence} ><PresenceRescheduledPut  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson}  class_number={list.classNumber} firstName={list.firstName}  /></TD>
<td style={rescheduledPresence}><RescheduledAbsence  index={index} list={list}  class_id={list._id} setPutRescheduledPresence={setPutRescheduledPresence} setStudentLesson={setStudentLesson} student_id={student_id}  class_number={list.classNumber} firstName={list.firstName}  /></td>
</tr>

<tr style={rescheduledPresence} > 

    {thDelete}  
   
    <td style={rescheduledPresence} >{showDeleteButtons}</td>

</tr>

    </tbody>
</Table>
                   ) } else if (list.rescheduledPresence && !list.presence && list.lockButton) { return (
                         // RESCHEDULED PRESENCE CLASS //
                                  // lOCKED //
<Table key={list._id}>
    <tbody>

<tr>
<td  style={rescheduledPresence} className='classLock' ><UnlockButton  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPresence} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
</tr>
<tr>
<TD style={rescheduledPresence} ><Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>              
<td style={rescheduledPresence} ><Link to={`/notes/${list._id}`}  ><Button>Notes</Button></Link></td>
</tr>

    </tbody>
</Table>
                   )   } else if (list.absence && !list.lockButton) {  return (
                             // ABSENCE CLASS //
                                  // UNLOCKED //
<Table key={list._id}>
    <tbody>

<tr>
<td style={absencePost} className='classLock' ><LockButton index={index} list={list} class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={absencePost} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
</tr>
<tr>
<TD style={absencePost} ><Moment className='date-format' format='LL' >{list.classDate}</Moment><div><Moment className='date-format' format='LT' >{list.classDate}</Moment></div></TD>
<td style={absencePost} > <PutAbsenceFalse index={index} list={list} class_id={list._id} setPutAbsence={setPutAbsence} setStudentLesson={setStudentLesson} student_id={student_id}  class_number={list.classNumber} firstName={list.firstName}  /> </td>
</tr>
<tr>
{actualAbsenceDate}
{actualAbsenceDateText}
</tr>
<tr style={absencePost} >

    {thDelete}  

    <td style={absencePost} >{showDeleteButtons}</td>

</tr>
    </tbody>
</Table>
                   )   } else if (list.absence && list.lockButton) {  return (
                             // ABSENCE CLASS //
                                  // lOCKED //
<Table key={list._id}>
    <tbody>

<tr>
<td style={absencePost} className='classLock' ><UnlockButton  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={absencePost} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
</tr>
<tr>
{actualAbsenceDate}
<td style={absencePost} ><Link to={`/notes/${list._id}`}  ><Button>Notes</Button></Link></td>
</tr>

    </tbody>
</Table>
               ) 
            } else if (list.rescheduledPresence && list.presence && !list.lockButton) {  return (
                             // RESCHEDULED PRESENCE BUTTON CLASS //
                                 // UNlOCKED //
<Table key={list._id}>
    <tbody>

<tr>
<td style={rescheduledPresenceButton}  className='classLock' ><LockButton  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPresenceButton} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
</tr>
<tr>
<TD style={rescheduledPresenceButton} ><Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>
<td style={rescheduledPresenceButton} ><PresenceRescheduledPutLocked  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson}  class_number={list.classNumber} firstName={list.firstName}  /></td>
</tr>
<tr style={rescheduledPresenceButton} >
 {thDelete} 
    <td style={rescheduledPresenceButton} >{showDeleteButtons}</td>
</tr>
    </tbody>
</Table>
  ) 
} else  {  return (
                     // RESCHEDULED PRESENCE BUTTON CLASS //
                               // lOCKED //
<Table key={list._id}>
    <tbody>

<tr>
<td style={rescheduledPresenceButton}  className='classLock' ><UnlockButton  index={index} list={list}  class_id={list._id} setStudentLesson={setStudentLesson} /></td>
<td style={rescheduledPresenceButton} ><ColorChanger  classNum={index} list={list}    index={list.classNumber} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
</tr>
<tr>
<TD style={rescheduledPresenceButton} ><Moment className='date-format' format='LL' >{list.AbsenceDate}</Moment><div><Moment className='date-format' format='LT' >{list.AbsenceDate}</Moment></div></TD>
<td style={rescheduledPresenceButton} ><Link to={`/notes/${list._id}`}  ><Button>Notes</Button></Link></td>
</tr>
    </tbody>
</Table>
) 
}
        })}
    
      </div>
  )
}
const DeleteButton = styled.td/*css*/`
padding: 0px;

button {
    
    background-color:red;
    height:60px;
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
const ShowButton = styled.td/*css*/`
padding: 0px;
button {
    background-color: green;
    height:60px;
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
height:60px;
width: 60px;
font-size: 10px;
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
margin-bottom: 40px;
@media screen and (min-width: 960px) {
    display:none;
}
td {
    width: 100px;
    height: 100px;
}
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
@media screen and (max-width: 960px) {
   
 tr th {
     background-color: transparent;
     padding-left: 13.5px;
    //  max-width: 70px;
     font-size: 13px;
 }
}
  }
`
const TD = styled.td/*css*/`
font-size: 15px;
div {
    font-size: 15px;
    font-weight: bold;
}
.date-format {
    padding:0px;
    color: black ;
    font-size:20px;
    font-weight: bold;

}
@media screen and (max-width: 960px) {
  
 font-size:12px;
   }
`


export default MobileStudentClass