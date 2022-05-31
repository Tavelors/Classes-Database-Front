import React from 'react'
import {updateColor} from '../../utils/api'
import styled from 'styled-components'
const ColorChanger = ({classNum,  list,index, class_id, colorChange, setStudentLesson}) => {



    const handleClick = async () => {
        
        if (colorChange) {
          
          setStudentLesson((curr) => {
            let newList = [...curr]
            list.colorChange = false
            newList.splice(classNum,1,list)
            
            
            
            return newList
          })
          await updateColor(false, class_id)
        } else {
          setStudentLesson((curr) => {
            let newList = [...curr]
          list.colorChange = true
                newList.splice(classNum,1,list)
              
            return newList
          })
          await updateColor(true, class_id)
        }
    }
 


        
      

  return <Button onClick={handleClick} >{index}</Button>
}

const Button = styled.button/*css*/`
background-color: #ffa0fb;
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

export default ColorChanger