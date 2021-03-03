import React from 'react'
import PropTypes from 'prop-types'

import './ErrorMessage.css'

function ErrorMessage({message}) {
  return (
    <p className="errorMessage">
      {message}
    </p>
  )
}

export default ErrorMessage

ErrorMessage.propTypes = {
  message: PropTypes.string
}