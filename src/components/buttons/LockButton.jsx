// import React from 'react'
// import {Link} from 'react-router-dom'
// import styled from 'styled-components'
// import ColorChanger from './ColorChanger'
// import DatePick from './DatePick'
// import Moment from 'react-moment'
// import PutAbsenceFalse from './PutAbsenceFalse'
// import AbsenceDate from './AbsenceDate'
// import DeleteClass from './DeleteClass'
// const LockButton = ({list, absencePost, index ,setStudentLesson, setPutAbsence, student_id}) => {

//   const stuff =  <tbody key={`${list._id}${index}`}>
//       <tr key={`${list._id}${index}tr`} >
//     <td key={`${list._id}${index}td1`} className='classLock' ><button>click</button></td>
//     <td key={`${list._id}${index}td2`} style={absencePost} ><ColorChanger  index={index} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
//     <TD key={`${list._id}${index}rd3`} style={absencePost} ><DatePick class_id={list._id} setStudentLesson={setStudentLesson} /><Moment className='date-format' format='DD/MM/YYYY' >{list.classDate}</Moment></TD>
//     <td key={`${list._id}${index}td4`} style={absencePost} >
//     </td>
//     <td key={`${list._id}${index}td5`} style={absencePost} > <PutAbsenceFalse class_id={list._id} setPutAbsence={setPutAbsence} setStudentLesson={setStudentLesson} student_id={student_id} /> </td>
//     <td key={`${list._id}${index}td6`} style={absencePost} ><AbsenceDate class_id={list._id} setStudentLesson={setStudentLesson} student_id={student_id} firstName={list.firstName} lastName={list.lastName}  /><Moment className='date-format' format='DD/MM/YYYY' >{list.AbsenceDate}</Moment></td>
//     <td key={`${list._id}${index}td6`} style={absencePost} ></td>
//     <td  key={`${list._id}${index}td7`} style={absencePost} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td>
//     <td key={`${list._id}${index}td8`} style={absencePost} ><DeleteClass class_id={list._id} setStudentLesson={setStudentLesson}   /></td>
//     </tr>
//     </tbody>

// const otherStuff =  <tbody key={`${list._id}${index}4`}>
// <tr key={`tr${list._id}`} >
// <td key={`${list._id}${index}td1`} className='classLock' ><button>click</button></td>
// <td key={`${list._id}${index}td2`} style={absencePost} ><ColorChanger  index={index} class_id={list._id} colorChange={list.colorChange}  setStudentLesson={setStudentLesson} /></td>
// <TD key={`${list._id}${index}td3`} style={absencePost} ><Moment className='date-format' format='DD/MM/YYYY' >{list.classDate}</Moment></TD>
// <td key={`${list._id}${index}td4`}  style={absencePost} >
// </td>
// <td key={`${list._id}${index}td5`} style={absencePost} >  </td>
// <td key={`${list._id}${index}td6`} style={absencePost} ><Moment className='date-format' format='DD/MM/YYYY' >{list.AbsenceDate}</Moment></td>
// <td key={`${list._id}${index}td6`} style={absencePost} ></td>
// <td key={`${list._id}${index}td7`} style={absencePost} > <Link to={`/home/payment/${list._id}`}   ><button className='paymentButton' >&nbsp;</button></Link></td>
// <td key={`${list._id}${index}td8`} style={absencePost} ></td>
// </tr>
// </tbody>
//     if(!list.lockButton) {

//         return stuff 
//     } else {
//         return otherStuff
//     }

// }  




// const TD = styled.td/*css*/`
// .date-format {
//     color: ;
//     font-size:18px;

// }
// `

// export default LockButton