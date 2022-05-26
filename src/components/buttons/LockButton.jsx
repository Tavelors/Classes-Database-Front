import React from 'react'
import styled from 'styled-components'
import {updateLock} from '../../utils/api'
const LockButton = ({class_id, setStudentLesson}) => {


const handleClick = async (e) => {
    
   const lockButton = await updateLock(class_id, true)

   setStudentLesson((curr) => {
    let newList = [...curr]
    for (let i = 0; i < newList.length; i++) {
      if(lockButton._id === newList[i]._id) {
          newList.splice(i,1,lockButton)
      }
      
    }
    return newList
  })  
}


  return  <Button onClick={handleClick} >🔒</Button>
  
}
const Button = styled.button/*css*/`
background-color: green;
&:hover {
    transform: scale(1.1);
}
`

export default LockButton