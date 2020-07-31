import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button } from './Button'
import { Input } from './Input'

import './Form.css'

export const Form = (props) => {
  const [addStudentText, setAddStudentText] = useState('')
  const [randomStudentText, setRandomStudentText] = useState('')
  const [students, setStudents] = useState([])

  let input1 = props.inputs[0]
  let input2 = props.inputs[1]
  const button1 = props.buttons[0]
  const button2 = props.buttons[1]

  const handleAddStudentTextChange = (e) => {
    setAddStudentText(e.target.value)
  }

  const handleAddStudentBtnClick = (e) => {
    e.preventDefault()
    // Add text from input to students[] and reset input field
    setAddStudentText('')
    setStudents([...students, addStudentText])
  }

  const handleRandomStudentBtnClick = (e) => {
    e.preventDefault()
    if (students.length > 0) {
      // Grab random element from state.students
      const student = students[Math.floor(Math.random() * students.length)]
      // Update random input with that text
      setRandomStudentText(student)
      // Update input object
      input2 = { ...input2, value: randomStudentText }
    } else {
      setRandomStudentText('No students yet!')
    }
  }


  return (
    <form>
      <h1>Random Student Selector</h1>
      <Input
        htmlFor={input1.htmlFor}
        label={input1.label}
        placeholder={input1.placeholder}
        handler={handleAddStudentTextChange}
        value={addStudentText}
      />
      <Button
        buttonText={button1.buttonText}
        className={button1.className}
        handler={handleAddStudentBtnClick}
      />
      <Input
        disabled={input2.disabled}
        htmlFor={input2.htmlFor}
        label={input2.label}
        placeholder={input2.placeholder}
        value={randomStudentText}
      />
      <Button
        buttonText={button2.buttonText}
        className={button2.className}
        handler={handleRandomStudentBtnClick}
      />
    </form>
  )
}

Form.propTypes = {
  buttons: PropTypes.array,
  inputs: PropTypes.array
}
