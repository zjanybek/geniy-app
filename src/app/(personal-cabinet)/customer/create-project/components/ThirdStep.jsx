'use client'

import { useState } from 'react'

import Radio from '@/components/ui/Radio/Radio'

const tags = [
  'Дизайн логотипа',
  'Брендинг',
  'Фирменный стиль',
  'Иллюстрации',
  'Веторная графика',
  'Дизайн логотипа',
  'Брендинг',
  'Фирменный стиль',
  'Иллюстрации',
  'Веторная графика'
]

const ThirdStep = () => {
  const [payment, setPayment] = useState()

  return (
    <div className=''>
      <div className='border-b border-[#DBDBDB] pb-7'>
        <div>
          <div className='mb-2 text-22 leading-none tracking-[-0.44px] text-fontBlack'>
            Требования к исполнителю
          </div>
          {/*  */}
        </div>
        <div className='font-secondFamily text-24 font-bold leading-[1.12] tracking-[-0.48px] text-greenDark'>
          Шаг 3/5
        </div>
      </div>

      <div className='pt-[34px]'>
        <div className='mb-[34px]'>
          <div className='mb-2 text-17 font-medium leading-[1.3] tracking-[-0.17px] text-fontBlack'>
            Требуемый опыт исполнителя
          </div>
          <span className='mb-6 inline-block max-w-[575px] text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
            Выберите уровень опыта, который, по вашему мнению, необходим для
            выполнения вашего задания.
          </span>

          <div className='flex items-center gap-x-[30px]'>
            <div className='flex h-[197px] flex-[0_0_190px] flex-col items-center justify-center rounded-[20px] border border-[#D9D9D9]'>
              <div className='up-icon mb-4 h-[30px] w-[34px] text-[#67D4CF]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  role='image'
                  viewBox='0 0 34 30'
                  fill='none'
                >
                  <path d='M11.8346 9.32609L16.3489 0H17.6511L22.1654 9.32609H11.8346ZM15.8369 30L0.343218 11.6259H15.8369V30ZM18.1631 30V11.6259H33.6567L18.1631 30ZM24.7846 9.32609L20.2785 0H27.2505C27.8841 0 28.463 0.162635 28.9871 0.487903C29.5112 0.813172 29.9227 1.24745 30.2215 1.79073L34 9.32609H24.7846ZM0 9.32609L3.78547 1.79073C4.07962 1.24745 4.48876 0.813172 5.01289 0.487903C5.53704 0.162635 6.1159 0 6.74948 0H13.7215L9.22235 9.32609H0Z' />
                </svg>
              </div>
              <div className='mb-[2px] text-15 leading-[1.33] tracking-[-0.6px] text-fontBlack'>
                Начинающий
              </div>
              <span className='mb-[13px] text-13 leading-[1.53] tracking-[-0.52px] text-fontGrey'>
                Опыт менее 2 лет
              </span>
              <Radio id='o_1' />
            </div>
            <div className='flex h-[197px] flex-[0_0_190px] flex-col items-center justify-center rounded-[20px] border border-[#D9D9D9]'>
              <div className='up-icon mb-4 h-[30px] w-[34px] text-[#007AFF]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  role='image'
                  viewBox='0 0 34 30'
                  fill='none'
                >
                  <path d='M11.8346 9.32609L16.3489 0H17.6511L22.1654 9.32609H11.8346ZM15.8369 30L0.343218 11.6259H15.8369V30ZM18.1631 30V11.6259H33.6567L18.1631 30ZM24.7846 9.32609L20.2785 0H27.2505C27.8841 0 28.463 0.162635 28.9871 0.487904C29.5112 0.813172 29.9227 1.24745 30.2215 1.79073L34 9.32609H24.7846ZM0 9.32609L3.78547 1.79073C4.07962 1.24745 4.48876 0.813172 5.01289 0.487904C5.53704 0.162635 6.1159 0 6.74948 0H13.7215L9.22235 9.32609H0Z' />
                </svg>
              </div>
              <div className='mb-[2px] text-15 leading-[1.33] tracking-[-0.6px] text-fontBlack'>
                Продвинутый
              </div>
              <span className='mb-[13px] text-13 leading-[1.53] tracking-[-0.52px] text-fontGrey'>
                Опыт 2 - 5 лет
              </span>
              <Radio id='o_2' />
            </div>
            <div className='flex h-[197px] flex-[0_0_190px] flex-col items-center justify-center rounded-[20px] border border-[#D9D9D9]'>
              <div className='up-icon mb-4 h-[30px] w-[34px] text-[#AF52DE]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  role='image'
                  viewBox='0 0 34 30'
                  fill='none'
                >
                  <path d='M11.8346 9.32609L16.3489 0H17.6511L22.1654 9.32609H11.8346ZM15.8369 30L0.343218 11.6259H15.8369V30ZM18.1631 30V11.6259H33.6567L18.1631 30ZM24.7846 9.32609L20.2785 0H27.2505C27.8841 0 28.463 0.162635 28.9871 0.487904C29.5112 0.813172 29.9227 1.24745 30.2215 1.79073L34 9.32609H24.7846ZM0 9.32609L3.78547 1.79073C4.07962 1.24745 4.48876 0.813172 5.01289 0.487904C5.53704 0.162635 6.1159 0 6.74948 0H13.7215L9.22235 9.32609H0Z' />
                </svg>
              </div>
              <div className='mb-[2px] text-15 leading-[1.33] tracking-[-0.6px] text-fontBlack'>
                Эксперт
              </div>
              <span className='mb-[13px] text-13 leading-[1.53] tracking-[-0.52px] text-fontGrey'>
                Опыт более 5 лет
              </span>
              <Radio id='o_3' />
            </div>
          </div>
        </div>

        {/* <div class='grid'>
          <label class='card'>
            <input name='plan' class='radio' type='radio' />

            <span class='plan-details'>
              <span class='plan-type'>Basic</span>
              <span class='plan-cost'>
                $0<span class='slash'>/</span>
                <abbr class='plan-cycle' title='month'>
                  mo
                </abbr>
              </span>
              <span>1 team member</span>
              <span>100 GB/mo</span>
              <span>1 concurrent build</span>
            </span>
          </label>
          <label class='card'>
            <input name='plan' class='radio' type='radio' />
            <span class='hidden-visually'>
              Pro - $50 per month, 5 team members, 500 GB per month, 5
              concurrent builds
            </span>
            <span class='plan-details' aria-hidden='true'>
              <span class='plan-type'>Pro</span>
              <span class='plan-cost'>
                $50<span class='slash'>/</span>
                <span class='plan-cycle'>mo</span>
              </span>
              <span>5 team members</span>
              <span>500 GB/mo</span>
              <span>5 concurrent builds</span>
            </span>
          </label>
          <label class='card'>
            <input name='plan' class='radio' type='radio' />
            <span class='hidden-visually'>
              Business - $200 per month, 5+ team members, 1000 GB per month,
              Unlimited builds
            </span>
            <span class='plan-details' aria-hidden='true'>
              <span class='plan-type'>Business</span>
              <span class='plan-cost'>
                $200<span class='slash'>/</span>
                <span class='plan-cycle'>mo</span>
              </span>
              <span>5+ team members</span>
              <span>1000 GB/mo</span>
              <span>Unlimited builds</span>
            </span>
          </label>
        </div> */}

        <div className='mb-5'>
          <div className='mb-[38px]'>
            <div className='mb-2 text-15 font-medium leading-[1.33] tracking-[-0.15px] text-greenDark'>
              Эксперт
            </div>
            <div className='max-w-[607px] text-15 leading-[1.33] tracking-[-0.15px] text-fontBlack text-fontDarkGrey'>
              Опыт работы более пяти лет. Исполнители, которые являются
              экспертами в своей сфере и имеют глубокие знания и навыки.{' '}
            </div>
          </div>

          <div className='mb-2 text-17 leading-[1.3] tracking-[-0.17px] text-fontBlack'>
            Название задания{' '}
            <span className='text-13 font-medium leading-normal tracking-[-0.13px] text-fontGrey'>
              (необязательно)
            </span>
          </div>
          <span className='mb-3.5 inline-block max-w-[621px] text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
            Укажите навыки, которые необходимы для выполнения вашего задания.
            Это поможет привлечь специалистов с нужной квалификацией.
          </span>

          <div className='flex items-center gap-x-[15px]'>
            <input
              type='text'
              placeholder='Например: Разработка под iOS, разработка под Android, UX/UI дизайн...'
              className='h-10 w-full rounded-[10px] border border-[#AEAEB2] px-5 py-3'
            />
            <button className='btn-primary h-10 px-5'>Добавить</button>
          </div>
          <span className='mt-3 inline-block text-13 leading-[1.53] tracking-[-0.13px] text-fontGrey'>
            Не более 15 тегов
          </span>
        </div>

        <div className='flex flex-wrap items-center gap-x-3 gap-y-2.5'>
          {tags.map((tag, index) => {
            return (
              <div
                key={index}
                className='flex cursor-pointer items-center gap-x-2.5 rounded-[15px] bg-[#F3F3F3] px-[13px]'
              >
                <span className='text-12 leading-[2.50] tracking-[-0.48px] text-fontBlack'>
                  {tag}
                </span>
                <div className='up-icon h-[8px] w-[8px] text-fontGrey'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    role='image'
                    viewBox='0 0 8 8'
                    fill='none'
                  >
                    <path d='M4 4.90659L1.09556 7.81103C0.969568 7.93701 0.818469 8 0.642262 8C0.466054 8 0.314956 7.93701 0.188968 7.81103C0.0629894 7.68504 0 7.53395 0 7.35774C0 7.18153 0.0629894 7.03043 0.188968 6.90444L3.09341 4L0.188968 1.09556C0.0629894 0.969568 0 0.81847 0 0.642262C0 0.466055 0.0629894 0.314957 0.188968 0.188968C0.314956 0.0629896 0.466054 0 0.642262 0C0.818469 0 0.969568 0.0629896 1.09556 0.188968L4 3.09341L6.90444 0.188968C7.03043 0.0629896 7.18153 0 7.35774 0C7.53395 0 7.68504 0.0629896 7.81103 0.188968C7.93701 0.314957 8 0.466055 8 0.642262C8 0.81847 7.93701 0.969568 7.81103 1.09556L4.90659 4L7.81103 6.90444C7.93701 7.03043 8 7.18153 8 7.35774C8 7.53395 7.93701 7.68504 7.81103 7.81103C7.68504 7.93701 7.53395 8 7.35774 8C7.18153 8 7.03043 7.93701 6.90444 7.81103L4 4.90659Z' />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ThirdStep
