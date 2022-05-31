import React, {useEffect, useState}from 'react'
import styled from 'styled-components'
const SearchStudent = ({setStudents, students, setOldList, oldList}) => {
const [filterStudent, setfilterStudent] = useState('')


    const handleChange = (e) => {
        
        e.preventDefault()
        console.log(filterStudent);
        setStudents(oldList)
        setStudents(curr => {
            
           let newCurr = [...curr]
            let studentFilt = newCurr.filter((filt) => {

                if (filt.firstName.toLowerCase().includes(filterStudent.split('')[0]) && filterStudent.length === 1) {
                    return filt
                } else if (filt.firstName.toLowerCase().includes(filterStudent.split('')[0]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[1]) && filterStudent.length === 2) {
                    return filt
                } else if (filt.firstName.toLowerCase().includes(filterStudent.split('')[0]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[1]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[2]) && filterStudent.length === 3) {
                    return filt
                } else if (filt.firstName.toLowerCase().includes(filterStudent.split('')[0]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[1]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[2]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[3]) && filterStudent.length === 4) {
                    return filt
                } else if (filt.firstName.toLowerCase().includes(filterStudent.split('')[0]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[1]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[2]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[3]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[4]) && filterStudent.length === 5) {
                    return filt
                } else if (filt.firstName.toLowerCase().includes(filterStudent.split('')[0]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[1]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[2]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[3]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[4]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[5]) && filterStudent.length === 6) {
                    return filt
                } else if (filt.firstName.toLowerCase().includes(filterStudent.split('')[0]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[1]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[2]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[3]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[4]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[5]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[6])) {
                    return filt
                } else if (filt.firstName.toLowerCase().includes(filterStudent.split('')[0]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[1]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[2]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[3]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[4]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[5]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[6]) && filt.firstName.toLowerCase().includes(filterStudent.split('')[7])) {
                    return filt
                } else if (filterStudent === '') {
                    return filt
                }
            })
         //    console.log(studentFilt);
         if(filterStudent === '') {
             return oldList
         } else {

             return studentFilt
            }
        })
       }

    //   console.log(oldList);
      
  return (
    <div>
        <form onSubmit={handleChange} >
            <StyledInput value={filterStudent}  onChange={(e) => {
                setfilterStudent(e.target.value)
                // setStudents(oldList)
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