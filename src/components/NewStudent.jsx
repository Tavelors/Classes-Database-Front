import React, {useEffect, useState}from 'react'
import {postStudent} from '../utils/api'
import styled from 'styled-components'
const NewStudent = ({setStudents}) => {
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')

const handleSub = (e) => {
    e.preventDefault()
    postStudent(firstName, lastName).then((post => {
      setStudents((curr) => [post, ...curr])
    }))
}

  return (
    <StyledDiv>
    <form id={'content'} onSubmit={handleSub} >
      <h3>New student</h3>
      <div>
        <input placeholder="First Name" type='text' name='firstName' className='input' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
        <input placeholder="Last Name" type='text' name='lastName' className='search' value={lastName} onChange={(e) => setLastName(e.target.value)} />
       <div>

        <button>Post</button>
       </div>
    </form>
    </StyledDiv>
  )
}

const StyledDiv = styled.div/*css*/`
  // margin-left: auto
//   // margin-right: auto
// // justify-content: center;
// width: 300px;
// padding: 10px;
// // transform: translate(-50%, -50%);
// background: lightgreen;
//   // box-sizing: border-box;
//   border-radius: 10px;
form {
    // box-shadow: 0 15px 25px rgba(0,0,0,.6);
    // margin-left: auto;
    // margin-right: auto;
    
  }
  input {
    margin: 5px;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border: 3px solid black;
    background-color:  #72b3d0;
    font-weight: bold;
  
    // box-sizing: border-box;
  }
  h2 {
    color: black;
  }
button {
  color: black;
  font-weight: bold;
  margin: 5px;
  margin-bottom:20px;
  width: 120px;
  height: 50px;
  font-size: 15px;
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
}
`

export default NewStudent