import React from 'react';
import CourseList from './components/CourseList'
import CourseProvider from './contexts/courseContext'
import InputAddCourse from './components/InputAddCourse'

function App() {
  return (
    <CourseProvider>
      <div>
        <h1>Hello </h1>
        <CourseList/>
        <InputAddCourse/>
      </div>
    </CourseProvider>
  );
}

export default App;
