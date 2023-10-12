'use client'

import Link from 'next/link'

import { WrapperCard } from '../WrapperCard'

import CardActions from './CardActions'
import CardRating from './CardRating'
import './card.scss'

const Card = () => {
  const handleClick = (event) => {
    event.stopPropagation()
    console.log(1)
  }

  return (
    <WrapperCard id={1}>
      <div className='card-project cursor-pointer border-[#DBDBDB] py-[35px] [&:not(:last-child)]:border-b'>
        <div className='text-13 leading-[1.23] tracking-[-0.52px] text-fontGrey'>
          Опубликовано:{' '}
          <span className='text-13 font-medium tracking-[-0.52px] text-greenDark'>
            1 час назад
          </span>
        </div>

        <div className='flex items-center justify-between pb-1 pt-[2px]'>
          <div className='text-15 font-medium leading-[1.33] tracking-[-0.6px] text-fontBlack'>
            Создать дизайн сайта визитки с каталогом
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className='flex items-center gap-x-[9px]'
          >
            <CardActions />
          </div>
        </div>

        <div className='mb-5 flex items-center gap-x-[50px]'>
          <div>
            <div className='mb-[3px] text-13 leading-[1.23] tracking-[-0.52px] text-fontGrey'>
              Заработная плата
            </div>
            <div className='text-15 leading-[1.06] tracking-[-0.6px] text-fontBlack'>
              <span className='font-medium text-greenDark'>68 000 ₽</span> /
              месяц
            </div>
          </div>
          <div>
            <div className='mb-[3px] text-13 leading-[1.23] tracking-[-0.52px] text-fontGrey'>
              Тип занятости
            </div>
            <div className='text-15 leading-[1.06] tracking-[-0.6px] text-fontBlack'>
              Полная
            </div>
          </div>
          <div>
            <div className='mb-[3px] text-13 leading-[1.23] tracking-[-0.52px] text-fontGrey'>
              Опыт исполнителя
            </div>
            <div className='text-15 leading-[1.06] tracking-[-0.6px] text-fontBlack'>
              Продвинутый
            </div>
          </div>
        </div>

        <div className='mb-2 text-15 leading-[1.4] tracking-[-0.3px] text-fontDarkGrey'>
          Нужно сделать обновление дизайна сайта - визитка. Сайт был сделан для
          HTML, но планируется этот сайт интегрировать с Joomla. Также, внести
          небольшие изменения - цветовая гамма, ширина, оптимизация изображений.
          Ссылку на сайт дам по запросу. Предолжение для ИП, самозанято...
        </div>

        <div className='flex items-center gap-x-[17px]'>
          <div className='whitespace-nowrap text-12 leading-[1.66] tracking-[-0.24px] text-greenDark'>
            Adobe photoshop
          </div>
          <div className='whitespace-nowrap text-12 leading-[1.66] tracking-[-0.24px] text-greenDark'>
            Adobe photoshop
          </div>
          <div className='whitespace-nowrap text-12 leading-[1.66] tracking-[-0.24px] text-greenDark'>
            Adobe photoshop
          </div>
          <div className='whitespace-nowrap text-12 leading-[1.66] tracking-[-0.24px] text-greenDark'>
            Adobe photoshop
          </div>
          <div className='whitespace-nowrap text-12 leading-[1.66] tracking-[-0.24px] text-greenDark'>
            Adobe photoshop
          </div>
          <div className='whitespace-nowrap text-12 leading-[1.66] tracking-[-0.24px] text-greenDark'>
            Adobe photoshop
          </div>
          <div className='whitespace-nowrap text-12 leading-[1.66] tracking-[-0.24px] text-greenDark'>
            Adobe photoshop
          </div>
        </div>

        <div className='mt-[27px] flex items-center justify-between gap-2'>
          <div className='card-project__account-info-status'>
            <small className='mr-[25px] inline-flex items-center text-13 leading-[16px] tracking-[-0.52px] text-fontBlack'>
              <span className='mr-[7px] text-fontGrey'>Заказчик:</span>
              <div className='up-icon h-[14px] w-[14px] text-blueLight'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  viewBox='0 0 14 14'
                  role='img'
                >
                  <path d='M13.72 7.03c.45-.56.34-1.39-.24-1.82l-.55-.41c-.34-.25-.53-.66-.51-1.08l.03-.68c.03-.72-.53-1.32-1.25-1.33h-.68c-.42 0-.81-.22-1.05-.57L9.11.57c-.39-.6-1.2-.75-1.79-.33l-.55.4c-.34.24-.79.3-1.18.15L4.95.55c-.67-.25-1.41.11-1.64.79l-.21.65c-.14.4-.46.71-.87.82l-.65.18C.89 3.19.5 3.92.71 4.6l.21.65c.13.41.04.85-.22 1.18l-.42.54c-.45.56-.34 1.39.24 1.81l.55.41c.34.25.53.66.51 1.08l-.03.68c-.03.72.54 1.32 1.25 1.33h.68c.42 0 .81.22 1.05.57l.37.57c.39.6 1.21.75 1.79.33l.55-.4c.34-.25.78-.31 1.18-.16l.64.24c.67.25 1.41-.1 1.64-.79l.21-.65c.13-.4.45-.71.86-.82l.65-.17c.69-.19 1.09-.92.87-1.61l-.21-.65c-.13-.4-.05-.85.22-1.18l.42-.53zM6.06 9.84L3.5 7.27l1.23-1.23 1.33 1.33 3.21-3.21L10.5 5.4 6.06 9.84z'></path>
                </svg>
              </div>
              &nbsp;
              <strong className='font-normal'>Верифицирован</strong>
            </small>

            <span className='mr-3 self-start'>
              <CardRating initialValue={4} />
            </span>

            <small
              data-test='client-country'
              className='inline-flex items-center text-13 leading-[16px] tracking-[-0.52px] text-fontGrey'
            >
              <div className='up-icon h-[14px] w-[14px]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  viewBox='0 0 14 14'
                  role='img'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.856 4.9c0 1.183.928 2.103 2.124 2.103 1.23 0 2.164-.907 2.162-2.102-.001-1.19-.93-2.096-2.154-2.098C5.79 2.801 4.856 3.72 4.856 4.9m2.14 9.1c-.09-.116-.17-.22-.25-.326-1.137-1.507-2.214-3.053-3.16-4.684-.517-.89-.996-1.802-1.328-2.779-.561-1.652-.181-3.133.9-4.453C3.998.737 5.123.181 6.449.032c2.35-.266 4.57 1.128 5.302 3.327.203.611.3 1.24.225 1.884-.06.51-.227.991-.418 1.465-.411 1.018-.947 1.973-1.52 2.91a49.947 49.947 0 01-2.96 4.284l-.08.097'
                  ></path>
                </svg>
              </div>
              &nbsp;
              <strong className='font-normal'>Россия</strong>
            </small>
          </div>

          <div className='inline-flex items-center gap-x-[29px]'>
            <div className='inline-flex items-center'>
              <div className='up-icon mr-2 h-[10px] w-[13px] text-fontGrey'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='13'
                  height='10'
                  viewBox='0 0 13 10'
                  fill='none'
                >
                  <path
                    d='M6.5 0.5C3.54545 0.5 1.02227 2.366 0 5C1.02227 7.634 3.54545 9.5 6.5 9.5C9.45455 9.5 11.9777 7.634 13 5C11.9777 2.366 9.45455 0.5 6.5 0.5ZM6.5 8C4.86909 8 3.54545 6.656 3.54545 5C3.54545 3.344 4.86909 2 6.5 2C8.13091 2 9.45455 3.344 9.45455 5C9.45455 6.656 8.13091 8 6.5 8ZM6.5 3.2C5.51909 3.2 4.72727 4.004 4.72727 5C4.72727 5.996 5.51909 6.8 6.5 6.8C7.48091 6.8 8.27273 5.996 8.27273 5C8.27273 4.004 7.48091 3.2 6.5 3.2Z'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <span className='text-13 leading-[1.23] tracking-[-0.52px] text-fontGrey'>
                Просмотров{' '}
                <span className='font-medium text-fontBlack'>68</span>
              </span>
            </div>

            <div className='inline-flex items-center'>
              <div className='up-icon mr-2 h-[11px] w-[12px] text-fontGrey'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='12'
                  height='11'
                  viewBox='0 0 12 11'
                  fill='none'
                >
                  <path
                    d='M3.45431 5.31143C3.63153 5.31143 3.78001 5.25266 3.89976 5.13512C4.01951 5.01756 4.07938 4.8719 4.07938 4.69814C4.07938 4.52437 4.01944 4.37878 3.89956 4.26136C3.77967 4.14395 3.63111 4.08524 3.4539 4.08524C3.27668 4.08524 3.12819 4.14401 3.00844 4.26156C2.8887 4.37911 2.82883 4.52477 2.82883 4.69854C2.82883 4.87231 2.88877 5.0179 3.00865 5.13532C3.12854 5.25273 3.27709 5.31143 3.45431 5.31143ZM6.02853 5.31143C6.20575 5.31143 6.35424 5.25266 6.47399 5.13512C6.59373 5.01756 6.6536 4.8719 6.6536 4.69814C6.6536 4.52437 6.59366 4.37878 6.47378 4.26136C6.35389 4.14395 6.20534 4.08524 6.02812 4.08524C5.8509 4.08524 5.70242 4.14401 5.58267 4.26156C5.46292 4.37911 5.40305 4.52477 5.40305 4.69854C5.40305 4.87231 5.46299 5.0179 5.58287 5.13532C5.70276 5.25273 5.85132 5.31143 6.02853 5.31143ZM8.53392 5.31143C8.71115 5.31143 8.85963 5.25266 8.97938 5.13512C9.09913 5.01756 9.159 4.8719 9.159 4.69814C9.159 4.52437 9.09906 4.37878 8.97917 4.26136C8.85929 4.14395 8.71074 4.08524 8.53351 4.08524C8.35629 4.08524 8.20781 4.14401 8.08807 4.26156C7.96832 4.37911 7.90844 4.52477 7.90844 4.69854C7.90844 4.87231 7.96839 5.0179 8.08827 5.13532C8.20815 5.25273 8.3567 5.31143 8.53392 5.31143ZM2.36002 9.45223L0.95342 10.8314C0.776635 11.0048 0.573535 11.0444 0.344121 10.9504C0.114707 10.8563 0 10.6884 0 10.4465V1.09792C0 0.798442 0.110036 0.540589 0.330108 0.324359C0.550181 0.10812 0.812606 0 1.11738 0H10.8803C11.1857 0 11.4487 0.10812 11.6692 0.324359C11.8897 0.540589 12 0.798442 12 1.09792V8.35661C12 8.65545 11.8897 8.91276 11.6692 9.12855C11.4487 9.34434 11.1857 9.45223 10.8803 9.45223H2.36002Z'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <div className='text-13 leading-[1.23] tracking-[-0.52px] text-fontGrey'>
                Заявок <span className='font-medium text-fontBlack'>4</span>
              </div>
            </div>
          </div>
        </div>

        <button onClick={handleClick} className='btn-primary mt-[25px] px-5'>
          Подробнее
        </button>
      </div>
    </WrapperCard>
  )
}

export default Card
