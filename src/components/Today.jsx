import React, {useEffect, useState}from 'react'
import UpcomingClass from './UpcomingClass'
import {getTodays} from './../utils/api'
import MobileUpcomingClass from './mobile/MobileUpcomingClass'
const Today = () => {
    const [loading, setLoading] = useState(true)
    const [studentLesson, setStudentLesson] = useState([])
    useEffect(() => {
        getTodays().then((list) => {
            setLoading(false)
            setStudentLesson(list)
        })
    },[])


    if(loading) {
        return <h1 >Loading...</h1>
    } else {
  return (
    <>
    <MobileUpcomingClass studentLesson={studentLesson} setStudentLesson={setStudentLesson} />
    <UpcomingClass studentLesson={studentLesson} setStudentLesson={setStudentLesson} />
    </>
  )
}
}

export default Today