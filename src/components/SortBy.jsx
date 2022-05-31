import React, {useEffect, useState}from 'react'
import Select, {StylesConfig} from 'react-select'
import {getSortedStudents} from '../utils/api'
import styled from 'styled-components'
const SortBy = ({setStudents}) => {
const [firstSelect, setFirstSelect] = useState('Select')
const [secondSelect, setSecondSelect] = useState('Select')
const [thirdSelect, setThirdSelect] = useState('Select')
const [showFormSubmit, setShowFormSubmit] = useState(false)
    const firstOptions = [
        {value: 'firstName', label:'Student'},
        {value: 'presence', label:'Presence'},
        {value: 'bank', label:'Bank'},
        
    ]
    const secondOptions = [
        
        {value: true, label:'Concluded'},
        {value: false, label:'ongoing'},
        {value: 'Select', label:'Default'},
        
        
    ]
    const thirdOptions = [
        {value: 'asc', label:'Ascending'},
        {value: 'desc', label:'Descending'},
        
    ]
    
// console.log({[});
    const handleSort = (e) => {
            e.preventDefault()
let querys = [firstSelect,secondSelect,thirdSelect]
        
        getSortedStudents(querys).then((list) => {
            setStudents(list)
        })
    }
    console.log(showFormSubmit);
if(!showFormSubmit) {
    return (
        <div>
        <StyledForm required onSubmit={handleSort} >
       
        <CustomSelect 
        onChange={(e) => {
            setFirstSelect(e.value)
            setShowFormSubmit(true)
        }}
        options={firstOptions}
        placeholder="Select"
        required
        
        />       
        <CustomSelect 
        onChange={(e) => {
            setSecondSelect(e.value)
            setShowFormSubmit(true)
        }}
        options={secondOptions}
        placeholder="Select"
        
        />
        <CustomSelect 
        onChange={(e) => {
            setThirdSelect(e.value)
            setShowFormSubmit(true)
        }}
        options={thirdOptions}
        placeholder="Select"
        
        />
       
        </StyledForm>
            
       
    </div>
    )
} else {

    return (
        <>
        <StyledForm required  >
        
        <CustomSelect 
        onChange={(e) => {
            setFirstSelect(e.value)
            
        }}
        options={firstOptions}
        placeholder={firstSelect}
        required
        styles={customStyles}
        />       
        <CustomSelect
        onChange={(e) => {
            setSecondSelect(e.value)
            
        }}
        options={secondOptions}
        placeholder={secondSelect}
        />
        <CustomSelect 
        onChange={(e) => {
            setThirdSelect(e.value)
            
        }}
        options={thirdOptions}
        placeholder={thirdSelect}
        />
        <button onClick={(e) => {
           e.preventDefault()
            setThirdSelect('')
            setSecondSelect('')
            setFirstSelect('')
        }} >Reset</button>  <button onClick={handleSort} >Sort</button>
        </StyledForm>
            
       
    </>
  )
}
}
const customStyles = {
 
  }
  
  const CustomSelect = styled(Select)/*css*/`
  
    .react-select-container {
        background-color: red;
    }
    .react-select__control {
        background-color: red;
    }
    .css-6j8wv5-Input {
        background-color: #72b3d0
        z-index: 1;
    }
    div {
        color: black;
    }
    .css-1s2u09g-control {
        background-color:#72b3d0;
        border: 2px solid black;
        
    }
    
}
  `

const StyledForm = styled.form/*css*/`
max-width:200px;
margin-left: auto;
margin-right: auto;
button {
    color: black;
    font-weight: bold;
    margin: 5px;
    margin-bottom:20px;
    width: 60px;
    height: 25px;
    font-size: 10px;
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

export default SortBy