'use client'

import { useState } from 'react'

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='experts-filters__border-item'>
      <button
        onClick={toggleAccordion}
        className='experts-filters__button-accordion'
      >
        <span className='experts-filters__button-text'>{title}</span>
        <div className='experts-filters__up-icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='9'
            viewBox='0 0 14 9'
            fill='none'
          >
            <path
              d='M6.98969 3.40813e-07C7.12735 3.52848e-07 7.25469 0.0250572 7.37168 0.0751709C7.4887 0.125307 7.60227 0.212068 7.71239 0.335453L13.7006 7.045C13.9002 7.26863 14 7.53855 14 7.85475C14 8.17096 13.9002 8.44088 13.7006 8.66451C13.501 8.88817 13.2566 9 12.9676 9C12.6785 9 12.4341 8.88817 12.2345 8.66451L6.98969 2.78788L1.74483 8.66451C1.54523 8.88817 1.30433 9 1.02212 9C0.739934 9 0.499033 8.88817 0.299419 8.66451C0.0998059 8.44088 -8.8086e-07 8.1671 -8.52543e-07 7.8432C-8.24227e-07 7.51929 0.099806 7.24551 0.29942 7.02185L6.26698 0.335453C6.3771 0.212068 6.49067 0.125307 6.60769 0.0751708C6.72469 0.0250572 6.85202 3.28778e-07 6.98969 3.40813e-07Z'
              fill='currentColor'
            />
          </svg>
        </div>
      </button>

      {isOpen && children}
    </div>
  )
}

export default Accordion
