'use client'

import styles from './checkbox.module.scss'

const Checkbox = ({ id, selected, label, onChange, children, icon }) => {
  const handleChange = (event) => {
    const { checked } = event.target
    console.log(checked)
    onChange(checked)
  }

  return (
    <div className={styles.checkbox}>
      <input
        id={id}
        defaultChecked={selected}
        value={selected}
        onChange={handleChange}
        className={styles.input}
        type='checkbox'
      />
      <label htmlFor={id} className={styles.label}>
        {icon && <span className={styles.icon}>{children}</span>}
        <span
          className={`${styles.text} ${icon ? `${styles['text_change']}` : ''}`}
        >
          {label}
        </span>
        <div className={styles['tick-icon']}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='10'
            viewBox='0 0 12 10'
            fill='none'
          >
            <path
              d='M10.5904 0.293643C10.8766 -0.0570288 11.3815 -0.0996704 11.7181 0.1984C12.0547 0.496471 12.0957 1.02238 11.8095 1.37305L5.00955 9.70636C4.71891 10.0625 4.20392 10.1001 3.86851 9.7895L0.268517 6.45617C-0.0617085 6.15041 -0.0914536 5.62368 0.202081 5.2797C0.495614 4.93571 1.00127 4.90473 1.3315 5.21049L4.32017 7.97778L10.5904 0.293643Z'
              fill='currentColor'
            />
          </svg>
        </div>
      </label>
    </div>
  )
}

export default Checkbox
