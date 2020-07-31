import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ buttonText, handler }) => {
  return (
    <button onClick={handler}>{buttonText}</button>
  )
}

Button.propTypes = {
  button: PropTypes.object,
  buttonText: PropTypes.string,
  handler: PropTypes.func
}
