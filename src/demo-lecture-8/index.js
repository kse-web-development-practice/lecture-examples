import React from 'react'
import { Mouse, Pointer } from './render-props'

export const Lecture8 = () => {
  return (
    <div>
      <Mouse renderPointer={(left, top) => <Pointer left={left} top={top} />} />
      {/*<Page />*/}
    </div>
  )
}
