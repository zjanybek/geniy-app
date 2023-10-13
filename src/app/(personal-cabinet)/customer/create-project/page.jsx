'use client'

import Link from 'next/link'
import { useState } from 'react'

import FifthStep from './components/FifthStep'
import FirstStep from './components/FirstStep'
import FourthStep from './components/FourthStep'
import SecondStep from './components/SecondStep'
import ThirdStep from './components/ThirdStep'

const page = () => {
  const [step, setStep] = useState(0)

  const stepDisplay = () => {
    if (step === 0) {
      return <FirstStep />
    } else if (step === 1) {
      return <SecondStep />
    } else if (step === 2) {
      return <ThirdStep />
    } else if (step === 3) {
      return <FourthStep />
    } else if (step === 4) {
      return <FifthStep />
    }
  }

  return (
    <div className='py-10'>
      <div className='create-project__second-container'>
        <div className='mb-2'>
          <div className='mb-1.5 text-12 uppercase leading-none tracking-[0.12px] text-fontBlack'>
            Для заказчика
          </div>
          <h1 className='font-secondFamily text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-fontBlack'>
            Личный кабинет
          </h1>

          <div className='mt-[2px] flex items-center gap-x-2'>
            <div className='flex items-center'>
              <span className='mr-[10px] text-12 tracking-[-0.48px] text-fontGrey'>
                Главная
              </span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='5'
                height='8'
                viewBox='0 0 5 8'
                fill='none'
              >
                <path
                  d='M5 3.99411C5 4.07277 4.98608 4.14553 4.95824 4.21239C4.93039 4.27926 4.88218 4.34415 4.81364 4.40708L1.08611 7.82892C0.961872 7.94297 0.811916 8 0.636248 8C0.460579 8 0.310624 7.94297 0.186382 7.82892C0.0621272 7.71486 -1.85674e-08 7.57523 -2.57882e-08 7.41004C-3.30089e-08 7.24484 0.0621271 7.10522 0.186382 6.99117L3.45118 3.99411L0.186382 0.997045C0.0621269 0.882991 -3.17112e-07 0.745333 -3.24161e-07 0.584071C-3.31209e-07 0.42282 0.0621268 0.285162 0.186381 0.171097C0.310623 0.0570321 0.462719 -2.02261e-08 0.642668 -2.80919e-08C0.822617 -3.59577e-08 0.974718 0.0570321 1.09897 0.171097L4.81364 3.58113C4.88218 3.64406 4.93039 3.70896 4.95824 3.77582C4.98608 3.84268 5 3.91544 5 3.99411Z'
                  fill='#8E8E93'
                />
              </svg>
            </div>
            <div className='flex items-center'>
              <span className='mr-[10px] text-12 tracking-[-0.48px] text-fontGrey'>
                Личный кабинет
              </span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='5'
                height='8'
                viewBox='0 0 5 8'
                fill='none'
              >
                <path
                  d='M5 3.99411C5 4.07277 4.98608 4.14553 4.95824 4.21239C4.93039 4.27926 4.88218 4.34415 4.81364 4.40708L1.08611 7.82892C0.961872 7.94297 0.811916 8 0.636248 8C0.460579 8 0.310624 7.94297 0.186382 7.82892C0.0621272 7.71486 -1.85674e-08 7.57523 -2.57882e-08 7.41004C-3.30089e-08 7.24484 0.0621271 7.10522 0.186382 6.99117L3.45118 3.99411L0.186382 0.997045C0.0621269 0.882991 -3.17112e-07 0.745333 -3.24161e-07 0.584071C-3.31209e-07 0.42282 0.0621268 0.285162 0.186381 0.171097C0.310623 0.0570321 0.462719 -2.02261e-08 0.642668 -2.80919e-08C0.822617 -3.59577e-08 0.974718 0.0570321 1.09897 0.171097L4.81364 3.58113C4.88218 3.64406 4.93039 3.70896 4.95824 3.77582C4.98608 3.84268 5 3.91544 5 3.99411Z'
                  fill='#8E8E93'
                />
              </svg>
            </div>
            <div className='flex items-center'>
              <span className='mr-[10px] text-12 tracking-[-0.48px] text-fontGrey'>
                Мои публикации
              </span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='5'
                height='8'
                viewBox='0 0 5 8'
                fill='none'
              >
                <path
                  d='M5 3.99411C5 4.07277 4.98608 4.14553 4.95824 4.21239C4.93039 4.27926 4.88218 4.34415 4.81364 4.40708L1.08611 7.82892C0.961872 7.94297 0.811916 8 0.636248 8C0.460579 8 0.310624 7.94297 0.186382 7.82892C0.0621272 7.71486 -1.85674e-08 7.57523 -2.57882e-08 7.41004C-3.30089e-08 7.24484 0.0621271 7.10522 0.186382 6.99117L3.45118 3.99411L0.186382 0.997045C0.0621269 0.882991 -3.17112e-07 0.745333 -3.24161e-07 0.584071C-3.31209e-07 0.42282 0.0621268 0.285162 0.186381 0.171097C0.310623 0.0570321 0.462719 -2.02261e-08 0.642668 -2.80919e-08C0.822617 -3.59577e-08 0.974718 0.0570321 1.09897 0.171097L4.81364 3.58113C4.88218 3.64406 4.93039 3.70896 4.95824 3.77582C4.98608 3.84268 5 3.91544 5 3.99411Z'
                  fill='#8E8E93'
                />
              </svg>
            </div>
            <div className='flex items-center'>
              <span className='mr-[10px] text-12 tracking-[-0.48px] text-fontGrey'>
                Разместить задание
              </span>
            </div>
          </div>
        </div>

        <Link href='#' className='mb-3.5 inline-flex items-center'>
          <div className='up-icon mr-1.5 h-[11px] w-[6px] text-greenDark'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              role='image'
              viewBox='0 0 6 11'
              fill='none'
            >
              <path d='M2.57958e-07 5.50737C2.62256e-07 5.40903 0.0167048 5.31808 0.0501135 5.23451C0.0835379 5.15093 0.141379 5.06981 0.223635 4.99115L4.69666 0.71385C4.84575 0.571283 5.0257 0.5 5.2365 0.5C5.44731 0.5 5.62725 0.571283 5.77634 0.71385C5.92545 0.856431 6 1.03097 6 1.23746C6 1.44395 5.92545 1.61847 5.77634 1.76104L1.85858 5.50737L5.77634 9.25369C5.92545 9.39626 6 9.56833 6 9.76991C6 9.97147 5.92545 10.1435 5.77634 10.2861C5.62725 10.4287 5.44474 10.5 5.2288 10.5C5.01286 10.5 4.83034 10.4287 4.68123 10.2861L0.223635 6.02358C0.141379 5.94493 0.0835378 5.86381 0.0501134 5.78022C0.0167048 5.69665 2.5366e-07 5.6057 2.57958e-07 5.50737Z' />
            </svg>
          </div>
          <span className='text-15 leading-[2.33] tracking-[-0.6px] text-greenDark'>
            Возврат в Мои публикации
          </span>
        </Link>

        <div className='max-w-[720px] rounded-[30px] border border-[#DBDBDB] px-[30px] pb-[66px] pt-[32px]'>
          {stepDisplay()}

          {step === 4 ? (
            <div className='mt-[60px] flex items-center gap-x-[15px]'>
              <div>
                <button
                  onClick={() => setStep((currStep) => currStep - 1)}
                  className='btn-secondary h-10 px-5'
                >
                  Предыдущий шаг
                </button>
              </div>
              <div className='flex-auto'>
                <button
                  onClick={() => setStep((currStep) => currStep + 1)}
                  className='btn-primary h-10 px-5'
                >
                  Сохранить
                </button>
              </div>

              <div>
                <button
                  onClick={() => setStep((currStep) => currStep + 1)}
                  className='btn-primary h-10 px-5'
                >
                  Опубликовать
                </button>
              </div>
            </div>
          ) : (
            <div className='mt-[60px]'>
              <button
                disabled={step == 0}
                onClick={() => setStep((currStep) => currStep - 1)}
                className='btn-secondary mr-[18px] h-10 px-5'
              >
                Предыдущий шаг
              </button>
              <button
                onClick={() => setStep((currStep) => currStep + 1)}
                className='btn-primary h-10 px-5'
              >
                Сохранить и продолжить
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default page
