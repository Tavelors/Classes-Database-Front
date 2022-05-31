import React, {useEffect, useState, useCallback}from 'react'
import {deleteClass, postLog} from '../../utils/api'
import styled from 'styled-components'
const DeleteClass = ({class_id, setStudentLesson, deletePopup, setDeletePopup, deleteId, class_number, firstName }) => {




  
const deleteButton = (e) => { 
  e.preventDefault()
  setDeletePopup(false)
        const logNote = `Student: ${firstName}, Class: ${class_number}, Class Deleted`
         
          setStudentLesson((curr) => {
            let newList = []
            for (let i = 0; i < curr.length; i++) {
              if(curr[i]._id !== class_id) {
                  newList.push(curr[i])
              }
              
            }
            return newList
          })
          postLog(logNote)
          deleteClass(class_id)
    }
    const cancelDelete = () => {
      setDeletePopup(false)
    
    }
  return (deletePopup) ? (
<PopupStyle>

<div className="popup">
    <div className="inner-popup">
        <button onClick={cancelDelete} className="popup-button" >No</button>
        <h2 className="popup-message" >Are you sure you want to delete this</h2>
       
       
        
    </div>
</div>
</PopupStyle>

    ) :<Button onClick={deleteButton} className="popup-button" >🗑️</Button>;
   
}

const Button = styled.button/*css*/`
background-color: red;
    height:40px;
    width: 40px;
    font-size: 20px;
    transition:2s 0.2s;
    &:hover {
      transform: scale(1.1);
      transition:2s 0s;
      
  }
  :active {
    background-color: #72b340;
    // box-shadow: 5px 5px #666;
    // transform: translateY(4px);
    transform: scale(1);
    transition:0s 0s;
    
  }
`
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
  
  .delete-button {
    background-color: red;
    height:40px;
    width: 40px;
    font-size: 20px;
    &:hover {
        transform: scale(1.1);
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