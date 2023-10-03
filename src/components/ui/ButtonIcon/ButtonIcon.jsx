'use client'

import styles from './button.module.scss'

const ButtonIcon = ({ children }) => {
  return (
    <button className={styles['button-icon']}>
      <div className={styles['body']}>{children}</div>
    </button>
  )
}

export default ButtonIcon
