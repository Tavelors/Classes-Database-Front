import React from 'react'
import {updateColor} from '../../utils/api'
import styled from 'styled-components'
const ColorChanger = ({index, class_id, colorChange, setStudentLesson}) => {



    const handleClick = async () => {
        let color;
        if (colorChange) {
            color = await updateColor(false, class_id)
          
            setStudentLesson((curr) => {
                let newList = [...curr]
                for (let i = 0; i < newList.length; i++) {
                  if(color._id === newList[i]._id) {
                      newList.splice(i,1,color)
                  }
                  
                }
                return newList
              })
        } else {
            color = await updateColor(true, class_id)
            setStudentLesson((curr) => {
                let newList = [...curr]
                for (let i = 0; i < newList.length; i++) {
                  if(color._id === newList[i]._id) {
                      newList.splice(i,1,color)
                  }
                  
                }
                return newList
              })
        }
    }
 


        
      

  return <Button onClick={handleClick} >{index}</Button>
}

const Button = styled.button/*css*/`
background-color: #ffa0fb;
&:hover {
    transform: scale(1.1);

}
`

export default ColorChanger