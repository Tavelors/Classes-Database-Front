import React, {useEffect, useState, useCallback}from 'react'
import {deleteClass} from '../../utils/api'
import styled from 'styled-components'
const DeleteClass = ({class_id, setStudentLesson, deletePopup, setDeletePopup}) => {

  const cancelDelete = () => {
    setDeletePopup(false)
  }

  
    const deleteButton = (e) => { 
      setDeletePopup(false)
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

  return (deletePopup) ? (
<PopupStyle>

<div className="popup">
    <div className="inner-popup">
        <button onClick={cancelDelete} className="popup-button" >No</button>
        <h2 className="popup-message" >Are you sure you want to delete this</h2>
       
       
        <button onClick={deleteButton} className="popup-button" >Yes</button>
    </div>
</div>
</PopupStyle>

    ) : '';
   
}


const PopupStyle = styled.div/*css*/`
.popup {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   background-color: rgba(0,0,0, 0.2);

   display: flex;
   justify-content: center;
   align-items: center;
 
  }
  
  .popup-button {
    background-color: #90b4e8;
    color: #398CDA;
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  
  }
  .inner-popup {
      z-index: 100;
 position: fixed;
 padding: 32px;
 width: 100%;
 max-width: 640px;
 background-color: #c2d3f2;
 border-radius: 10px;
  }
  .popup-message {
    color: #398CDA
  }
`

export default DeleteClass