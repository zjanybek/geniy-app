import Link from 'next/link'

import CatalogAccordion from '@/components/Catalog/Accordion'
import Checkbox from '@/components/ui/Checkbox'

import Card from './components/Card/Card'

const category = [
  'Веб-разработка',
  'Мобильная разработка',
  'Дизайн и искусство',
  'Тексты и перевод',
  'Маркетинг и SEO',
  'IT и сетевый технологии',
  'Фото и видео',
  'Бизнес-консультации',
  'Обучение и консультации',
  'Аудио и музыка',
  'Игры и AR / VR',
  'Архитектурный инжиниринг',
  'Продуктовый менеджмент'
]

const page = () => {
  return (
    <div className='pb-[66px] pt-[51px]'>
      <div className='catalog__second-container'>
        <div className='mb-[34px]'>
          <div className='mb-1 text-12 uppercase leading-[2.5] tracking-[0.12] text-fontBlack'>
            Для Исполнителей
          </div>
          <h1 className='mb-[7px] font-secondFamily text-[40px] font-bold leading-[1.00] tracking-[-0.8px] text-fontBlack'>
            Каталог вакансий
          </h1>
          <div className='flex items-center gap-x-2'>
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
                Каталог вакансий
              </span>
            </div>
          </div>
        </div>

        <div className='flex gap-x-[30px]'>
          <div className='flex-[0_0_256px]'>
            <div>
              <div className='flex h-[285px] flex-col items-center rounded-[30px] border border-[#DBDBDB] py-[55px]'>
                <div className='mb-[25px] h-[82px] w-[82px] overflow-hidden rounded-[50%]'>
                  <img
                    className='h-full w-full'
                    src='/images/experts/user-image.svg'
                    alt=''
                  />
                </div>
                <div className='mb-1 text-center text-19 leading-[1.05] tracking-[-0.76px] text-fontBlack'>
                  Гений Г.
                </div>
                <div className='text-13 leading-[1.53] tracking-[-0.52px] text-fontGrey'>
                  Исполнитель
                </div>
                <Link
                  href='#'
                  className='flex items-center text-15 font-medium tracking-[-0.3px] text-greenDark hover:underline'
                >
                  <span>Личный кабинет</span>
                  <svg
                    className='ml-[5px] h-[11px] w-[10px]'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 10 11'
                    fill='none'
                  >
                    <path
                      d='M1.17211 10.5C0.84907 10.5 0.57296 10.3854 0.343776 10.1562C0.114592 9.92704 0 9.65093 0 9.32789V1.67712C0 1.35271 0.114592 1.07542 0.343776 0.845252C0.57296 0.615084 0.84907 0.5 1.17211 0.5H4.22528C4.38928 0.5 4.52795 0.557808 4.6413 0.673424C4.75465 0.789031 4.81133 0.928909 4.81133 1.09306C4.81133 1.25721 4.75465 1.39559 4.6413 1.5082C4.52795 1.62081 4.38928 1.67712 4.22528 1.67712H1.17211V9.32789H8.82288V6.27472C8.82288 6.11072 8.87971 5.97205 8.99335 5.8587C9.107 5.74535 9.2459 5.68867 9.41005 5.68867C9.5742 5.68867 9.71356 5.74535 9.82813 5.8587C9.94271 5.97205 10 6.11072 10 6.27472V9.32789C10 9.65093 9.88492 9.92704 9.65475 10.1562C9.42458 10.3854 9.14729 10.5 8.82288 10.5H1.17211ZM8.82288 2.49944L4.32184 7.00549C4.20515 7.11957 4.06935 7.17388 3.91443 7.16842C3.75949 7.16296 3.62498 7.10319 3.51089 6.98911C3.39681 6.87502 3.33977 6.73944 3.33977 6.58238C3.33977 6.42531 3.39681 6.28973 3.51089 6.17564L8.00943 1.67712H6.28386C6.11985 1.67712 5.98118 1.6203 5.86783 1.50665C5.75448 1.393 5.69781 1.2541 5.69781 1.08995C5.69781 0.925798 5.75448 0.786438 5.86783 0.671868C5.98118 0.557289 6.11985 0.5 6.28386 0.5H10V4.21614C10 4.38015 9.94219 4.51882 9.82658 4.63217C9.71097 4.74552 9.57109 4.80219 9.40694 4.80219C9.24279 4.80219 9.10441 4.74552 8.9918 4.63217C8.87919 4.51882 8.82288 4.38015 8.82288 4.21614V2.49944Z'
                      fill='currentColor'
                    />
                  </svg>
                </Link>
              </div>

              <div className='py-[30px] pb-6'>
                <div className='mb-[19px] text-17 font-medium tracking-[-0.68px] text-fontBlack'>
                  Опыт исполнителя
                </div>
                <div>
                  <Checkbox icon={true} id='c_1' label='Начинающий'>
                    <img src='/images/experts/diamond-green.svg' alt='' />
                  </Checkbox>
                  <Checkbox icon={true} id='c_2' label='Продвинутый'>
                    <img src='/images/experts/diamond-blue.svg' alt='' />
                  </Checkbox>
                  <Checkbox icon={true} id='c_3' label='Эксперт'>
                    <img src='/images/experts/diamond-violet.svg' alt='' />
                  </Checkbox>
                </div>
              </div>

              <div>
                <CatalogAccordion title='Категория'>
                  <ul className='flex flex-col'>
                    {category.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='[&:not(:last-child)]:mb-[17px]'
                        >
                          <button className='text-15 leading-[1.06] tracking-[-0.6px] text-fontDarkGrey'>
                            {item}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </CatalogAccordion>

                <CatalogAccordion title='Подкатегория'>
                  <ul className='flex flex-col'>
                    {[...Array(4)].map((_, index) => {
                      return (
                        <li
                          key={index}
                          className='[&:not(:last-child)]:mb-[17px]'
                        >
                          <button className='text-15 leading-[1.06] tracking-[-0.6px] text-fontDarkGrey'>
                            Мобильная разработка
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </CatalogAccordion>

                <CatalogAccordion title='Стоимость часа работы'></CatalogAccordion>

                <CatalogAccordion title='Срок проекта'>
                  <div className='experts-filters__language'>
                    <Checkbox id='p_1' label='Менее месяца' />
                    <Checkbox id='p_2' label='1 - 3 месяца' />
                    <Checkbox id='p_3' label='Более 3-х месяцев' />
                  </div>
                </CatalogAccordion>

                <CatalogAccordion title='Язык'>
                  <div className='experts-filters__language'>
                    <Checkbox id='l_1' label='Русский' />
                    <Checkbox id='l_2' label='English' />
                    <Checkbox id='l_3' label='Spanish' />
                    <Checkbox id='l_4' label='Chineese' />
                  </div>
                </CatalogAccordion>
              </div>
            </div>
          </div>
          <div className='flex-auto'>
            <div className='mb-[30px] grid h-[285px] grid-cols-12 overflow-hidden rounded-[25px]'>
              <div className='relative z-[3] col-span-4 flex flex-col rounded-[25px] bg-[#5e5be6] pb-[34px] pl-[41px] pr-[30px] pt-[31px] text-white'>
                <div className='mb-[30px] flex-auto text-12 uppercase leading-[1.25] tracking-[0.12px] text-white'>
                  Гении, изменившие мир
                </div>
                <div className='genius-banner__body items-end justify-end'>
                  <img
                    className='mb-[16px]'
                    src='/images/genius-banner-icon.svg'
                    alt=''
                  />
                  <div className='text-18 max-w-[189px] font-secondFamily font-bold leading-[1.11] text-white'>
                    Ваше время ограничено, не тратьте его, живя чужой жизнью
                  </div>
                  <div className='mt-[22px] text-15 leading-[1.33] text-white'>
                    Стив Джобс
                  </div>
                </div>
              </div>
              <div className='overflow-hidde relative col-span-8 ml-[-22px]'>
                <img
                  className='absolute left-0 top-0 z-[-1] h-full w-full object-cover'
                  src='/images/steve-jobs.jpg'
                  alt=''
                />
              </div>
            </div>

            <div className='rounded-[30px] border border-[#DBDBDB] p-[42px]'>
              <div>
                <div className='relative'>
                  <input
                    type='text'
                    className='h-[40px] w-full rounded-[50px] border border-greyThrid pb-[10px] pl-[20px] pr-[36px] pt-[14px]'
                    placeholder='Поиск'
                  />
                  <button className='absolute right-1 top-1/2 flex h-8 w-8 translate-y-[-50%] items-center justify-center rounded-[50%] bg-greenLight text-white'>
                    <svg
                      className='h-4 w-4 flex-[0_0_16px]'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 16 16'
                      fill='none'
                    >
                      <path
                        d='M6.81275 13.5695C4.89554 13.5695 3.28078 12.9117 1.96847 11.5961C0.656156 10.2805 0 8.67673 0 6.78473C0 4.89273 0.656602 3.28895 1.96981 1.97337C3.28299 0.657789 4.88389 0 6.77249 0C8.66107 0 10.262 0.657789 11.5752 1.97337C12.8884 3.28895 13.545 4.89356 13.545 6.78722C13.545 7.51921 13.4362 8.22168 13.2187 8.89462C13.0012 9.56759 12.6722 10.1909 12.2318 10.7646L15.6944 14.2045C15.8981 14.4037 16 14.6535 16 14.9538C16 15.2541 15.8981 15.5036 15.6944 15.7021C15.4907 15.9007 15.2425 16 14.9498 16C14.6571 16 14.4098 15.8979 14.2078 15.6938L10.7864 12.2622C10.2799 12.6759 9.67579 12.9972 8.97421 13.2261C8.27264 13.455 7.55216 13.5695 6.81275 13.5695ZM6.78074 11.4844C8.09394 11.4844 9.20273 11.0291 10.1071 10.1185C11.0115 9.2079 11.4637 8.09664 11.4637 6.78473C11.4637 5.47283 11.012 4.36157 10.1086 3.45096C9.20517 2.54036 8.09638 2.08507 6.7822 2.08507C5.45884 2.08507 4.34452 2.54036 3.43923 3.45096C2.53393 4.36157 2.08128 5.47283 2.08128 6.78473C2.08128 8.09664 2.53393 9.2079 3.43923 10.1185C4.34452 11.0291 5.45835 11.4844 6.78074 11.4844Z'
                        fill='currentColor'
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className='flex flex-wrap items-center gap-2.5 pb-[23px] pt-[19px]'>
                <button className='flex items-center gap-2.5 whitespace-nowrap rounded-[50px] border-greenLight bg-[#5cd034] px-[13px] py-2.5 text-12 leading-[] tracking-[-0.48px] text-white'>
                  <span>Категория: Дизайн и искусство</span>
                  <div className=''>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      height='10'
                      viewBox='0 0 10 10'
                      fill='none'
                    >
                      <path
                        d='M5 6.13323L1.36944 9.76379C1.21196 9.92126 1.02309 10 0.802827 10C0.582568 10 0.393695 9.92126 0.23621 9.76379C0.0787367 9.6063 0 9.41743 0 9.19717C0 8.97691 0.0787367 8.78804 0.23621 8.63055L3.86677 5L0.23621 1.36944C0.0787367 1.21196 0 1.02309 0 0.802828C0 0.582568 0.0787367 0.393696 0.23621 0.23621C0.393695 0.078737 0.582568 0 0.802827 0C1.02309 0 1.21196 0.078737 1.36944 0.23621L5 3.86677L8.63055 0.23621C8.78804 0.078737 8.97691 0 9.19717 0C9.41743 0 9.6063 0.078737 9.76379 0.23621C9.92126 0.393696 10 0.582568 10 0.802828C10 1.02309 9.92126 1.21196 9.76379 1.36944L6.13323 5L9.76379 8.63055C9.92126 8.78804 10 8.97691 10 9.19717C10 9.41743 9.92126 9.6063 9.76379 9.76379C9.6063 9.92126 9.41743 10 9.19717 10C8.97691 10 8.78804 9.92126 8.63055 9.76379L5 6.13323Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                </button>
                <button className='flex items-center gap-2.5 whitespace-nowrap rounded-[50px] border-greenLight bg-[#5cd034] px-[13px] py-2.5 text-12 leading-[] tracking-[-0.48px] text-white'>
                  <span>Подкатегория: Дизайн и искусство</span>
                  <div className='catalog-filters-items__remove-icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      height='10'
                      viewBox='0 0 10 10'
                      fill='none'
                    >
                      <path
                        d='M5 6.13323L1.36944 9.76379C1.21196 9.92126 1.02309 10 0.802827 10C0.582568 10 0.393695 9.92126 0.23621 9.76379C0.0787367 9.6063 0 9.41743 0 9.19717C0 8.97691 0.0787367 8.78804 0.23621 8.63055L3.86677 5L0.23621 1.36944C0.0787367 1.21196 0 1.02309 0 0.802828C0 0.582568 0.0787367 0.393696 0.23621 0.23621C0.393695 0.078737 0.582568 0 0.802827 0C1.02309 0 1.21196 0.078737 1.36944 0.23621L5 3.86677L8.63055 0.23621C8.78804 0.078737 8.97691 0 9.19717 0C9.41743 0 9.6063 0.078737 9.76379 0.23621C9.92126 0.393696 10 0.582568 10 0.802828C10 1.02309 9.92126 1.21196 9.76379 1.36944L6.13323 5L9.76379 8.63055C9.92126 8.78804 10 8.97691 10 9.19717C10 9.41743 9.92126 9.6063 9.76379 9.76379C9.6063 9.92126 9.41743 10 9.19717 10C8.97691 10 8.78804 9.92126 8.63055 9.76379L5 6.13323Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                </button>
                <button className='flex items-center gap-2.5 whitespace-nowrap rounded-[50px] border-greenLight bg-[#5cd034] px-[13px] py-2.5 text-12 leading-[] tracking-[-0.48px] text-white'>
                  <span>Язык: English</span>
                  <div className='catalog-filters-items__remove-icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      height='10'
                      viewBox='0 0 10 10'
                      fill='none'
                    >
                      <path
                        d='M5 6.13323L1.36944 9.76379C1.21196 9.92126 1.02309 10 0.802827 10C0.582568 10 0.393695 9.92126 0.23621 9.76379C0.0787367 9.6063 0 9.41743 0 9.19717C0 8.97691 0.0787367 8.78804 0.23621 8.63055L3.86677 5L0.23621 1.36944C0.0787367 1.21196 0 1.02309 0 0.802828C0 0.582568 0.0787367 0.393696 0.23621 0.23621C0.393695 0.078737 0.582568 0 0.802827 0C1.02309 0 1.21196 0.078737 1.36944 0.23621L5 3.86677L8.63055 0.23621C8.78804 0.078737 8.97691 0 9.19717 0C9.41743 0 9.6063 0.078737 9.76379 0.23621C9.92126 0.393696 10 0.582568 10 0.802828C10 1.02309 9.92126 1.21196 9.76379 1.36944L6.13323 5L9.76379 8.63055C9.92126 8.78804 10 8.97691 10 9.19717C10 9.41743 9.92126 9.6063 9.76379 9.76379C9.6063 9.92126 9.41743 10 9.19717 10C8.97691 10 8.78804 9.92126 8.63055 9.76379L5 6.13323Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                </button>
                <button className='text-13 tracking-[-0.26px] text-greenDark'>
                  Сбросить фильтры
                </button>
              </div>

              <div className='mb-[30px] text-13 leading-[1.53] tracking-[-0.52px] text-fontGrey'>
                Найдено{' '}
                <span className='text-13 font-medium leading-[20px] text-fontBlack '>
                  114
                </span>{' '}
                проектов
              </div>

              <div className='flex items-start justify-between gap-1 border-b border-[#DBDBDB]'>
                <div className='flex items-center gap-x-10'>
                  <button className='relative pb-[17px] text-15 leading-[1.06] text-greenDark before:absolute before:bottom-[-1px] before:left-0 before:block before:h-[2px] before:w-full before:rounded-[3px] before:bg-greenDark before:content-[""]'>
                    Все проекты
                  </button>
                  <button className='pb-[17px] text-15 leading-[1.06] text-fontGrey'>
                    Просмотренные (6)
                  </button>
                  <button className='pb-[17px] text-15  leading-[1.06] text-fontGrey'>
                    Сохраненные (0)
                  </button>
                </div>

                <button className='flex items-center'>
                  <div className='up-icon mr-[7px] h-[12px] w-[14px] text-greenDark'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 14 12'
                      fill='none'
                      role='image'
                    >
                      <path d='M1.39555 12C1.02203 12 0.696052 11.8645 0.417625 11.5936C0.139208 11.3227 0 11.0056 0 10.6421V2.36551C0 2.00206 0.139208 1.68489 0.417625 1.41399C0.696052 1.14308 1.02203 1.00763 1.39555 1.00763H8.45649C8.37896 1.23035 8.3282 1.45667 8.30419 1.68657C8.2802 1.91647 8.28482 2.14279 8.31805 2.36551H1.39555V10.6421H12.6044V5.10282C12.8724 5.03613 13.1244 4.9338 13.3602 4.79581C13.5961 4.65782 13.8094 4.49254 14 4.29996V10.6421C14 11.0056 13.8608 11.3227 13.5824 11.5936C13.3039 11.8645 12.978 12 12.6044 12H1.39555ZM7 5.83566L9.37026 4.37538C9.52642 4.51615 9.69745 4.64177 9.88335 4.75224C10.0692 4.86272 10.2692 4.95083 10.4834 5.0166L7.35997 6.92409C7.25129 7.00313 7.13273 7.04085 7.00432 7.03725C6.87592 7.03366 6.75448 6.99594 6.64003 6.92409L1.39555 3.67488V2.36551L7 5.83566ZM11.6506 3.94431C11.082 3.94431 10.6031 3.75462 10.2141 3.37524C9.82507 2.99586 9.63055 2.52954 9.63055 1.97628C9.63055 1.42301 9.8255 0.955313 10.2154 0.573188C10.6053 0.191063 11.0846 0 11.6532 0C12.2218 0 12.7025 0.192383 13.0952 0.577148C13.488 0.961924 13.6843 1.42914 13.6843 1.9788C13.6843 2.53208 13.4866 2.99798 13.0912 3.3765C12.6957 3.75504 12.2155 3.94431 11.6506 3.94431Z' />
                    </svg>
                  </div>
                  <span className='text-13 font-medium  leading-none text-fontGrey'>
                    Настроить оповещения
                  </span>
                </button>
              </div>

              <div>
                {[...Array(4)].map((_, index) => {
                  return <Card key={index} />
                })}
              </div>

              <div className='flex justify-center border-t border-[#DBDBDB] pt-[40px]'>
                <div className='flex items-center gap-x-2.5'>
                  <button className='flex items-center py-2.5 text-13 leading-normal  text-[#DBDBDB]'>
                    <div className='up-icon mr-2.5 h-[10px] w-[7px]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='7'
                        height='10'
                        viewBox='0 0 7 10'
                        fill='none'
                      >
                        <path
                          d='M0.499999 5.00737C0.499999 4.90903 0.516704 4.81808 0.550113 4.73451C0.583537 4.65093 0.641378 4.56981 0.723635 4.49115L5.19666 0.21385C5.34575 0.0712831 5.5257 -4.2588e-08 5.7365 -3.33735e-08C5.94731 -2.41591e-08 6.12725 0.0712832 6.27634 0.21385C6.42545 0.356431 6.5 0.530966 6.5 0.737456C6.5 0.943945 6.42545 1.11847 6.27634 1.26104L2.35858 5.00737L6.27634 8.75369C6.42545 8.89626 6.5 9.06833 6.5 9.26991C6.5 9.47147 6.42545 9.64355 6.27634 9.78613C6.12725 9.92871 5.94474 10 5.7288 10C5.51286 10 5.33034 9.92871 5.18123 9.78613L0.723635 5.52358C0.641378 5.44493 0.583537 5.36381 0.550113 5.28022C0.516704 5.19665 0.499999 5.1057 0.499999 5.00737Z'
                          fill='currentColor'
                        />
                      </svg>
                    </div>
                    <span>Предыдущая</span>
                  </button>

                  <div className='flex items-center gap-x-[6px]'>
                    <ul>
                      <li className='mx-[3px] inline-block'>
                        <button className='grid h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[50%] bg-transparent  text-center text-15 text-fontGrey'>
                          <span>1</span>
                        </button>
                      </li>
                      <li className='mx-[3px] inline-block'>
                        <button className='grid h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[50%] bg-greenDark text-center text-15 text-[#FFF]'>
                          <span>2</span>
                        </button>
                      </li>
                      <li className='mx-[3px] inline-block'>
                        <button className='grid h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[50%] bg-transparent text-center text-15 text-fontGrey'>
                          3
                        </button>
                      </li>
                      <li className='mx-[3px] inline-block'>
                        <button className='grid h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[50%] bg-transparent text-center text-15 text-fontGrey'>
                          4
                        </button>
                      </li>
                      <li className='mx-[3px] inline-block'>
                        <button className='grid h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[50%] bg-transparent text-center text-15 text-fontGrey'>
                          5
                        </button>
                      </li>
                      <li className='mx-[3px] inline-block'>
                        <button className='grid h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[50%] bg-transparent text-center text-15 text-fontGrey'>
                          6
                        </button>
                      </li>
                    </ul>
                  </div>

                  <button className='flex items-center py-2.5 text-13 leading-normal text-greenDark'>
                    <span>Следующая</span>
                    <div className='up-icon ml-2.5 h-[10px] w-[7px]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='6'
                        height='10'
                        viewBox='0 0 6 10'
                        fill='none'
                      >
                        <path
                          d='M6 4.99263C6 5.09097 5.9833 5.18192 5.94989 5.26549C5.91646 5.34907 5.85862 5.43019 5.77636 5.50885L1.30334 9.78615C1.15425 9.92872 0.974299 10 0.763497 10C0.552695 10 0.372748 9.92872 0.223658 9.78615C0.0745526 9.64357 -2.32093e-08 9.46903 -3.22352e-08 9.26254C-4.12612e-08 9.05605 0.0745526 8.88153 0.223658 8.73896L4.14142 4.99263L0.223658 1.24631C0.0745522 1.10374 -3.96389e-07 0.931666 -4.05201e-07 0.730088C-4.14011e-07 0.528525 0.0745522 0.356453 0.223658 0.213872C0.372748 0.07129 0.555263 -2.42713e-08 0.771201 -3.37103e-08C0.98714 -4.31493e-08 1.16966 0.07129 1.31877 0.213872L5.77636 4.47642C5.85862 4.55507 5.91646 4.63619 5.94989 4.71978C5.9833 4.80335 6 4.8943 6 4.99263Z'
                          fill='currentColor'
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
