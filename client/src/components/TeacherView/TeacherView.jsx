import React from 'react'
import Assignment from './Assignment.jsx'
// import AssignmentList from '../TeacherView/AssignmentList'
import EditorContainer from './EditorContainer.jsx'

function TeacherView() {
  return (
    <>
    <div>
      This will be the Teacher's view after Logging in...
      <EditorContainer/>
      <Assignment />
      </div>
    </>
  )
}

export default TeacherView