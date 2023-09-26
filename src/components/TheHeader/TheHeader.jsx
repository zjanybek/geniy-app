import Link from 'next/link'

import styles from './header.module.scss'

const TheHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link href='/' className={styles.header__logo}>
          <img src='/images/logo.svg' alt='' />
        </Link>
        <div className={styles.menu}>
          <nav className={styles.menu__nav}>
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <button className={styles.menu__button}>
                  <span className={styles.menu__text}>Найти гения</span>
                  <span className={styles.menu__icon}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='6'
                      viewBox='0 0 8 6'
                      fill='none'
                    >
                      <path
                        d='M4.00589 5.5C3.92723 5.5 3.85447 5.48608 3.78761 5.45824C3.72074 5.43039 3.65585 5.38218 3.59292 5.31364L0.17108 1.58611C0.0570266 1.46187 0 1.31192 0 1.13625C0 0.960579 0.0570266 0.810624 0.17108 0.686382C0.285145 0.562127 0.424773 0.5 0.589964 0.5C0.755156 0.5 0.894778 0.562127 1.00883 0.686382L4.00589 3.95118L7.00296 0.686382C7.11701 0.562127 7.25467 0.5 7.41593 0.5C7.57718 0.5 7.71484 0.562127 7.8289 0.686382C7.94297 0.810624 8 0.962719 8 1.14267C8 1.32262 7.94297 1.47472 7.8289 1.59897L4.41887 5.31364C4.35594 5.38218 4.29104 5.43039 4.22418 5.45824C4.15732 5.48608 4.08456 5.5 4.00589 5.5Z'
                        fill='var(--Font-black, #1D1D1F)'
                      />
                    </svg>
                  </span>
                </button>
              </li>
              <li className={styles.menu__item}>
                <button className={styles.menu__button}>
                  <span className={styles.menu__text}>Найти работу</span>
                  <span className={styles.menu__icon}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='6'
                      viewBox='0 0 8 6'
                      fill='none'
                    >
                      <path
                        d='M4.00589 5.5C3.92723 5.5 3.85447 5.48608 3.78761 5.45824C3.72074 5.43039 3.65585 5.38218 3.59292 5.31364L0.17108 1.58611C0.0570266 1.46187 0 1.31192 0 1.13625C0 0.960579 0.0570266 0.810624 0.17108 0.686382C0.285145 0.562127 0.424773 0.5 0.589964 0.5C0.755156 0.5 0.894778 0.562127 1.00883 0.686382L4.00589 3.95118L7.00296 0.686382C7.11701 0.562127 7.25467 0.5 7.41593 0.5C7.57718 0.5 7.71484 0.562127 7.8289 0.686382C7.94297 0.810624 8 0.962719 8 1.14267C8 1.32262 7.94297 1.47472 7.8289 1.59897L4.41887 5.31364C4.35594 5.38218 4.29104 5.43039 4.22418 5.45824C4.15732 5.48608 4.08456 5.5 4.00589 5.5Z'
                        fill='var(--Font-black, #1D1D1F)'
                      />
                    </svg>
                  </span>
                </button>
              </li>
              <li className={styles.menu__item}>
                <button className={styles.menu__button}>
                  <span className={styles.menu__text}>Все включено</span>
                  <span className={styles.menu__icon}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='6'
                      viewBox='0 0 8 6'
                      fill='none'
                    >
                      <path
                        d='M4.00589 5.5C3.92723 5.5 3.85447 5.48608 3.78761 5.45824C3.72074 5.43039 3.65585 5.38218 3.59292 5.31364L0.17108 1.58611C0.0570266 1.46187 0 1.31192 0 1.13625C0 0.960579 0.0570266 0.810624 0.17108 0.686382C0.285145 0.562127 0.424773 0.5 0.589964 0.5C0.755156 0.5 0.894778 0.562127 1.00883 0.686382L4.00589 3.95118L7.00296 0.686382C7.11701 0.562127 7.25467 0.5 7.41593 0.5C7.57718 0.5 7.71484 0.562127 7.8289 0.686382C7.94297 0.810624 8 0.962719 8 1.14267C8 1.32262 7.94297 1.47472 7.8289 1.59897L4.41887 5.31364C4.35594 5.38218 4.29104 5.43039 4.22418 5.45824C4.15732 5.48608 4.08456 5.5 4.00589 5.5Z'
                        fill='var(--Font-black, #1D1D1F)'
                      />
                    </svg>
                  </span>
                </button>
              </li>
              <li className={styles.menu__item}>
                <button className={styles.menu__button}>
                  <span className={styles.menu__text}>Консультации</span>
                  <span className={styles.menu__icon}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='6'
                      viewBox='0 0 8 6'
                      fill='none'
                    >
                      <path
                        d='M4.00589 5.5C3.92723 5.5 3.85447 5.48608 3.78761 5.45824C3.72074 5.43039 3.65585 5.38218 3.59292 5.31364L0.17108 1.58611C0.0570266 1.46187 0 1.31192 0 1.13625C0 0.960579 0.0570266 0.810624 0.17108 0.686382C0.285145 0.562127 0.424773 0.5 0.589964 0.5C0.755156 0.5 0.894778 0.562127 1.00883 0.686382L4.00589 3.95118L7.00296 0.686382C7.11701 0.562127 7.25467 0.5 7.41593 0.5C7.57718 0.5 7.71484 0.562127 7.8289 0.686382C7.94297 0.810624 8 0.962719 8 1.14267C8 1.32262 7.94297 1.47472 7.8289 1.59897L4.41887 5.31364C4.35594 5.38218 4.29104 5.43039 4.22418 5.45824C4.15732 5.48608 4.08456 5.5 4.00589 5.5Z'
                        fill='var(--Font-black, #1D1D1F)'
                      />
                    </svg>
                  </span>
                </button>
              </li>
              <li className={styles.menu__item}>
                <button className={styles.menu__button}>
                  <span className={styles.menu__text}>Для бизнеса</span>
                  <span className={styles.menu__icon}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='6'
                      viewBox='0 0 8 6'
                      fill='none'
                    >
                      <path
                        d='M4.00589 5.5C3.92723 5.5 3.85447 5.48608 3.78761 5.45824C3.72074 5.43039 3.65585 5.38218 3.59292 5.31364L0.17108 1.58611C0.0570266 1.46187 0 1.31192 0 1.13625C0 0.960579 0.0570266 0.810624 0.17108 0.686382C0.285145 0.562127 0.424773 0.5 0.589964 0.5C0.755156 0.5 0.894778 0.562127 1.00883 0.686382L4.00589 3.95118L7.00296 0.686382C7.11701 0.562127 7.25467 0.5 7.41593 0.5C7.57718 0.5 7.71484 0.562127 7.8289 0.686382C7.94297 0.810624 8 0.962719 8 1.14267C8 1.32262 7.94297 1.47472 7.8289 1.59897L4.41887 5.31364C4.35594 5.38218 4.29104 5.43039 4.22418 5.45824C4.15732 5.48608 4.08456 5.5 4.00589 5.5Z'
                        fill='var(--Font-black, #1D1D1F)'
                      />
                    </svg>
                  </span>
                </button>
              </li>
              <li className={styles.menu__item}>
                <button className={styles.menu__button}>
                  <span className={styles.menu__text}>Вдохновение</span>
                  <span className={styles.menu__icon}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='6'
                      viewBox='0 0 8 6'
                      fill='none'
                    >
                      <path
                        d='M4.00589 5.5C3.92723 5.5 3.85447 5.48608 3.78761 5.45824C3.72074 5.43039 3.65585 5.38218 3.59292 5.31364L0.17108 1.58611C0.0570266 1.46187 0 1.31192 0 1.13625C0 0.960579 0.0570266 0.810624 0.17108 0.686382C0.285145 0.562127 0.424773 0.5 0.589964 0.5C0.755156 0.5 0.894778 0.562127 1.00883 0.686382L4.00589 3.95118L7.00296 0.686382C7.11701 0.562127 7.25467 0.5 7.41593 0.5C7.57718 0.5 7.71484 0.562127 7.8289 0.686382C7.94297 0.810624 8 0.962719 8 1.14267C8 1.32262 7.94297 1.47472 7.8289 1.59897L4.41887 5.31364C4.35594 5.38218 4.29104 5.43039 4.22418 5.45824C4.15732 5.48608 4.08456 5.5 4.00589 5.5Z'
                        fill='var(--Font-black, #1D1D1F)'
                      />
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`${styles.header__actions} ${styles.actions}`}>
          <form className={styles.actions__form}>
            <div className={styles['actions__body']}>
              <input type='text' placeholder='Поиск' />
              <div className={styles['actions__search-box']}>
                <button className={styles['actions__button-search']}>
                  <span className={styles['actions__search-icon']}>
                    <img src='/images/search.svg' alt='search' />
                  </span>
                </button>
              </div>
            </div>
            <div className={styles['actions__search-dropdown']}>
              <button className={styles.actions__button}>
                <span className={styles.actions__text}>Эксперта</span>
                <span className={styles.actions__icon}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='8'
                    height='6'
                    viewBox='0 0 8 6'
                    fill='none'
                  >
                    <path
                      d='M4.00589 5.5C3.92723 5.5 3.85447 5.48608 3.78761 5.45824C3.72074 5.43039 3.65585 5.38218 3.59292 5.31364L0.17108 1.58611C0.0570266 1.46187 0 1.31192 0 1.13625C0 0.960579 0.0570266 0.810624 0.17108 0.686382C0.285145 0.562127 0.424773 0.5 0.589964 0.5C0.755156 0.5 0.894778 0.562127 1.00883 0.686382L4.00589 3.95118L7.00296 0.686382C7.11701 0.562127 7.25467 0.5 7.41593 0.5C7.57718 0.5 7.71484 0.562127 7.8289 0.686382C7.94297 0.810624 8 0.962719 8 1.14267C8 1.32262 7.94297 1.47472 7.8289 1.59897L4.41887 5.31364C4.35594 5.38218 4.29104 5.43039 4.22418 5.45824C4.15732 5.48608 4.08456 5.5 4.00589 5.5Z'
                      fill='var(--Font-black, #1D1D1F)'
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
          <a href='#' className={styles['actions__button-login']}>
            Вход
          </a>
          <a href='#' className={styles['actions__button-register']}>
            Регистрация
          </a>
        </div>
      </div>
    </header>
  )
}

export default TheHeader
