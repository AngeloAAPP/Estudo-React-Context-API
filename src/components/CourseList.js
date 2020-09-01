import React from 'react'
import {useCourses} from '../contexts/courseContext'

const CourseList = () => {

    const {courses} = useCourses()

    return (
        <ul>
            {courses.map(course => <li key = {course}>{course}</li>)}
        </ul>
    )
}

export default CourseList
