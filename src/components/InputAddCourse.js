import React, {useState} from 'react'
import {useCourses} from '../contexts/courseContext'

const InputAddCourse = () => {
    const [input, setInput] = useState("")
    const {addCourse} = useCourses()

    return (
        <>
            <input value = {input} onChange = {(e) => setInput(e.target.value)}/>
            <button onClick = {() => addCourse(input)}>Adicionar Curso</button>
        </>
    )
}

export default InputAddCourse
