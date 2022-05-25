import React, {useEffect, useState}from 'react'
import {postStudent} from '../utils/api'
const NewStudent = () => {
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')

const handleSub = (e) => {
    e.preventDefault()
    postStudent(firstName, lastName)
}

  return (
    <>
    <form onSubmit={handleSub} >
        <input type='text' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type='text' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <button>Post</button>
    </form>
    </>
  )
}

export default NewStudent