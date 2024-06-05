import React, { useContext } from 'react'
import { Header } from './header'

import * as styles from './content.module.css'
import { MyContext } from './context'

export const Page = () => {
  const context = useContext(MyContext)
  return (
    <div className={styles.content}>
      <Header name={context.name} />
      <section>
        <div>
          <div>Some Item</div>
        </div>
      </section>
    </div>
  )
}
