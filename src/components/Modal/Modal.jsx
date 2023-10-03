'use client'

import { useState } from 'react'

import styles from './modal.module.scss'

const Modal = ({ show, children, onClose, maxWidth }) => {
  const [closeAnimation, setCloseAnimation] = useState(false)

  const handleClose = () => {
    setCloseAnimation(true)
    setTimeout(() => {
      onClose()
    }, 400)
  }

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-headline'
      className={`${styles.modal} ${
        closeAnimation ? styles['modal_close'] : ''
      }`}
      onClick={() => handleClose()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.content} 
        ${closeAnimation ? styles['content_close'] : ''} 
        ${maxWidth === 'xl' ? styles['content_width-big'] : ''}
        `}
      >
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  )
}

export default Modal
