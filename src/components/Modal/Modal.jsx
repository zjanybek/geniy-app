'use client'

import { useCallback, useEffect, useState } from 'react'

import styles from './modal.module.scss'

const Modal = ({
  isOpen,
  children,
  onClose,
  maxWidth,
  headerClose = true,
  disabled
}) => {
  // const [closeAnimation, setCloseAnimation] = useState(false)

  // const handleClose = () => {
  //   console.log(1)
  //   setCloseAnimation(true)
  //   setTimeout(() => {
  //     onClose()
  //   }, 400)
  // }

  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (disabled) {
      return
    }

    setShowModal(false)
    setTimeout(() => {
      onClose()
    }, 400)
  }, [disabled, onClose])

  useEffect(() => {
    if (showModal) {
      document.documentElement.classList.add('lock')
    } else {
      document.documentElement.classList.remove('lock')
    }

    return () => {
      document.documentElement.classList.remove('lock')
    }
  }, [showModal])

  if (!isOpen) {
    return null
  }

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-headline'
      className={`${styles.modal} ${
        showModal ? styles['modal_open'] : styles['modal_close']
      }`}
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.content} 
        ${showModal ? styles['content_open'] : styles['content_close']} 
        ${maxWidth === 'xl' ? styles['content_width-big'] : ''}
        `}
      >
        {headerClose === true && (
          <div className={styles.header}>
            <button onClick={handleClose} className={styles.close}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='10'
                height='10'
                viewBox='0 0 10 10'
                fill='none'
              >
                <path
                  d='M5 6.13324L1.36945 9.76379C1.21196 9.92126 1.02309 10 0.802827 10C0.582568 10 0.393696 9.92126 0.23621 9.76379C0.0787367 9.60631 0 9.41743 0 9.19717C0 8.97691 0.0787367 8.78804 0.23621 8.63056L3.86677 5L0.23621 1.36945C0.0787367 1.21196 0 1.02309 0 0.802828C0 0.582568 0.0787367 0.393696 0.23621 0.23621C0.393696 0.078737 0.582568 0 0.802827 0C1.02309 0 1.21196 0.078737 1.36945 0.23621L5 3.86677L8.63056 0.23621C8.78804 0.078737 8.97691 0 9.19717 0C9.41743 0 9.60631 0.078737 9.76379 0.23621C9.92126 0.393696 10 0.582568 10 0.802828C10 1.02309 9.92126 1.21196 9.76379 1.36945L6.13324 5L9.76379 8.63056C9.92126 8.78804 10 8.97691 10 9.19717C10 9.41743 9.92126 9.60631 9.76379 9.76379C9.60631 9.92126 9.41743 10 9.19717 10C8.97691 10 8.78804 9.92126 8.63056 9.76379L5 6.13324Z'
                  fill='currentColor'
                />
              </svg>
            </button>
          </div>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  )
}

export default Modal
