import React, { useEffect } from 'react'

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
      <div
        className="box"
        style={{
          left: position.x,
          top: position.y
        }}></div>
      {position.x} / {position.y}
    </div>
  )
}
