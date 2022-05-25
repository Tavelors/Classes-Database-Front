import React, {useEffect, useState}from 'react'
import {updatePresence, updateStudentBankAndPresence} from '../../utils/api'
import styled from 'styled-components'

const PutRescheduledPresenceTrue = ({class_id, setPutRescheduledPresence, setStudentLesson, student_id}) => {
    // const [putPresence, setPutPresence] = useState(false)

    const presenceClick = (e) => {
        updateStudentBankAndPresence(student_id, 1, -1)
        e.preventDefault();
        updatePresence(false, false, true, false, class_id).then((post) => {
            setPutRescheduledPresence(true)
            setStudentLesson((curr) => {
                let newList = [...curr]
                for (let i = 0; i < newList.length; i++) {
                  if(post._id === newList[i]._id) {
                      newList.splice(i,1,post)
                  }
                  
                }
                return newList
              })  
            
        })
    }
// console.log(putPresence);
  return <Button style={{background: 'red'}} onClick={presenceClick} >&nbsp;</Button>
}

const Button = styled.button/*css*/`
// height: 30px;
// width: 30px;
// border-radius: 10px;
&:hover {
    transform: scale(1.1);
}
`


export default PutRescheduledPresenceTrue

