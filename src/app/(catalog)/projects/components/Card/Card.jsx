import Link from 'next/link'

import CardRating from './CardRating'

const Card = () => {
  return (
    <Link href='#' className='block py-[35px]'>
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
        <div className='flex items-center gap-x-[9px]'>
          <button className='flex h-[35px] w-[35px] items-center justify-center rounded-[50%] border border-[#D1D1D6] text-[#D1D1D6]'>
            <div className='up-icon h-[15px] w-[13px] flex-[0_0_13px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='13'
                height='15'
                viewBox='0 0 13 15'
                fill='none'
              >
                <path
                  d='M1.57821 8.21285V13.6599C1.57821 13.8821 1.50201 14.0692 1.34963 14.2211C1.19724 14.373 1.00958 14.449 0.786667 14.449C0.56375 14.449 0.37691 14.373 0.226146 14.2211C0.0753819 14.0692 0 13.8821 0 13.6599V0.792417C0 0.570195 0.0759652 0.38257 0.227896 0.229542C0.379812 0.076514 0.566882 0 0.789104 0H6.87908C7.06436 0 7.22951 0.0595063 7.37454 0.17852C7.51957 0.29752 7.61051 0.450319 7.64736 0.636916L7.89463 1.75H11.9899C12.2121 1.75 12.3997 1.82651 12.5528 1.97954C12.7058 2.13257 12.7823 2.32019 12.7823 2.54242V9.15987C12.7823 9.3821 12.7058 9.56917 12.5528 9.72108C12.3997 9.873 12.2121 9.94896 11.9899 9.94896H7.66381C7.47852 9.94896 7.31336 9.89233 7.16833 9.77906C7.02331 9.66578 6.93237 9.51585 6.89554 9.32925L6.64827 8.21285H1.57821Z'
                  fill='currentColor'
                />
              </svg>
            </div>
          </button>
          <button className='flex h-[35px] w-[35px] items-center justify-center rounded-[50%] border border-[#D1D1D6] text-[#D1D1D6]'>
            <div className='up-icon h-[16px] w-[18px] flex-[0_0_18px] text-greenDark'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='16'
                viewBox='0 0 18 16'
                fill='none'
              >
                <path
                  d='M9 16C8.82302 16 8.64287 15.9682 8.45955 15.9045C8.27624 15.8409 8.11505 15.7391 7.97598 15.5991L6.66752 14.3963C4.89752 12.7625 3.34376 11.185 2.00626 9.66369C0.668753 8.14238 0 6.52489 0 4.81124C0 3.44077 0.459997 2.29628 1.37999 1.37777C2.3 0.459256 3.44 0 4.79999 0C5.575 0 6.33 0.178608 7.065 0.535824C7.8 0.893055 8.445 1.44887 9 2.20328C9.60501 1.44887 10.26 0.893055 10.965 0.535824C11.67 0.178608 12.415 0 13.2 0C14.56 0 15.7 0.459256 16.62 1.37777C17.54 2.29628 18 3.44077 18 4.81124C18 6.52489 17.3325 8.14363 15.9975 9.66744C14.6625 11.1913 13.105 12.77 11.325 14.4037L10.02 15.6028C9.88249 15.7415 9.72311 15.8424 9.54187 15.9054C9.36062 15.9685 9.18 16 9 16ZM8.325 3.79204C7.91001 3.09758 7.40001 2.54176 6.795 2.12459C6.19001 1.70741 5.525 1.49881 4.79999 1.49881C3.83999 1.49881 3.05 1.81107 2.43 2.43559C1.80999 3.06011 1.49999 3.85413 1.49999 4.81767C1.49999 5.65273 1.7869 6.53441 2.36072 7.46273C2.93453 8.39104 3.62078 9.29159 4.41947 10.1644C5.21815 11.0372 6.04374 11.8507 6.89625 12.6052C7.74875 13.3596 8.45 13.9891 9 14.4937C9.55 13.9991 10.2513 13.3721 11.1038 12.6126C11.9563 11.8532 12.7813 11.0339 13.5788 10.1546C14.3763 9.27525 15.0625 8.37124 15.6375 7.44254C16.2125 6.51385 16.5 5.63675 16.5 4.81124C16.5 3.85199 16.1875 3.06011 15.5625 2.43559C14.9375 1.81107 14.15 1.49881 13.2 1.49881C12.465 1.49881 11.7975 1.7049 11.1975 2.11708C10.5975 2.52927 10.08 3.08759 9.64499 3.79204C9.55999 3.92193 9.4625 4.01685 9.35251 4.07681C9.2425 4.13676 9.11999 4.16674 8.98499 4.16674C8.84999 4.16674 8.725 4.13676 8.61001 4.07681C8.495 4.01685 8.4 3.92193 8.325 3.79204Z'
                  fill='currentColor'
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className='mb-5 flex items-center gap-x-[50px]'>
        <div>
          <div className='mb-[3px] text-13 leading-[1.23] tracking-[-0.52px] text-fontGrey'>
            Стоимость
          </div>
          <div className='text-15 leading-[1.06] tracking-[-0.6px] text-fontBlack'>
            <span className='font-medium text-greenDark'>1 500 ₽</span> / проект
          </div>
        </div>
        <div>
          <div className='mb-[3px] text-13 leading-[1.23] tracking-[-0.52px] text-fontGrey'>
            Срок
          </div>
          <div className='text-15 leading-[1.06] tracking-[-0.6px] text-fontBlack'>
            14 дней
          </div>
        </div>
        <div>
          <div className='mb-[3px] text-13 leading-[1.23] tracking-[-0.52px] text-fontGrey'>
            Оплата
          </div>
          <div className='text-15 leading-[1.06] tracking-[-0.6px] text-fontBlack'>
            Безопасная оплата
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

      <div className='mb-2 text-15 leading-[1.33] tracking-[-0.3px] text-fontDarkGrey'>
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
        <div className='flex items-center'>
          <div className='mr-[25px] flex items-center'>
            <span className='mr-[7px] text-13 leading-[1.23] tracking-[-0.52px] text-fontGrey'>
              Заказчик:
            </span>
            <div className='flex items-center'>
              <div className='up-icon mr-1 h-[14px] w-[15px] text-blueLight'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='14'
                  viewBox='0 0 15 14'
                  fill='none'
                >
                  <path
                    d='M6.7715 7.64451L5.6275 6.49738C5.5105 6.37587 5.36706 6.31511 5.19717 6.31511C5.0273 6.31511 4.8786 6.37267 4.75106 6.48779C4.62642 6.61107 4.56411 6.75578 4.56411 6.9219C4.56411 7.08803 4.62642 7.23184 4.75106 7.35335L6.31215 8.86402C6.44209 8.99248 6.59521 9.05671 6.7715 9.05671C6.9478 9.05671 7.10093 8.99248 7.23087 8.86402L10.2568 5.92538C10.3767 5.81027 10.4359 5.67018 10.4344 5.5051C10.433 5.34002 10.3699 5.19903 10.2453 5.08213C10.1254 4.97446 9.98241 4.92177 9.81635 4.92408C9.65029 4.92638 9.51204 4.98226 9.40158 5.09172L6.7715 7.64451ZM4.84696 13.6772L3.81517 11.9614L1.78451 11.55C1.6233 11.5204 1.49123 11.4376 1.38828 11.3016C1.28533 11.1656 1.2453 11.0186 1.26819 10.8606L1.49134 8.91022L0.17182 7.4175C0.0598776 7.30198 0.00390625 7.16281 0.00390625 7C0.00390625 6.83719 0.0598776 6.69802 0.17182 6.5825L1.49134 5.10093L1.26819 3.15058C1.2453 2.99253 1.28533 2.84552 1.38828 2.70956C1.49123 2.57357 1.6233 2.4899 1.78451 2.45855L3.81517 2.04977L4.84696 0.322769C4.93238 0.184937 5.05356 0.089223 5.21049 0.0356296C5.36743 -0.017975 5.52369 -0.0110242 5.67925 0.0564807L7.50391 0.862875L9.32856 0.0564807C9.48413 -0.00923928 9.64038 -0.0176063 9.79732 0.0313797C9.95426 0.0803657 10.0754 0.173774 10.1609 0.311607L11.2041 2.04977L13.2233 2.45855C13.3845 2.4899 13.5166 2.57357 13.6195 2.70956C13.7225 2.84552 13.7625 2.99253 13.7396 3.15058L13.5165 5.10093L14.836 6.5825C14.9479 6.69802 15.0039 6.83719 15.0039 7C15.0039 7.16281 14.9479 7.30198 14.836 7.4175L13.5165 8.91022L13.7396 10.8606C13.7625 11.0186 13.7225 11.1656 13.6195 11.3016C13.5166 11.4376 13.3845 11.5204 13.2233 11.55L11.2041 11.9614L10.1609 13.6884C10.0754 13.8262 9.95426 13.9196 9.79732 13.9686C9.64038 14.0176 9.48413 14.0092 9.32856 13.9435L7.50391 13.1371L5.67925 13.9435C5.52369 14.0092 5.36743 14.0157 5.21049 13.963C5.05356 13.9103 4.93238 13.8151 4.84696 13.6772Z'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <span className='text-13 leading-[1.23] tracking-[-0.52px] text-fontBlack'>
                Верифицирован
              </span>
            </div>
          </div>

          <div className='flex items-center'>
            <div className='mr-3'>
              <CardRating initialValue={4} />
            </div>
            {/* <div className='flex items-center'>
              <div className='up-icon mr-[12px] h-[11px] w-[8px] self-end  text-fontGrey'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 8 11'
                  role='image'
                  fill='none'
                >
                  <path
                    d='M4 0C1.78857 0 0 1.7215 0 3.85C0 6.7375 4 11 4 11C4 11 8 6.7375 8 3.85C8 1.7215 6.21143 0 4 0ZM4 5.225C3.21143 5.225 2.57143 4.609 2.57143 3.85C2.57143 3.091 3.21143 2.475 4 2.475C4.78857 2.475 5.42857 3.091 5.42857 3.85C5.42857 4.609 4.78857 5.225 4 5.225Z'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <div className='self-end text-13 tracking-[-0.52px] text-fontGrey'>
                Россия
              </div>
            </div> */}

            <small data-test='client-country' class='inline-flex items-center'>
              <div class='up-icon h-[14px] w-[14px]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  viewBox='0 0 14 14'
                  role='img'
                >
                  <path
                    fill-rule='evenodd'
                    d='M4.856 4.9c0 1.183.928 2.103 2.124 2.103 1.23 0 2.164-.907 2.162-2.102-.001-1.19-.93-2.096-2.154-2.098C5.79 2.801 4.856 3.72 4.856 4.9m2.14 9.1c-.09-.116-.17-.22-.25-.326-1.137-1.507-2.214-3.053-3.16-4.684-.517-.89-.996-1.802-1.328-2.779-.561-1.652-.181-3.133.9-4.453C3.998.737 5.123.181 6.449.032c2.35-.266 4.57 1.128 5.302 3.327.203.611.3 1.24.225 1.884-.06.51-.227.991-.418 1.465-.411 1.018-.947 1.973-1.52 2.91a49.947 49.947 0 01-2.96 4.284l-.08.097'
                  ></path>
                </svg>
              </div>
              &nbsp;
              <strong>United States</strong>
            </small>
          </div>
        </div>

        <div className='flex items-center gap-x-[29px]'>
          <div className='flex items-center'>
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
              Просмотров <span className='font-medium text-fontBlack'>68</span>
            </span>
          </div>

          <div className='flex items-center'>
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

      <div className='flex items-center'>
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
          Просмотров <span className='font-medium text-fontBlack'>68</span>
        </span>
      </div>

      <button className='btn-primary mt-[25px] px-5'>Подробнее</button>
    </Link>
  )
}

export default Card
