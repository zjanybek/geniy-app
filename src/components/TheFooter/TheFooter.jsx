import Link from 'next/link'

import styles from './footer.module.scss'

const TheFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className='footer__container'>
        <div className={styles.content}>
          <div className={styles.body}>
            <div className={styles.column}>
              <div className={styles.title}>Найти гения</div>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <Link href='#' className={styles.link}>
                    Разместить задание
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href='#' className={styles.link}>
                    Разместить вакансию
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href='#' className={styles.link}>
                    Каталог экспертов
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <div className={styles.title}>Найти работу</div>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <Link href='#' className={styles.link}>
                    Каталог проектов
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href='#' className={styles.link}>
                    Каталог вакансий
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href='#' className={styles.link}>
                    Как построить карьеру онлайн
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href='#' className={styles.link}>
                    Учимся ставить цели и реализуем мечты
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <div className={styles.title}>Безопасная оплата</div>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <Link href='#' className={styles.link}>
                    Руководство по безопасной оплате
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href='#' className={styles.link}>
                    Решение споров и возвраты
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href='#' className={styles.link}>
                    Противодействие мошенничеству
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <div className={styles.title}>Вдохновение</div>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <Link href='#' className={styles.link}>
                    Блог
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href='#' className={styles.link}>
                    Новости платформы
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href='#' className={styles.link}>
                    Разместить задание
                  </Link>
                </li>
              </ul>

              <div className={styles.title}>О нас</div>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <Link href='#' className={styles.link}>
                    Миссия и ценности
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link href='#' className={styles.link}>
                    Служба поддержки
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.bottom}>
            <p className={styles.copy}>
              Copyright © 2023 Genius. Все права защищены
            </p>
            <ul className={styles['bottom-list']}>
              <li className={styles['bottom-item']}>
                <Link href='#' className={styles['bottom-link']}>
                  Пользовательское соглашение
                </Link>
              </li>
              <li className={styles['bottom-item']}>
                <Link href='#' className={styles['bottom-link']}>
                  Политика конфиденциальности
                </Link>
              </li>
              <li className={styles['bottom-item']}>
                <Link href='#' className={styles['bottom-link']}>
                  Карта сайта
                </Link>
              </li>
              <li className={styles['bottom-item']}>
                <Link href='#' className={styles['bottom-link']}>
                  Русский
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default TheFooter
