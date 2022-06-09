import React from 'react'
import {postNewPayment} from '../../utils/api'
import styled from 'styled-components'
const NewPayment = ({student_id, setPay}) => {


    const handleClick = async () => {
      const payment = await postNewPayment(student_id)
            setPay(curr => [...curr, payment])
    }


  return <Button onClick={handleClick} >New Payment</Button>
}

const Button = styled.button/*css*/`
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

`

export default NewPayment