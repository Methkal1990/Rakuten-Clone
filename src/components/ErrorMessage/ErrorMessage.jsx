import React from 'react'

import './ErrorMessage.css'

function ErrorMessage({message}) {
  return (
    <p className="errorMessage">
      {message}
    </p>
  )
}

export default ErrorMessage
