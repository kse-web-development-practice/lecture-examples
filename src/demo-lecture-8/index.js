import React from 'react'
// import { Mouse, Pointer } from './render-props'
import * as styles from './index.module.css'
import { Page } from './context'
import { MyContext } from './context/context'
// import { withLogging } from './high-order-component'

export const Lecture8 = () => {
  // const Mouse2 = withLogging(Mouse)
  return (
    <MyContext.Provider
      value={{
        userId: '123123sdfjkshd',
        name: 'Nick'
      }}>
      <div className={styles.wrapper}>
        {/*<Mouse2*/}
        {/*  renderPointer={(left, top) => {*/}
        {/*    return (*/}
        {/*      <div>*/}
        {/*        left={left} top={top}*/}
        {/*        <Pointer left={left} top={top} />*/}
        {/*      </div>*/}
        {/*    )*/}
        {/*  }}*/}
        {/*/>*/}
        <Page />
      </div>
    </MyContext.Provider>
  )
}
