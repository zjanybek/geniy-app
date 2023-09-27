'use client'

import { useEffect, useState } from 'react'

const textItems = [
  'Каким мы видим этот мир? Мы считаем, что каждый человек гениален по своей природе.',
  ' Мы вдохновляем друг друга на поиск новых решений. Мы стремимся к совершенству.',
  // 'Мы стремимся к совершенству.',
  ' Присоединившись к нашей платформе, вы станете частью новой культуры общения и бизнеса, где этика, устремленность и профессионализм превыше всего.',
  ' Мы создаем не просто проекты, а творим истории и реализуем мечты.'
]

export const TextBlock = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const textItems = document.querySelectorAll('.section-text-block__item')
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      textItems.forEach((item, index) => {
        const offsetTop = item.offsetTop

        if (scrollPosition >= offsetTop - windowHeight / 2) {
          setActiveIndex(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Вызываем функцию обработки скролла при загрузке страницы

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className='section-text-block'>
      <div className='section-text-block__container'>
        <span className='section-text-block__decor'>
          <img src='/images/decor-quotes.svg' alt='' />
        </span>
        <p className='section-text-block__texts'>
          {textItems.map((text, index) => (
            <span
              key={index}
              className={`section-text-block__item ${
                activeIndex === index ? 'active' : ''
              }`}
            >
              {text}
            </span>
          ))}

          {/* <span className='section-text-block__item'>
            Каким мы видим этот мир? Мы считаем, что каждый человек гениален по
            своей природе.
          </span>
          <span className='section-text-block__item'>
            Мы вдохновляем друг друга на поиск новых решений.
          </span>
          <span className='section-text-block__item'>
            Мы стремимся к совершенству.
          </span>
          <span className='section-text-block__item'>
            Присоединившись к нашей платформе, вы станете частью новой культуры
            общения и бизнеса, где этика, устремленность и профессионализм
            превыше всего.
          </span>
          <span className='section-text-block__item'>
            Мы создаем не просто проекты, а творим истории и реализуем мечты.
          </span> */}
        </p>
      </div>
    </section>
  )
}
