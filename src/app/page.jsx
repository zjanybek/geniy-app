import Link from 'next/link'

import { ThreeSteps } from '@/screens/MainPage'
import { ButtonScrollTo, Questions, TextBlock } from '@/screens/MainPage/client'

import './page.scss'

export default function Home() {
  return (
    <main className='main-block'>
      <section className='hero'>
        <div className='hero__main-container hero__main-container_change'>
          <div className='hero__content'>
            <p className='hero__success'>Ваш успех - наша миссия...</p>
            <h1 className='hero__title'>
              Реализуй <br />
              <span>проект мечты ,</span>
            </h1>
            <p className='hero__subtitle'>
              Тысячи профессионалов со всего мира готовы помочь тебе
            </p>
            <Link href='#' className='hero__button'>
              Разместить задание бесплатно
            </Link>
          </div>
          <ButtonScrollTo className='hero__scroll-button' />
        </div>
      </section>

      <section className='find-collaborator'>
        <div className='find-collaborator__main-container'>
          <div className='find-collaborator__body'>
            <div className='find-collaborator__content'>
              <h2 className='find-collaborator__title title-main-page'>
                Вы ищете сотрудника? <br />
                <span>Очень просто...</span>
              </h2>
              <p className='find-collaborator__text text-main-page'>
                Ваш идеальный программист, дизайнер, маркетолог или писатель уже
                ждут вас.
              </p>
              <div className='find-collaborator__access'>
                <div className='find-collaborator__star-icon'>
                  <img src='/images/star-white.svg' alt='' />
                </div>
                Доступ к лучшим специалистам в отрасли всего в паре кликов от
                вас.
              </div>
              <button className='find-collaborator__button'>
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </section>

      <ThreeSteps />

      <section className='find-expert'>
        <div className='find-expert__main-container'>
          <div className='find-expert__items'>
            <div className='find-expert__content'>
              <div className='find-expert__box'>
                <h2 className='find-expert__title title-main-page'>
                  Найдите эксперта <br /> <span>в каталоге.</span>
                </h2>
                <div className='find-expert__ready-search'>
                  <span className='find-expert__search-text'>
                    Готовы к поиску?
                  </span>
                  <Link
                    href='#'
                    className='find-expert__register-link main-link-arrow main-link-arrow_second'
                  >
                    <span>Зарегистрируйтесь как заказчик</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                    >
                      <path
                        d='M13.1049 8.87248H0.851508C0.607413 8.87248 0.404471 8.7898 0.242682 8.62445C0.0808941 8.4591 0 8.25169 0 8.00222C0 7.75274 0.0808941 7.54533 0.242682 7.37998C0.404471 7.21463 0.607413 7.13195 0.851508 7.13195H13.1049L7.56998 1.47518C7.39969 1.30113 7.31596 1.09806 7.31879 0.865974C7.32163 0.633908 7.40821 0.430847 7.57851 0.256793C7.74882 0.0885523 7.9475 0.00297832 8.17457 7.16168e-05C8.40163 -0.00283509 8.60032 0.0827389 8.77062 0.256793L15.7531 7.39303C15.8439 7.48586 15.9078 7.58159 15.9447 7.68022C15.9816 7.77884 16 7.88617 16 8.00222C16 8.11826 15.9816 8.22559 15.9447 8.32421C15.9078 8.42284 15.8439 8.51857 15.7531 8.6114L8.77062 15.7476C8.606 15.9159 8.40874 16 8.17883 16C7.94892 16 7.74882 15.9159 7.57851 15.7476C7.40821 15.5736 7.32306 15.3691 7.32306 15.1341C7.32306 14.8991 7.40821 14.6946 7.57851 14.5206L13.1049 8.87248Z'
                        fill='currentColor'
                      />
                    </svg>
                  </Link>
                </div>

                <div className='find-expert__body find-expert-items'>
                  <div className='find-expert-items__item'>
                    <div className='find-expert-items__title'>Дизайн и Арт</div>
                    <div className='find-expert-items__bottom'>
                      <img
                        className='find-expert-items__icon'
                        src='/images/star-green.svg'
                        alt=''
                      />
                      <span className='find-expert-items__count'>1 321</span>
                      <span className='find-expert-items__expert'>
                        Эксперта
                      </span>
                    </div>
                  </div>
                  <div className='find-expert-items__item'>
                    <div className='find-expert-items__title'>
                      Веб-разработка и IT
                    </div>
                    <div className='find-expert-items__bottom'>
                      <img
                        className='find-expert-items__icon'
                        src='/images/star-green.svg'
                        alt=''
                      />
                      <span className='find-expert-items__count'>1 321</span>
                      <span className='find-expert-items__expert'>
                        Эксперта
                      </span>
                    </div>
                  </div>
                  <div className='find-expert-items__item'>
                    <div className='find-expert-items__title'>
                      Тексты и переводы
                    </div>
                    <div className='find-expert-items__bottom'>
                      <img
                        className='find-expert-items__icon'
                        src='/images/star-green.svg'
                        alt=''
                      />
                      <span className='find-expert-items__count'>1 321</span>
                      <span className='find-expert-items__expert'>
                        Эксперта
                      </span>
                    </div>
                  </div>
                  <div className='find-expert-items__item'>
                    <div className='find-expert-items__title'>
                      Реклама и продажи
                    </div>
                    <div className='find-expert-items__bottom'>
                      <img
                        className='find-expert-items__icon'
                        src='/images/star-green.svg'
                        alt=''
                      />
                      <span className='find-expert-items__count'>1 321</span>
                      <span className='find-expert-items__expert'>
                        Эксперта
                      </span>
                    </div>
                  </div>
                  <div className='find-expert-items__item'>
                    <div className='find-expert-items__title'>
                      Аудио и видео
                    </div>
                    <div className='find-expert-items__bottom'>
                      <img
                        className='find-expert-items__icon'
                        src='/images/star-green.svg'
                        alt=''
                      />
                      <span className='find-expert-items__count'>1 321</span>
                      <span className='find-expert-items__expert'>
                        Эксперта
                      </span>
                    </div>
                  </div>
                  <div className='find-expert-items__item'>
                    <div className='find-expert-items__title'>
                      Оптимизация (SEO)
                    </div>
                    <div className='find-expert-items__bottom'>
                      <img
                        className='find-expert-items__icon'
                        src='/images/star-green.svg'
                        alt=''
                      />
                      <span className='find-expert-items__count'>1 321</span>
                      <span className='find-expert-items__expert'>
                        Эксперта
                      </span>
                    </div>
                  </div>
                  <div className='find-expert-items__item'>
                    <div className='find-expert-items__title'>Инжиниринг</div>
                    <div className='find-expert-items__bottom'>
                      <img
                        className='find-expert-items__icon'
                        src='/images/star-green.svg'
                        alt=''
                      />
                      <span className='find-expert-items__count'>1 321</span>
                      <span className='find-expert-items__expert'>
                        Эксперта
                      </span>
                    </div>
                  </div>
                  <div className='find-expert-items__item'>
                    <div className='find-expert-items__title'>Менеджмент</div>
                    <div className='find-expert-items__bottom'>
                      <img
                        className='find-expert-items__icon'
                        src='/images/star-green.svg'
                        alt=''
                      />
                      <span className='find-expert-items__count'>1 321</span>
                      <span className='find-expert-items__expert'>
                        Эксперта
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href='#'
                  className='main-link-arrow main-link-arrow_blue main-link-arrow_second'
                >
                  <span>Смотреть весь каталог</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                  >
                    <path
                      d='M13.1049 8.87248H0.851508C0.607413 8.87248 0.404471 8.7898 0.242682 8.62445C0.0808941 8.4591 0 8.25169 0 8.00222C0 7.75274 0.0808941 7.54533 0.242682 7.37998C0.404471 7.21463 0.607413 7.13195 0.851508 7.13195H13.1049L7.56998 1.47518C7.39969 1.30113 7.31596 1.09806 7.31879 0.865974C7.32163 0.633908 7.40821 0.430847 7.57851 0.256793C7.74882 0.0885523 7.9475 0.00297832 8.17457 7.16168e-05C8.40163 -0.00283509 8.60032 0.0827389 8.77062 0.256793L15.7531 7.39303C15.8439 7.48586 15.9078 7.58159 15.9447 7.68022C15.9816 7.77884 16 7.88617 16 8.00222C16 8.11826 15.9816 8.22559 15.9447 8.32421C15.9078 8.42284 15.8439 8.51857 15.7531 8.6114L8.77062 15.7476C8.606 15.9159 8.40874 16 8.17883 16C7.94892 16 7.74882 15.9159 7.57851 15.7476C7.40821 15.5736 7.32306 15.3691 7.32306 15.1341C7.32306 14.8991 7.40821 14.6946 7.57851 14.5206L13.1049 8.87248Z'
                      fill='currentColor'
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className='find-expert__image'>
              <img src='/images/find-expert.jpg' alt='' />
            </div>
          </div>
        </div>
      </section>

      <section className='find-genius'>
        <div className='find-genius__main-container'>
          <div className='find-genius__body'>
            <div className='find-genius__items'>
              <div className='find-genius__content'>
                <div className='find-genius__box'>
                  <span className='find-genius__top-text'>для заказчика</span>
                  <h2 className='find-genius__title title-main-page'>
                    Найти гения <span>на проект</span>
                  </h2>
                  <p className='find-genius__text text-main-page'>
                    Мгновенный доступ к тысячам талантов. Несколько кликов и вы
                    на пути к успеху.
                  </p>
                  <div className='find-genius__list find-genius-list'>
                    <div className='find-genius-list__item'>
                      <div className='find-genius-list__icon'>
                        <img src='/images/star-white.svg' alt='' />
                      </div>
                      <div className='find-genius-list__body'>
                        <div className='find-genius-list__title'>
                          Быстро и эффективно.
                        </div>
                        <div className='find-genius-list__text'>
                          Найдите сотрудника с вашим бюджетом и вашими
                          требованиями.
                        </div>
                      </div>
                    </div>
                    <div className='find-genius-list__item'>
                      <div className='find-genius-list__icon'>
                        <img src='/images/star-white.svg' alt='' />
                      </div>
                      <div className='find-genius-list__body'>
                        <div className='find-genius-list__title'>
                          Легко управляйте проектами.
                        </div>
                        <div className='find-genius-list__text'>
                          Следите за ходом выполнения работы, общайтесь с
                          исполнителями и контролируйте процесс.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='find-genius__cards'>
                <Link href='#' className='find-genius__card'>
                  <div className='find-genius__card-text'>
                    Разместить задание <br /> или вакансию
                    <span className='find-genius__card-icon'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='currentColor'
                      >
                        <path
                          d='M13.1049 8.87248H0.851508C0.607413 8.87248 0.404471 8.7898 0.242682 8.62445C0.0808941 8.4591 0 8.25169 0 8.00222C0 7.75274 0.0808941 7.54533 0.242682 7.37998C0.404471 7.21463 0.607413 7.13195 0.851508 7.13195H13.1049L7.56998 1.47518C7.39969 1.30113 7.31596 1.09806 7.31879 0.865974C7.32163 0.633908 7.40821 0.430847 7.57851 0.256793C7.74882 0.0885523 7.9475 0.00297832 8.17457 7.16168e-05C8.40163 -0.00283509 8.60032 0.0827389 8.77062 0.256793L15.7531 7.39303C15.8439 7.48586 15.9078 7.58159 15.9447 7.68022C15.9816 7.77884 16 7.88617 16 8.00222C16 8.11826 15.9816 8.22559 15.9447 8.32421C15.9078 8.42284 15.8439 8.51857 15.7531 8.6114L8.77062 15.7476C8.606 15.9159 8.40874 16 8.17883 16C7.94892 16 7.74882 15.9159 7.57851 15.7476C7.40821 15.5736 7.32306 15.3691 7.32306 15.1341C7.32306 14.8991 7.40821 14.6946 7.57851 14.5206L13.1049 8.87248Z'
                          fill='currentColor'
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
                <Link href='#' className='find-genius__card'>
                  <div className='find-genius__card-text'>
                    <div className='find-genius__card-text-decor'>
                      <span>1</span>
                    </div>
                    <span>
                      Каталог <br /> экспертов
                    </span>
                    <span className='find-genius__card-icon'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='currentColor'
                      >
                        <path
                          d='M13.1049 8.87248H0.851508C0.607413 8.87248 0.404471 8.7898 0.242682 8.62445C0.0808941 8.4591 0 8.25169 0 8.00222C0 7.75274 0.0808941 7.54533 0.242682 7.37998C0.404471 7.21463 0.607413 7.13195 0.851508 7.13195H13.1049L7.56998 1.47518C7.39969 1.30113 7.31596 1.09806 7.31879 0.865974C7.32163 0.633908 7.40821 0.430847 7.57851 0.256793C7.74882 0.0885523 7.9475 0.00297832 8.17457 7.16168e-05C8.40163 -0.00283509 8.60032 0.0827389 8.77062 0.256793L15.7531 7.39303C15.8439 7.48586 15.9078 7.58159 15.9447 7.68022C15.9816 7.77884 16 7.88617 16 8.00222C16 8.11826 15.9816 8.22559 15.9447 8.32421C15.9078 8.42284 15.8439 8.51857 15.7531 8.6114L8.77062 15.7476C8.606 15.9159 8.40874 16 8.17883 16C7.94892 16 7.74882 15.9159 7.57851 15.7476C7.40821 15.5736 7.32306 15.3691 7.32306 15.1341C7.32306 14.8991 7.40821 14.6946 7.57851 14.5206L13.1049 8.87248Z'
                          fill='currentColor'
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
                <Link href='#' className='find-genius__card'>
                  <div className='find-genius__card-text'>
                    Услуга <br /> ‘Все включено’
                    <span className='find-genius__card-icon'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='currentColor'
                      >
                        <path
                          d='M13.1049 8.87248H0.851508C0.607413 8.87248 0.404471 8.7898 0.242682 8.62445C0.0808941 8.4591 0 8.25169 0 8.00222C0 7.75274 0.0808941 7.54533 0.242682 7.37998C0.404471 7.21463 0.607413 7.13195 0.851508 7.13195H13.1049L7.56998 1.47518C7.39969 1.30113 7.31596 1.09806 7.31879 0.865974C7.32163 0.633908 7.40821 0.430847 7.57851 0.256793C7.74882 0.0885523 7.9475 0.00297832 8.17457 7.16168e-05C8.40163 -0.00283509 8.60032 0.0827389 8.77062 0.256793L15.7531 7.39303C15.8439 7.48586 15.9078 7.58159 15.9447 7.68022C15.9816 7.77884 16 7.88617 16 8.00222C16 8.11826 15.9816 8.22559 15.9447 8.32421C15.9078 8.42284 15.8439 8.51857 15.7531 8.6114L8.77062 15.7476C8.606 15.9159 8.40874 16 8.17883 16C7.94892 16 7.74882 15.9159 7.57851 15.7476C7.40821 15.5736 7.32306 15.3691 7.32306 15.1341C7.32306 14.8991 7.40821 14.6946 7.57851 14.5206L13.1049 8.87248Z'
                          fill='currentColor'
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
                <Link href='#' className='find-genius__card'>
                  <div className='find-genius__card-text'>
                    Запланировать <br /> консультацию
                    <span className='find-genius__card-icon'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='currentColor'
                      >
                        <path
                          d='M13.1049 8.87248H0.851508C0.607413 8.87248 0.404471 8.7898 0.242682 8.62445C0.0808941 8.4591 0 8.25169 0 8.00222C0 7.75274 0.0808941 7.54533 0.242682 7.37998C0.404471 7.21463 0.607413 7.13195 0.851508 7.13195H13.1049L7.56998 1.47518C7.39969 1.30113 7.31596 1.09806 7.31879 0.865974C7.32163 0.633908 7.40821 0.430847 7.57851 0.256793C7.74882 0.0885523 7.9475 0.00297832 8.17457 7.16168e-05C8.40163 -0.00283509 8.60032 0.0827389 8.77062 0.256793L15.7531 7.39303C15.8439 7.48586 15.9078 7.58159 15.9447 7.68022C15.9816 7.77884 16 7.88617 16 8.00222C16 8.11826 15.9816 8.22559 15.9447 8.32421C15.9078 8.42284 15.8439 8.51857 15.7531 8.6114L8.77062 15.7476C8.606 15.9159 8.40874 16 8.17883 16C7.94892 16 7.74882 15.9159 7.57851 15.7476C7.40821 15.5736 7.32306 15.3691 7.32306 15.1341C7.32306 14.8991 7.40821 14.6946 7.57851 14.5206L13.1049 8.87248Z'
                          fill='currentColor'
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='find-love-work'>
        <div className='find-love-work__main-container'>
          <div className='find-love-work__body'>
            <div className='find-love-work__content'>
              <div className='find-love-work__for-text'>Для гениев</div>
              <h2 className='find-love-work__title title-main-page title-main-page_white'>
                Найти любимую <span>работу.</span>
              </h2>
              <p className='find-love-work__text text-main-page'>
                Представьте, что у вас есть возможность воплотить свои мечты
              </p>
              <p className='find-love-work__subtext'>
                Что если вы сможете построить блистательную карьеру, которая
                станет не только источником радости для вас, но и вдохновением
                для других?
              </p>
            </div>
            <div className='find-love-work__items'>
              <Link href='#' className='find-love-work__item'>
                <div className='find-love-work__item-text'>
                  <div className='find-love-work__item-text-decor'>
                    <span>1</span>
                  </div>
                  Каталог <br /> экспертов
                </div>
                <span className='main-link-arrow main-link-arrow_white'>
                  <span className='main-link-arrow__text'>Подробнее</span>
                  <span className='main-link-arrow__icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='currentColor'
                    >
                      <path
                        d='M13.1049 8.87248H0.851508C0.607413 8.87248 0.404471 8.7898 0.242682 8.62445C0.0808941 8.4591 0 8.25169 0 8.00222C0 7.75274 0.0808941 7.54533 0.242682 7.37998C0.404471 7.21463 0.607413 7.13195 0.851508 7.13195H13.1049L7.56998 1.47518C7.39969 1.30113 7.31596 1.09806 7.31879 0.865974C7.32163 0.633908 7.40821 0.430847 7.57851 0.256793C7.74882 0.0885523 7.9475 0.00297832 8.17457 7.16168e-05C8.40163 -0.00283509 8.60032 0.0827389 8.77062 0.256793L15.7531 7.39303C15.8439 7.48586 15.9078 7.58159 15.9447 7.68022C15.9816 7.77884 16 7.88617 16 8.00222C16 8.11826 15.9816 8.22559 15.9447 8.32421C15.9078 8.42284 15.8439 8.51857 15.7531 8.6114L8.77062 15.7476C8.606 15.9159 8.40874 16 8.17883 16C7.94892 16 7.74882 15.9159 7.57851 15.7476C7.40821 15.5736 7.32306 15.3691 7.32306 15.1341C7.32306 14.8991 7.40821 14.6946 7.57851 14.5206L13.1049 8.87248Z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                </span>
              </Link>
              <Link href='#' className='find-love-work__item'>
                <div className='find-love-work__item-text'>
                  Каталог <br /> вакансий
                </div>
                <span className='main-link-arrow main-link-arrow_white'>
                  <span className='main-link-arrow__text'>Подробнее</span>
                  <span className='main-link-arrow__icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='currentColor'
                    >
                      <path
                        d='M13.1049 8.87248H0.851508C0.607413 8.87248 0.404471 8.7898 0.242682 8.62445C0.0808941 8.4591 0 8.25169 0 8.00222C0 7.75274 0.0808941 7.54533 0.242682 7.37998C0.404471 7.21463 0.607413 7.13195 0.851508 7.13195H13.1049L7.56998 1.47518C7.39969 1.30113 7.31596 1.09806 7.31879 0.865974C7.32163 0.633908 7.40821 0.430847 7.57851 0.256793C7.74882 0.0885523 7.9475 0.00297832 8.17457 7.16168e-05C8.40163 -0.00283509 8.60032 0.0827389 8.77062 0.256793L15.7531 7.39303C15.8439 7.48586 15.9078 7.58159 15.9447 7.68022C15.9816 7.77884 16 7.88617 16 8.00222C16 8.11826 15.9816 8.22559 15.9447 8.32421C15.9078 8.42284 15.8439 8.51857 15.7531 8.6114L8.77062 15.7476C8.606 15.9159 8.40874 16 8.17883 16C7.94892 16 7.74882 15.9159 7.57851 15.7476C7.40821 15.5736 7.32306 15.3691 7.32306 15.1341C7.32306 14.8991 7.40821 14.6946 7.57851 14.5206L13.1049 8.87248Z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                </span>
              </Link>
              <Link href='#' className='find-love-work__item'>
                <div className='find-love-work__item-text'>
                  Как построить карьеру онлайн
                </div>
                <span className='main-link-arrow main-link-arrow_white'>
                  <span className='main-link-arrow__text'>Подробнее</span>
                  <span className='main-link-arrow__icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='currentColor'
                    >
                      <path
                        d='M13.1049 8.87248H0.851508C0.607413 8.87248 0.404471 8.7898 0.242682 8.62445C0.0808941 8.4591 0 8.25169 0 8.00222C0 7.75274 0.0808941 7.54533 0.242682 7.37998C0.404471 7.21463 0.607413 7.13195 0.851508 7.13195H13.1049L7.56998 1.47518C7.39969 1.30113 7.31596 1.09806 7.31879 0.865974C7.32163 0.633908 7.40821 0.430847 7.57851 0.256793C7.74882 0.0885523 7.9475 0.00297832 8.17457 7.16168e-05C8.40163 -0.00283509 8.60032 0.0827389 8.77062 0.256793L15.7531 7.39303C15.8439 7.48586 15.9078 7.58159 15.9447 7.68022C15.9816 7.77884 16 7.88617 16 8.00222C16 8.11826 15.9816 8.22559 15.9447 8.32421C15.9078 8.42284 15.8439 8.51857 15.7531 8.6114L8.77062 15.7476C8.606 15.9159 8.40874 16 8.17883 16C7.94892 16 7.74882 15.9159 7.57851 15.7476C7.40821 15.5736 7.32306 15.3691 7.32306 15.1341C7.32306 14.8991 7.40821 14.6946 7.57851 14.5206L13.1049 8.87248Z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                </span>
              </Link>
              <Link href='#' className='find-love-work__item'>
                <div className='find-love-work__item-text'>
                  Учимся ставить цели и реализуем мечты
                </div>
                <span className='main-link-arrow main-link-arrow_white'>
                  <span className='main-link-arrow__text'>Подробнее</span>
                  <span className='main-link-arrow__icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='currentColor'
                    >
                      <path
                        d='M13.1049 8.87248H0.851508C0.607413 8.87248 0.404471 8.7898 0.242682 8.62445C0.0808941 8.4591 0 8.25169 0 8.00222C0 7.75274 0.0808941 7.54533 0.242682 7.37998C0.404471 7.21463 0.607413 7.13195 0.851508 7.13195H13.1049L7.56998 1.47518C7.39969 1.30113 7.31596 1.09806 7.31879 0.865974C7.32163 0.633908 7.40821 0.430847 7.57851 0.256793C7.74882 0.0885523 7.9475 0.00297832 8.17457 7.16168e-05C8.40163 -0.00283509 8.60032 0.0827389 8.77062 0.256793L15.7531 7.39303C15.8439 7.48586 15.9078 7.58159 15.9447 7.68022C15.9816 7.77884 16 7.88617 16 8.00222C16 8.11826 15.9816 8.22559 15.9447 8.32421C15.9078 8.42284 15.8439 8.51857 15.7531 8.6114L8.77062 15.7476C8.606 15.9159 8.40874 16 8.17883 16C7.94892 16 7.74882 15.9159 7.57851 15.7476C7.40821 15.5736 7.32306 15.3691 7.32306 15.1341C7.32306 14.8991 7.40821 14.6946 7.57851 14.5206L13.1049 8.87248Z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='new-culture'>
        <div className='new-culture__main-container'>
          <div className='new-culture__items'>
            <div className='new-culture__content'>
              <div className='new-culture__box'>
                <div className='new-culture__for-text'>Для Бизнеса</div>
                <h2 className='new-culture__title title-main-page'>
                  Новая культура в <span>бизнесе.</span>
                </h2>

                <div className='new-culture__list'>
                  <div className='new-culture__item'>
                    <div className='new-culture__icon'>
                      <img src='/images/star-white.svg' alt='' />
                    </div>
                    <div className='new-culture__body'>
                      <div className='new-culture__item-title'>
                        Мир, где границы растворяются
                      </div>
                      <div className='new-culture__item-text'>
                        Работа с лучшими специалистами из любой точки мира.
                      </div>
                    </div>
                  </div>
                  <div className='new-culture__item'>
                    <div className='new-culture__icon'>
                      <img src='/images/star-white.svg' alt='' />
                    </div>
                    <div className='new-culture__body'>
                      <div className='new-culture__item-title'>
                        Быстрое масштабирование
                      </div>
                      <div className='new-culture__item-text'>
                        С нами вы сможете быстро расширить свою команду для
                        крупного проекта
                      </div>
                    </div>
                  </div>
                  <div className='new-culture__item'>
                    <div className='new-culture__icon'>
                      <img src='/images/star-white.svg' alt='' />
                    </div>
                    <div className='new-culture__body'>
                      <div className='new-culture__item-title'>
                        Не нужно платить заранее
                      </div>
                      <div className='new-culture__item-text'>
                        Вы платите только за выполненную работу, что
                        обеспечивает безопасность и экономию средств.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='new-culture__register'>
              <img
                className='new-culture__register-image'
                src='/images/new-culture-2.jpg'
                alt=''
              />

              <div className='new-culture__register-box'>
                <div className='new-culture__subtitle title-main-page title-main-page_subtitle'>
                  <span>Компания</span> Гений “
                </div>
                <p className='new-culture__text'>
                  Ваш надежный инновационный партнер в бизнесе.
                </p>
                <Link href='#' className='new-culture__link-register'>
                  Зарегистрироваться
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='secure-payment'>
        <div className='secure-payment__main-container'>
          <div className='secure-payment__content'>
            <div className='secure-payment__body'>
              <div className='secure-payment__title title-main-page'>
                Безопасная оплата всех <span>проектов</span>
              </div>
              <div className='secure-payment__text text-main-page'>
                Оплата за работу переводятся исполнителю только после того, как
                работа будет завершена и принята вами.
              </div>
              <Link href='#' className='secure-payment__link main-link-arrow'>
                <span className='main-link-arrow__text'>Подробнее</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                >
                  <path
                    d='M13.1049 8.87248H0.851508C0.607413 8.87248 0.404471 8.7898 0.242682 8.62445C0.0808941 8.4591 0 8.25169 0 8.00222C0 7.75274 0.0808941 7.54533 0.242682 7.37998C0.404471 7.21463 0.607413 7.13195 0.851508 7.13195H13.1049L7.56998 1.47518C7.39969 1.30113 7.31596 1.09806 7.31879 0.865974C7.32163 0.633908 7.40821 0.430847 7.57851 0.256793C7.74882 0.0885523 7.9475 0.00297832 8.17457 7.16168e-05C8.40163 -0.00283509 8.60032 0.0827389 8.77062 0.256793L15.7531 7.39303C15.8439 7.48586 15.9078 7.58159 15.9447 7.68022C15.9816 7.77884 16 7.88617 16 8.00222C16 8.11826 15.9816 8.22559 15.9447 8.32421C15.9078 8.42284 15.8439 8.51857 15.7531 8.6114L8.77062 15.7476C8.606 15.9159 8.40874 16 8.17883 16C7.94892 16 7.74882 15.9159 7.57851 15.7476C7.40821 15.5736 7.32306 15.3691 7.32306 15.1341C7.32306 14.8991 7.40821 14.6946 7.57851 14.5206L13.1049 8.87248Z'
                    fill='currentColor'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TextBlock />

      <section className='genius-banner'>
        <div className='genius-banner__main-container'>
          <div className='genius-banner__items'>
            <div className='genius-banner__content'>
              <div className='genius-banner__top-text'>
                Гении, изменившие мир
              </div>
              <div className='genius-banner__body'>
                <img src='/images/genius-banner-icon.svg' alt='' />
                <div className='genius-banner__text'>
                  Ваше время ограничено, не тратьте его, живя чужой жизнью
                </div>
                <div className='genius-banner__bottom-text'>Стив Джобс</div>
              </div>
            </div>
            <div className='genius-banner__image'>
              <img src='/images/steve-jobs.jpg' alt='' />
            </div>
          </div>
        </div>
      </section>

      <section className='your-inspiration'>
        <div className='your-inspiration__main-container'>
          <div className='your-inspiration__content'>
            <div className='your-inspiration__body'>
              <h2 className='your-inspiration__title title-main-page title-main-page_white-orange'>
                Ваше <span>вдохновение</span>
              </h2>
              <div className='your-inspiration__subtitle text-main-page text-main-page_white'>
                Успех в бизнесе, карьере <br /> и личное счастье тесно связаны
              </div>
              <p className='your-inspiration__text'>
                В этом разделе мы обсуждаем новые технологии, тренды, психологию
                бизнеса, культуру и этику отношений
              </p>
              <Link href='#' className='your-inspiration__link main-link-arrow'>
                <span className='main-link-arrow__text'>Подробнее</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                >
                  <path
                    d='M9.82866 6.65436H0.638631C0.455559 6.65436 0.303353 6.59235 0.182012 6.46834C0.0606706 6.34433 0 6.18877 0 6.00166C0 5.81456 0.0606706 5.659 0.182012 5.53499C0.303353 5.41097 0.455559 5.34897 0.638631 5.34897H9.82866L5.67748 1.10639C5.54977 0.975845 5.48697 0.823544 5.48909 0.649481C5.49123 0.475431 5.55616 0.323136 5.68388 0.192595C5.81161 0.0664142 5.96062 0.00223374 6.13092 5.37126e-05C6.30122 -0.00212632 6.45024 0.0620542 6.57796 0.192595L11.8148 5.54478C11.8829 5.61439 11.9308 5.68619 11.9585 5.76017C11.9862 5.83413 12 5.91463 12 6.00166C12 6.08869 11.9862 6.16919 11.9585 6.24316C11.9308 6.31713 11.8829 6.38893 11.8148 6.45855L6.57796 11.8107C6.4545 11.9369 6.30656 12 6.13412 12C5.96169 12 5.81161 11.9369 5.68388 11.8107C5.55616 11.6802 5.49229 11.5268 5.49229 11.3506C5.49229 11.1743 5.55616 11.021 5.68388 10.8904L9.82866 6.65436Z'
                    fill='currentColor'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='catalog-specialties'>
        <div className='catalog-specialties__main-container'>
          <h2 className='catalog-specialties__title title-main-page'>
            Каталог <span>специальностей.</span>
          </h2>
          <div className='catalog-specialties__items'>
            <div className='catalog-specialties__categories'>
              <button className='catalog-specialties__button'>
                Веб-разработка
              </button>
              <button className='catalog-specialties__button'>
                Мобильная разработка
              </button>
              <button className='catalog-specialties__button'>
                Дизайн и искусство
              </button>
              <button className='catalog-specialties__button'>
                Веб-разработка
              </button>
              <button className='catalog-specialties__button'>
                Тексты и перевод
              </button>
              <button className='catalog-specialties__button'>
                Маркетинг и SEO
              </button>
              <button className='catalog-specialties__button'>
                IT и сетевый технологии
              </button>
              <button className='catalog-specialties__button'>
                Фото и видео
              </button>
              <button className='catalog-specialties__button'>
                Бизнес-консультации
              </button>
              <button className='catalog-specialties__button'>
                Обучение и консультации
              </button>
              <button className='catalog-specialties__button'>
                Аудио и музыка
              </button>
              <button className='catalog-specialties__button'>
                Игры и AR / VR
              </button>
              <button className='catalog-specialties__button'>
                Архитектурный инжиниринг
              </button>
              <button className='catalog-specialties__button'>
                Продуктовый менеджмент
              </button>
            </div>
            <div className='catalog-specialties__content'>
              <div className='catalog-specialties__body'>
                <div className='catalog-specialties__category-heading'>
                  Заголовок категории
                </div>
                <ul className='catalog-specialties__list'>
                  <li className='catalog-specialties__list-item'>
                    <Link href='#' className='catalog-specialties__list-link'>
                      Мобильная разработка
                    </Link>
                  </li>
                  <li className='catalog-specialties__list-item'>
                    <Link href='#' className='catalog-specialties__list-link'>
                      Дизайн и искусство
                    </Link>
                  </li>
                  <li className='catalog-specialties__list-item'>
                    <Link href='#' className='catalog-specialties__list-link'>
                      Тексты и перевод
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='catalog-specialties__list-link'>
                      Маркетинг и SEO
                    </Link>
                  </li>
                  <li className='catalog-specialties__list-item'>
                    <Link href='#' className='catalog-specialties__list-link'>
                      IT и сетевый технологии
                    </Link>
                  </li>
                  <li className='catalog-specialties__list-item'>
                    <Link href='#' className='catalog-specialties__list-link'>
                      Фото и видео
                    </Link>
                  </li>
                  <li className='catalog-specialties__list-item'>
                    <Link href='#' className='catalog-specialties__list-link'>
                      Бизнес-консультации
                    </Link>
                  </li>
                  <li className='catalog-specialties__list-item'>
                    <Link href='#' className='catalog-specialties__list-link'>
                      Обучение и консультации
                    </Link>
                  </li>
                  <li className='catalog-specialties__list-item'>
                    <Link href='#' className='catalog-specialties__list-link'>
                      Аудио и музыка
                    </Link>
                  </li>
                  <li className='catalog-specialties__list-item'>
                    <Link href='#' className='catalog-specialties__list-link'>
                      Игры и AR / VR
                    </Link>
                  </li>
                  <li className='catalog-specialties__list-item'>
                    <Link href='#' className='catalog-specialties__list-link'>
                      Архитектурный инжиниринг
                    </Link>
                  </li>
                  <li className='catalog-specialties__list-item'>
                    <Link href='#' className='catalog-specialties__list-link'>
                      Продуктовый менеджмент
                    </Link>
                  </li>
                </ul>
              </div>

              <div className='catalog-specialties__body'>
                <div className='catalog-specialties__category-heading'>
                  Заголовок категории
                </div>
                <ul className='catalog-specialties__list'>
                  <li className='catalog-specialties__list-item'>
                    <Link href='#' className='catalog-specialties__list-link'>
                      Мобильная разработка
                    </Link>
                  </li>
                  <li className='catalog-specialties__list-item'>
                    <Link href='#' className='catalog-specialties__list-link'>
                      Дизайн и искусство
                    </Link>
                  </li>
                  <li className='catalog-specialties__list-item'>
                    <Link href='#' className='catalog-specialties__list-link'>
                      Тексты и перевод
                    </Link>

                    <Link href='#' className='catalog-specialties__list-link'>
                      Маркетинг и SEO
                    </Link>
                  </li>
                </ul>

                <div className='catalog-specialties__category-heading'>
                  Заголовок категории
                </div>
                <ul className='catalog-specialties__list'>
                  <li className='catalog-specialties__list-item'>
                    <Link href='#' className='catalog-specialties__list-link'>
                      Мобильная разработка
                    </Link>
                  </li>
                  <li className='catalog-specialties__list-item'>
                    <Link href='#' className='catalog-specialties__list-link'>
                      Дизайн и искусство
                    </Link>
                  </li>
                  <li className='catalog-specialties__list-item'>
                    <Link href='#' className='catalog-specialties__list-link'>
                      Тексты и перевод
                    </Link>

                    <Link href='#' className='catalog-specialties__list-link'>
                      Маркетинг и SEO
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Questions />
    </main>
  )
}
