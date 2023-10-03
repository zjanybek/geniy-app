'use client'

import styles from './button.module.scss'

const Button = ({ children, border, className }) => {
  return (
    <button
      className={`
      ${styles.button} 
      ${border ? styles.button_border : ''}
      ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
