import React from 'react'
import styled from 'styled-components'
import {updateLock} from '../../utils/api'
const UnlockButton = ({index, list, class_id, setStudentLesson}) => {


const handleClick = async (e) => {
    
   
    setStudentLesson((curr) => {
        let newList = [...curr]
        list.lockButton = false
        newList.splice(index,1,list)
        
        
        
        return newList
    })  
    await updateLock(class_id, false)

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