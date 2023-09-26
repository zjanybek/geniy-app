'use client'

import { useState } from 'react'

export const Questions = () => {
  const [isShow, setIsShow] = useState(Array(2).fill(false)) // Используйте нужный размер массива

  const toggleCollapse = (index) => {
    const newIsShow = Array(isShow.length).fill(false)
    newIsShow[index] = !isShow[index]

    setIsShow(newIsShow)
  }

  return (
    <section className='questions'>
      <div className='questions__container'>
        <div className='questions__content'>
          <h2 className='questions__title title-main-page'>
            Часто задаваемые <span>вопросы</span>
          </h2>
          <div className='questions__items'>
            {[1, 2].map((_, index) => {
              return (
                <div
                  key={index}
                  className={`questions__item ${
                    isShow[index] ? 'questions__item-active' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleCollapse(index)}
                    className='questions__button'
                  >
                    <h2 className='questions__button-text'>
                      Как зарегистрироваться на платформе ‘Гений’?
                    </h2>
                    <span className='questions__button-arrow'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='23'
                        height='14'
                        viewBox='0 0 23 14'
                        fill='none'
                      >
                        <path
                          d='M11.5 13.5706L0 2.42471L2.06042 0.427734L11.5 9.62309L20.9396 0.474176L23 2.47115L11.5 13.5706Z'
                          fill='currentColor'
                        />
                      </svg>
                    </span>
                  </button>
                  <div className={`questions__collapse`}>
                    <div style={{ minHeight: 0 }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quasi distinctio molestias deserunt quas temporibus, magni
                      illum ipsa, minima sequi saepe ad voluptas amet nesciunt
                      maiores, placeat cumque. Autem eaque temporibus non
                      officia ullam unde explicabo fuga sapiente repudiandae
                      quod, libero, aspernatur a optio aliquid quam omnis
                      corporis facilis voluptates quisquam eos ab! Rem alias
                      amet similique dolorum, atque maiores, eius enim eos
                      ducimus reiciendis quis dicta obcaecati! Sequi mollitia ex
                      fuga
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
