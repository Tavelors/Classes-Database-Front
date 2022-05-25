import React from 'react'
import {updateColor} from '../../utils/api'
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
 


        
      

  return <button onClick={handleClick} >{index}</button>
}

export default ColorChanger