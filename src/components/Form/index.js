import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './Button'
import { Input } from './Input'

export class Form extends React.Component {
  state = {
    addStudentText: '',
    randomStudentText: '',
    students: []
  }

  input1 = this.props.inputs[0]
  input2 = this.props.inputs[1]
  button1 = this.props.buttons[0]
  button2 = this.props.buttons[1]

  handleAddStudentTextChange = (e) => {
    this.setState({ addStudentText: e.target.value })
  }

  handleAddStudentBtnClick = (e) => {
    e.preventDefault()
    // Add text from input to students[] and reset input field
    this.setState({ addStudentText: '', students: [...this.state.students, this.state.addStudentText] })
  }

  handleRandomStudentBtnClick = (e) => {
    e.preventDefault()
    if (this.state.students.length > 0) {
      // Grab random element from state.students
      const student = this.state.students[Math.floor(Math.random() * this.state.students.length)]
      // Update random input with that text
      this.setState({ randomStudentText: student })
      // Update input object
      this.input2 = { ...this.input2, value: this.randomStudentText }
    } else {
      this.setState({ randomStudentText: 'No students yet!' })
    }
  }

  render() {

    return (
      <form>
        <Input
          htmlFor={this.input1.htmlFor}
          label={this.input1.label}
          placeholder={this.input1.placeholder}
          handler={this.handleAddStudentTextChange}
          value={this.state.addStudentText}
        />
        <Button
          buttonText={this.button1.buttonText}
          handler={this.handleAddStudentBtnClick}
        />
        <Input
          disabled={this.input2.disabled}
          htmlFor={this.input2.htmlFor}
          label={this.input2.label}
          placeholder={this.input2.placeholder}
          value={this.state.randomStudentText}
        />
        <Button
          buttonText={this.button2.buttonText}
          handler={this.handleRandomStudentBtnClick}
        />
      </form>
    )
  }
}

Form.propTypes = {
  buttons: PropTypes.array,
  inputs: PropTypes.array
}
