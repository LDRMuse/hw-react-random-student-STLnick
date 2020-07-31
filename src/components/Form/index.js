import React from 'react'

import { Button } from './Button'
import { Input } from './Input'

export class Form extends React.Component {


  render() {
    return (
      <form>
        <Input
          htmlFor="add-student"
          placeholder="name"
          type="text"
        />
        <Button buttonText="Add Student" />
        <Input
          disabled="true"
          htmlFor="random-student"
          placeholder="(Random Student)"
          type="text"
        />
        <Button buttonText="Random Student" />
      </form>
    )
  }
}
