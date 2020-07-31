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

  render() {
    console.log(this.button1)
    console.log(this.button2)

    return (
      <form>
        <Input
          input={this.input1}
          handler={this.handleAddStudentTextChange}
          value={this.state.addStudentText}
        />
        <Input
          input={this.input2}
          value={this.state.randomStudentText}
        />
      </form>
    )
  }
}

Form.propTypes = {
  buttons: PropTypes.array,
  inputs: PropTypes.array
}
