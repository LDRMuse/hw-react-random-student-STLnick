import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './Input.css'

export const Input = ({ input: { disabled, htmlFor, label, placeholder, type }, handler }) => {

  return (
    <Fragment>
      <label
        className="screen-reader-text"
        htmlFor={htmlFor}
      >
        Add Student
      </label>
      <input
        disabled={disabled}
        id={htmlFor}
        onChange={handler}
        placeholder={placeholder}
        type={type}
      />
    </Fragment>
  )
}

Input.defaultProps = {
  disabled: false,
  type: "text"
}

Input.propTypes = {
  disabled: PropTypes.bool,
  handler: PropTypes.func,
  htmlFor: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}
