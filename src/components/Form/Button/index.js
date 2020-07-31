import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ buttonText, handler }) => {

  console.log('buttonText: ')
  console.log(buttonText)
  return (
    <button>{buttonText}</button>
  )
}

Button.propTypes = {
  button: PropTypes.object,
  buttonText: PropTypes.string
}
