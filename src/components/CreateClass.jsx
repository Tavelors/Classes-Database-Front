import React, {useEffect, useState} from 'react'
import {postClass} from '../utils/api'
import styled from 'styled-components'





const CreateClass = ({firstName, lastName, student_id, trigger, setTrigger, createClassButton, SetCreateClassButton, setStudentLesson}) => {

      const HandleClick = () => {

        setTrigger(false)
        if(createClassButton) {
          
          postClass(student_id).then((post) => {
            
            setStudentLesson(curr => [...curr, post])
              
            SetCreateClassButton(false)
          })
        }
        window.location.reload(false);
      }
    
    
return (trigger) ? (
    <PopupStyle>

    <div className="popup">
        <div className="inner-popup">
            <h2 className="popup-message" >Class Created!</h2>
           
           
            <button onClick={HandleClick} className="popup-button">close</button>
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

export default CreateClass