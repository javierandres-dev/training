import styles from '../styles/styles.module.css'
import React from 'react'

export const StylesModule = () => {
  return (
        <div>
          <p className={styles.pink}>Styles from module</p>
          <p className={styles.violet}>Styles from module</p>
        </div>
  )
}
