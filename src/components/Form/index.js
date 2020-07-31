import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './Button'
import { Input } from './Input'

export class Form extends React.Component {
  constructor(props) {
    super(props)
    // Will need to bind methods here
  }

  input1 = this.props.inputs[0]
  input2 = this.props.inputs[1]
  button1 = this.props.buttons[0]
  button2 = this.props.buttons[1]

  render() {
    console.log(this.button1)
    console.log(this.button2)

    return (
      <form>
        <Input input={this.input1} />
        <Button button={this.button1} />
        <Input input={this.input2} />
        <Button button={this.button2} />
      </form>
    )
  }
}

Form.propTypes = {
  buttons: PropTypes.array,
  inputs: PropTypes.array
}
