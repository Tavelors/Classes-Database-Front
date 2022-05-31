import React, {useEffect, useState}from 'react'
import {updatePresence} from '../../utils/api'
import styled from 'styled-components'

const PutRescheduledTrue = ({class_id, setPutRescheduled, setStudentLesson}) => {
    // const [putPresence, setPutPresence] = useState(false)

    const presenceClick = (e) => {
        e.preventDefault();
        updatePresence(false, true, false, false, class_id).then((post) => {
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
  return <Button style={{background: 'red'}} onClick={presenceClick} >&nbsp;</Button>
}

const Button = styled.button/*css*/`
height:40px;
width: 40px;
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


export default PutRescheduledTrue