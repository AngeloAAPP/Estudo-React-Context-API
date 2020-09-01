import React, {createContext, useContext, useState} from 'react'

const courseContext = createContext({})

const CourseProvider = ({children}) => {
    const initialState = ['React JS', 'React Native', 'Node JS']

    
    const [courses, setCourses] = useState(initialState)

    function addCourse(course){
        setCourses([...courses, course])
    }

    return (
        <courseContext.Provider value = {{courses, addCourse}}>
            {children}
        </courseContext.Provider>
    )
}

export function useCourses(){
    const {courses, addCourse} = useContext(courseContext)
    
    return {courses, addCourse}
}

export default CourseProvider

