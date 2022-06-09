import React from 'react'
import styled from 'styled-components'
import {updateLock} from '../../utils/api'
const LockButton = ({index, list, class_id, setStudentLesson}) => {


const handleClick = async (e) => {
    
    
    setStudentLesson((curr) => {
        let newList = [...curr]
        list.lockButton = true
        newList.splice(index,1,list)
        
        
        
        return newList
    })  
    await updateLock(class_id, true)
}


  return  <Button onClick={handleClick} >🔒</Button>
  
}
const Button = styled.button/*css*/`
background-color: green;
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
@media screen and (max-width: 960px) {
  height:60px;
  width: 60px;
  font-size: 25px;
}
`

export default LockButton