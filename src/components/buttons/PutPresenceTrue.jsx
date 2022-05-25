import React, {useEffect, useState}from 'react'
import {updatePresence, updateStudentPresence} from '../../utils/api'
import styled from 'styled-components'
const PutPresenceTrue = ({class_id, setPutPresence, setStudentLesson, student_id}) => {
    // const [putPresence, setPutPresence] = useState(false)

    const presenceClick = (e) => {
      updateStudentPresence(student_id, 1)
        e.preventDefault()
        updatePresence(true, false, false, false,  class_id).then((post) => {
          setPutPresence(true)
          // console.log(post);
          setStudentLesson((curr) => {
            let newList = [...curr]
            for (let i = 0; i < newList.length; i++) {
              if(post._id === newList[i]._id) {
                  newList.splice(i,1,post)
              }
              
            }
            return newList
          })
// window.location.reload(false);
        })
        
    }
// console.log(putPresence);
  return <Button style={{background: 'red'}} onClick={presenceClick} >&nbsp;</Button>
}

const Button = styled.button/*css*/`
&:hover {
    transform: scale(1.1);
}
`

export default PutPresenceTrue