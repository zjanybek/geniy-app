'use client'

import { useState } from 'react'

const CardRating = ({ initialValue, maxRating = 5 }) => {
  const [rating, setRating] = useState(initialValue)

  const handleRatingClick = (newRating) => {
    setRating(newRating)
  }

  const remainder = rating % 1

  return (
    <div className='flex items-start space-x-1'>
      {Array.from({ length: maxRating }, (_, index) => (
        <svg
          key={index}
          className={`${index < rating ? 'text-greenDark' : 'text-gray-400'}`}
          onClick={() => handleRatingClick(index + 1)}
          style={{ cursor: 'pointer' }}
          width='14'
          height='14'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 14 14'
        >
          <path d='M7 11.6828L3.51263 13.8831C3.37675 13.9705 3.23543 14.0089 3.08868 13.9983C2.94193 13.9876 2.81232 13.9386 2.69984 13.8512C2.58736 13.7638 2.50245 13.652 2.44509 13.5159C2.38772 13.3797 2.37617 13.227 2.41045 13.0578L3.33269 8.9018L0.252428 6.09807C0.126006 5.98254 0.0481134 5.85166 0.0187502 5.70541C-0.010613 5.55917 -0.00548867 5.41656 0.0341232 5.27761C0.0716801 5.13866 0.145831 5.02215 0.256576 4.92808C0.367322 4.83401 0.505718 4.77797 0.671764 4.75994L4.74069 4.38806L6.31713 0.463871C6.38036 0.307091 6.47652 0.190581 6.60561 0.11434C6.73471 0.0381138 6.86617 0 7 0C7.13383 0 7.26529 0.0381138 7.39439 0.11434C7.52348 0.190581 7.61964 0.307091 7.68287 0.463871L9.25931 4.38806L13.3313 4.75994C13.4953 4.77797 13.6327 4.83401 13.7434 4.92808C13.8542 5.02215 13.9283 5.13866 13.9659 5.27761C14.0055 5.41656 14.0106 5.55917 13.9812 5.70541C13.9519 5.85166 13.874 5.98254 13.7476 6.09807L10.6673 8.9018L11.5896 13.0578C11.6238 13.227 11.6123 13.3797 11.5549 13.5159C11.4976 13.652 11.4126 13.7638 11.3002 13.8512C11.1877 13.9386 11.0581 13.9876 10.9113 13.9983C10.7646 14.0089 10.6233 13.9705 10.4874 13.8831L7 11.6828Z' />
        </svg>
      ))}
    </div>
  )
}

export default CardRating
