import React, {useEffect, useState}from 'react'
import Students from './Students'
import {getStudents} from './../utils/api'
import MobileStudents from './mobile/MobileStudents'
const StudentsPage = () => {
    const [loading, setLoading] = useState(true)
    const [students, setStudents] = useState([])
    const [oldList, setOldList] = useState([])

    useEffect(() => {
        getStudents().then((list) => {
          setLoading(false)
          setStudents(list.student)
          setOldList(list.student)
         })
      },[])
      if(loading) {
        return <h1 >Loading...</h1>
      } else {
  return (
    <>
    <Students students={students} setStudents={setStudents} oldList={oldList} setOldList={setOldList} />
    <MobileStudents students={students} setStudents={setStudents} oldList={oldList} setOldList={setOldList} />
    </>
  )
}
}
export default StudentsPage