import React, {useEffect, useState}from 'react'
import {updatePresence} from '../../utils/api'
import styled from 'styled-components'

const PutRescheduledFalse = ({class_id, setPutRescheduled, setStudentLesson}) => {
    // const [putPresence, setPutPresence] = useState(false)

    const presenceClick = (e) => {
        e.preventDefault();
        updatePresence(false, false, false, false, class_id).then((post) => {
            setPutRescheduled(false)
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
  return <Button style={{background: 'green'}} onClick={presenceClick} >&nbsp;</Button>
}

const Button = styled.button/*css*/`
height:40px;
width: 40px;
&:hover {
    transform: scale(1.1);
}
`


export default PutRescheduledFalse