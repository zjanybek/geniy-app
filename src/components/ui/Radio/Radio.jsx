'use client'

import styles from './radio.module.scss'

const Radio = ({ id, label, name, value, onChange, subtext }) => {
  return (
    <div className={styles.option}>
      <div className={styles.option__item}>
        <input
          onChange={(e) => onChange(e.target.value)}
          id={id}
          className={styles.option__input}
          value={value}
          name={name}
          hidden
          type='radio'
        />
        <label htmlFor={id} className={styles.option__label}>
          <span className={styles.option__text}>{label}</span>
        </label>
      </div>
    </div>
  )
}

export default Radio
