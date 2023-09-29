import Link from 'next/link'

export const ThreeSteps = () => {
  return (
    <section className='three-steps'>
      <div className='three-steps__main-container'>
        <div className='three-steps__content'>
          <h2
            id='section-three-steps'
            className='three-steps__title title-main-page'
          >
            Всего три шага <br />
            <span>и готово.</span>
          </h2>
          <div className='three-steps__items'>
            <div className='three-steps__column'>
              <div className='three-steps__item three-steps-item'>
                <div className='three-steps-item__image'>
                  <img src='images/star-black.svg' alt='' />
                </div>
                <div className='three-steps-item__body'>
                  <div className='three-steps-item__title'>
                    Бесплатно зарегистрируйтесь
                  </div>
                  <div className='three-steps-item__text'>
                    Создайте свой профиль, расскажите о себе или о вашей
                    компании.{' '}
                  </div>
                  <Link
                    href='#'
                    className='three-steps-item__link main-link-arrow'
                  >
                    <span className='main-link-arrow__text'>Регистрация</span>
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
            <div className='three-steps__column'>
              <div className='three-steps__item three-steps-item'>
                <div className='three-steps-item__image'>
                  <img src='images/star-black.svg' alt='' />
                </div>
                <div className='three-steps-item__body'>
                  <div className='three-steps-item__title'>
                    Разместите задание или вакансию
                  </div>
                  <div className='three-steps-item__text'>
                    Опишите, что вам нужно: конкретную работу, вакансию или
                    проект.
                  </div>
                  <Link
                    href='#'
                    className='three-steps-item__link main-link-arrow'
                  >
                    <span className='main-link-arrow__text'>
                      Опубликовать задание
                    </span>
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
            <div className='three-steps__column'>
              <div className='three-steps__item three-steps-item'>
                <div className='three-steps-item__image'>
                  <img src='images/star-black.svg' alt='' />
                </div>
                <div className='three-steps-item__title'>Выберите эксперта</div>
                <div className='three-steps-item__body'>
                  <div className='three-steps-item__text'>
                    Общайтесь с кандидатами и выберите того, кто вам больше
                    всего подходит.
                  </div>
                  <Link
                    href='#'
                    className='three-steps-item__link main-link-arrow'
                  >
                    <span className='main-link-arrow__text'>
                      Каталог экспертов
                    </span>
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
          </div>
        </div>
      </div>
    </section>
  )
}
