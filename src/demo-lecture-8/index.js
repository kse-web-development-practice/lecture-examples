import React from 'react'
import { Mouse, Pointer } from './render-props'
import { withLogging } from './high-order-component'

export const Lecture8 = () => {
  const MouseWithLogging = withLogging(Mouse)
  return (
    <div>
      <MouseWithLogging renderPointer={(left, top) => <Pointer left={left} top={top} />} />
    </div>
  )
}
