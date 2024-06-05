import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

export const Mouse = () => {
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

  return (
    <div>
      <Pointer left={position.x} top={position.y} />
      <span>
        Coordinates: {position.x} / {position.y}
      </span>
    </div>
  )
}

const Pointer = ({ left, top }) => {
  return (
    <div
      className="box"
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
