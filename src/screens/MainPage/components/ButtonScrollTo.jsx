'use client'

import { useEffect } from 'react'

export const ButtonScrollTo = ({ className }) => {
  const handleClick = () => {
    const scrollToSection = document.getElementById('section-three-steps')

    console.log(scrollToSection)

    console.log(1)

    const topOffset = 0
    const elementPosition = scrollToSection.getBoundingClientRect().top
    const offsetPosition = elementPosition - topOffset

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  useEffect(() => {}, [])

  return (
    <button onClick={() => handleClick()} className={className}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
      >
        <path
          d='M20.0009 25.0555C19.8157 25.0555 19.6444 25.0255 19.487 24.9653C19.3296 24.9051 19.1768 24.8009 19.0286 24.6528L10.9731 16.5972C10.7046 16.3287 10.5703 16.0046 10.5703 15.625C10.5703 15.2454 10.7046 14.9213 10.9731 14.6528C11.2416 14.3843 11.5703 14.25 11.9592 14.25C12.3481 14.25 12.6768 14.3843 12.9453 14.6528L20.0009 21.7084L27.0564 14.6528C27.3249 14.3843 27.649 14.25 28.0286 14.25C28.4083 14.25 28.7323 14.3843 29.0009 14.6528C29.2694 14.9213 29.4036 15.25 29.4036 15.6389C29.4036 16.0278 29.2694 16.3565 29.0009 16.625L20.9731 24.6528C20.8249 24.8009 20.6721 24.9051 20.5147 24.9653C20.3573 25.0255 20.186 25.0555 20.0009 25.0555Z'
          fill='currentColor'
        />
      </svg>
    </button>
  )
}
