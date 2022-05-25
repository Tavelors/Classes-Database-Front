import React from 'react'
import {deleteClass} from '../../utils/api'
const DeleteClass = ({class_id, setStudentLesson}) => {

    const deleteButton = (e) => {
        deleteClass(class_id).then((post) => {
          setStudentLesson((curr) => {
            let newList = []
            for (let i = 0; i < curr.length; i++) {
              if(curr[i]._id !== class_id) {
                  newList.push(curr[i])
              }
              
            }
            return newList
          })
        })
        
    }

  return <button onClick={deleteButton} >Delete</button>
}

export default DeleteClass