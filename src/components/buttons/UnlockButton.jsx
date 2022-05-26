import React from 'react'
import styled from 'styled-components'
import {updateLock} from '../../utils/api'
const UnlockButton = ({class_id, setStudentLesson}) => {


const handleClick = async (e) => {
    
 const unlockButton = await updateLock(class_id, false)
console.log(unlockButton);
    setStudentLesson((curr) => {
    let newList = [...curr]
    for (let i = 0; i < newList.length; i++) {
      if(unlockButton._id === newList[i]._id) {
          newList.splice(i,1,unlockButton)
      }
      
    }
    return newList
  })  

}


  return  <Button onClick={handleClick} >🗝️</Button>
  
}

const Button = styled.button/*css*/`
background-color: red;
&:hover {
    transform: scale(1.1);
}
`

export default UnlockButton