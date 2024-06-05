import React from 'react'
import PropTypes from 'prop-types'

export const withLogging = (Component) => {
  const renderFunction = ({ renderPointer }) => {
    const render = (left, top) => {
      console.log(left, top)
      return renderPointer(left, top)
    }
    return <Component renderPointer={render} />
  }

  renderFunction.propTypes = {
    renderPointer: PropTypes.func.isRequired
  }

  return renderFunction
}
