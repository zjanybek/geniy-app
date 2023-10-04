'use client'

import styles from './button.module.scss'

const Button = ({ children, border, className, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
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
