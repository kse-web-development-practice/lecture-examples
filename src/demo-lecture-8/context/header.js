import React from 'react'
import PropTypes from 'prop-types'

import * as styles from './header.module.css'

export const Header = ({ name }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Site name</div>
      <div className={styles.user}>Hello, {name}</div>
      <div className={styles.user}>Hello, {name}!  !</div>
    </header>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired
}
