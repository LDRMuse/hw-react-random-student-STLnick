import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export const Input = (props) => {

  return (
    <Fragment>
      <label htmlFor={props.htmlFor}>Add Student</label>
      <input
        disabled={props.disabled}
        id={props.htmlFor}
        placeholder={props.placeholder}
        type={props.type}
      />
    </Fragment>
  )
}

Input.defaultProps = {
  disabled: false
}

Input.propTypes = {
  disabled: PropTypes.string,
  htmlFor: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}
