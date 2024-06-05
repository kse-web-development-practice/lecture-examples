import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import * as styles from './index.module.css'

export const Mouse = ({ renderPointer }) => {
  const [position, setPosition] = React.useState({
    x: 0,
    y: 0
  })
  useEffect(() => {
    const doc = document.body
    doc.addEventListener('mousemove', (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      })
    })
  })

  return <div>{renderPointer(position.x, position.y)}</div>
}

Mouse.propTypes = {
  renderPointer: PropTypes.func
}

export const Pointer = ({ left, top }) => {
  return (
    <div
      className={styles.box}
      style={{
        left,
        top
      }}></div>
  )
}

Pointer.propTypes = {
  left: PropTypes.number,
  top: PropTypes.number
}
