'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './header.module.scss'

const TheHeader = () => {
  const pathName = usePathname()

  console.log(pathName)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__content}>
          <button type='button' className={styles['icon-menu']}>
            <span></span>
          </button>
          <Link href='/' className={styles.header__logo}>
            <picture>
              <source
                media='(min-width: 1280.98px)'
                srcSet='/images/logo.svg'
              />
              <img src='/images/logo-mobile.svg' alt='Flowers' />
            </picture>
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
            <button className={styles['actions__search-mobile']}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='25'
                viewBox='0 0 25 25'
                fill='none'
              >
                <path
                  d='M10.2759 20.5453C7.40638 20.5453 4.97637 19.5503 2.98584 17.5604C0.99528 15.5705 0 13.1412 0 10.2726C0 7.40405 0.99528 4.97479 2.98584 2.98486C4.97637 0.994952 7.40638 0 10.2759 0C13.1454 0 15.5754 0.994952 17.566 2.98486C19.5565 4.97479 20.5518 7.40405 20.5518 10.2726C20.5518 11.4722 20.3504 12.6179 19.9475 13.7098C19.5446 14.8017 19.0071 15.7514 18.335 16.559L24.6428 22.8648C24.8754 23.0973 24.9944 23.3897 24.9998 23.7418C25.0052 24.0939 24.8862 24.3916 24.6428 24.635C24.3993 24.8783 24.1042 25 23.7574 25C23.4106 25 23.1154 24.8783 22.872 24.635L16.5642 18.3292C15.724 19.0227 14.7578 19.5654 13.6656 19.9573C12.5734 20.3493 11.4435 20.5453 10.2759 20.5453ZM10.2759 18.0256C12.4409 18.0256 14.2748 17.2746 15.7774 15.7724C17.28 14.2703 18.0313 12.437 18.0313 10.2726C18.0313 8.10825 17.28 6.27499 15.7774 4.77285C14.2748 3.27071 12.4409 2.51963 10.2759 2.51963C8.11081 2.51963 6.27697 3.27071 4.77435 4.77285C3.27176 6.27499 2.52047 8.10825 2.52047 10.2726C2.52047 12.437 3.27176 14.2703 4.77435 15.7724C6.27697 17.2746 8.11081 18.0256 10.2759 18.0256Z'
                  fill='#6C6C70'
                />
              </svg>
            </button>
            <a href='#' className={styles['actions__button-login']}>
              Вход
            </a>
            <a href='#' className={styles['actions__button-register']}>
              Регистрация
            </a>

            <a href='#' className={styles['actions__button-register-mobile']}>
              Вход
            </a>
          </div>
        </div>
      </header>
      {pathName === '/experts' && (
        <div className='flex px-[22px] pt-[22px]'>
          <div className='flex items-center'>
            <span className='pr-8 text-14 tracking-[0.14px] text-greenDark'>
              Каталог экспертов
            </span>
            <div className='flex items-center gap-x-5 border-l border-[#DBE0E2] pl-7'>
              <span className='cursor-pointer text-14 tracking-[0.14px] text-fontDarkGrey'>
                Дизайн и искусство
              </span>
              <span className='cursor-pointer text-14 tracking-[0.14px] text-fontDarkGrey'>
                Разработка и IT
              </span>
              <span className='cursor-pointer text-14 tracking-[0.14px] text-fontDarkGrey'>
                Тексты и переводы
              </span>
              <span className='cursor-pointer text-14 tracking-[0.14px] text-fontDarkGrey'>
                Реклама
              </span>
              <span className='cursor-pointer text-14 tracking-[0.14px] text-fontDarkGrey'>
                Соцсети
              </span>
              <span className='cursor-pointer text-14 tracking-[0.14px] text-fontDarkGrey'>
                SEO
              </span>
              <span className='cursor-pointer text-14 tracking-[0.14px] text-fontDarkGrey'>
                Бизнес
              </span>
              <span className='cursor-pointer text-14 tracking-[0.14px] text-fontDarkGrey'>
                Стиль жизни
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TheHeader
