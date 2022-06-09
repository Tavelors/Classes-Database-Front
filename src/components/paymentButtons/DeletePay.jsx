import React from 'react'
import styled from 'styled-components'
import {deletePay, postLog} from '../../utils/api'
const DeletePay = ({index, list, pay_id, setPay, firstName}) => {

    const handleClick = () => {
        const logNote = `Student: ${firstName}, Payment Deleted`
        setPay(curr => {
            let newList = [...curr]
            newList.splice(index,1)
            return newList
        })
        deletePay(pay_id)
      
    }

  return (
    <Button onClick={handleClick} >🗑️</Button>
  )
}

const Button = styled.button/*css*/`
background-color: red;
    // height:40px;
    // width: 40px;
    font-size: 15px;
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
  @media screen and (max-width: 960px) {
    height:60px;
    width: 60px;
    font-size: 25px;
  }
`

export default DeletePay