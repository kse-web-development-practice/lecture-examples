import React from 'react'
import { Mouse, Pointer } from './render-props'
import * as styles from './index.module.css'

export const Lecture8 = () => {
  return (
    <div className={styles.wrapper}>
      <Mouse renderPointer={(left, top) => <Pointer left={left} top={top} />} />
      {/*<Page />*/}
    </div>
  )
}
