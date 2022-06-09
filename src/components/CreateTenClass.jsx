import React from 'react'
import {postTenClass} from '../utils/api'
import styled from 'styled-components'
const CreateTenClass = ({firstName, student_id, trigger, setTrigger, createClasses, SetCreateClasses, setStudentLesson}) => {
    const logNote = `Student: ${firstName}, 10 Classes Created`
    const HandleClick = (e) => {
        e.preventDefault();
      setTrigger(false)
      if(createClasses) {
        
        postTenClass(student_id, logNote).then((post) => {
       
          setStudentLesson(curr => [post.classTen, post.classNine,post.classEight,post.classSeven,post.classSix,post.classFive,post.classFour,post.classThree,post.classTwo,post.classOne, ...curr])
            
          SetCreateClasses(false)
        })
      }
   
    }
  let stuff = 0
  if(stuff < 5) {
    stuff++
  }
  
return (trigger) ? (
  <PopupStyle>

  <div className="popup">
      <div className="inner-popup">
          <h2 className="popup-message" >Ten Classes Created!</h2>
         
         
          <Button onClick={HandleClick} className="popup-button">close</Button>
      </div>
  </div>
  </PopupStyle>
) : '';

}
const Button = styled.button/*css*/`

`

const PopupStyle = styled.div/*css*/`
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0, 0.4);
 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
   }
   
   .popup-button {
     background-color: #90b4e8;
     color: black;
     font-size: 2rem;
     display: inline-block;
     outline: none;
     border: 2px solid black;
     padding: 1rem 4rem;
     background-color: #72b3d0;
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
     cursor: pointer;
     z-index: 100;
   }
   .inner-popup {
       z-index: 100;
  position: fixed;
  padding: 32px;
  width: 100%;
  max-width: 300px;
  background-color: #72b3d0;
  border: 4px solid black;
   }
   .popup-message {
     color: black;
   }
 `


export default CreateTenClass

