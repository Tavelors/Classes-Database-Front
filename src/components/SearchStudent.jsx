import React, {useEffect, useState}from 'react'
import styled from 'styled-components'
const SearchStudent = ({setStudents, students, setOldList, oldList}) => {
const [filterStudent, setfilterStudent] = useState('')


    const handleChange = (e) => {
        
        e.preventDefault()
        setStudents(oldList)
        setStudents(curr => {
            if(filterStudent === '') {
                return oldList
            }
           let newCurr = [...curr]
            let studentFilt = newCurr.filter((filt) => {
                if (filt.firstName.toLowerCase().includes(filterStudent.split('')[0].toLowerCase()) && filterStudent.length === 1) {
                    return filt
                } else if (filt.firstName.toLowerCase().includes(filterStudent.split('')[0].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[1].toLowerCase()) && filterStudent.length === 2) {
                    return filt
                } else if (filt.firstName.toLowerCase().includes(filterStudent.split('')[0].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[1].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[2].toLowerCase()) && filterStudent.length === 3) {
                    return filt
                } else if (filt.firstName.toLowerCase().includes(filterStudent.split('')[0].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[1].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[2].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[3].toLowerCase()) && filterStudent.length === 4) {
                    return filt
                } else if (filt.firstName.toLowerCase().includes(filterStudent.split('')[0].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[1].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[2].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[3].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[4].toLowerCase()) && filterStudent.length === 5) {
                    return filt
                } else if (filt.firstName.toLowerCase().includes(filterStudent.split('')[0].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[1].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[2].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[3].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[4].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[5].toLowerCase()) && filterStudent.length === 6) {
                    return filt
                } else if (filt.firstName.toLowerCase().includes(filterStudent.split('')[0].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[1].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[2].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[3].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[4].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[5].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[6].toLowerCase())) {
                    return filt
                } else if (filt.firstName.toLowerCase().includes(filterStudent.split('')[0].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[1].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[2].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[3].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[4].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[5].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[6].toLowerCase()) && filt.firstName.toLowerCase().includes(filterStudent.split('')[7].toLowerCase())) {
                    return filt
                } else if (filterStudent === '') {
                    return filt
                }
            })
      
          

             return studentFilt
            
        })
       }


      
  return (
    <div>
        <form onSubmit={handleChange} >
            <StyledInput value={filterStudent}  onChange={(e) => {
                setfilterStudent(e.target.value)
             
            }} type='text' />
            <div>

            <button>Search</button>
            </div>
        </form>
    </div>
  )
}

const StyledInput = styled.input/*css*/`
margin: 5px;
margin-top:6px;
box-shadow: 0 15px 25px rgba(0,0,0,.6);
border: 2px solid black;
background-color:  #72b3d0;
font-weight: bold;
height: 19px;
`
export default SearchStudent