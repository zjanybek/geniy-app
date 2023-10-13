'use client'

import styles from './radio.module.scss'

const Radio = ({ id, label, name, value, onChange, subtext }) => {
  return (
    // <div className={styles.option}>
    <div className={`${styles.option} rounded-[20px] border border-[#D9D9D9]`}>
      <input
        onChange={(e) => onChange(e.target.value)}
        id={id}
        className={styles.option__input}
        value={value}
        name={name}
        hidden
        type='radio'
      />
      <label
        htmlFor={id}
        className={`${styles.option__label} flex flex-col items-center`}
      >
        <div className='up-icon h-[30px] w-[34px] text-[#67D4CF]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            role='image'
            viewBox='0 0 34 30'
            fill='none'
          >
            <path d='M11.8346 9.32609L16.3489 0H17.6511L22.1654 9.32609H11.8346ZM15.8369 30L0.343218 11.6259H15.8369V30ZM18.1631 30V11.6259H33.6567L18.1631 30ZM24.7846 9.32609L20.2785 0H27.2505C27.8841 0 28.463 0.162635 28.9871 0.487903C29.5112 0.813172 29.9227 1.24745 30.2215 1.79073L34 9.32609H24.7846ZM0 9.32609L3.78547 1.79073C4.07962 1.24745 4.48876 0.813172 5.01289 0.487903C5.53704 0.162635 6.1159 0 6.74948 0H13.7215L9.22235 9.32609H0Z' />
          </svg>
        </div>
        <div className=''>Начинающий</div>
        {/* <span className={styles.option__text}>{label}</span> */}
      </label>
    </div>
    // </div>
  )
}

export default Radio
