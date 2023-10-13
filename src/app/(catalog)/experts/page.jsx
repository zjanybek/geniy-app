import Link from 'next/link'

import CatalogAccordion from '@/components/Catalog/Accordion'
import Checkbox from '@/components/ui/Checkbox'

import Card from './components/Card/Card'
import './page.scss'

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

const page = ({ params }) => {
  return (
    <div className='catalog-experts'>
      <div className='catalog-experts__container-box'>
        <div className='catalog-experts__header'>
          <div className='mb-1 text-12 uppercase leading-[2.5] tracking-[0.12] text-fontBlack'>
            Для Исполнителей
          </div>
          <h1 className='catalog-experts__title mb-[7px]'>Каталог экспертов</h1>
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
                Каталог экспертов
              </span>
            </div>
          </div>
        </div>

        <div className='flex gap-x-[30px]'>
          <div className='flex-[0_0_256px]'>
            <div className='catalog-experts__filters experts-filters'>
              <div className='experts-filters__top h-[285px]'>
                <div className='experts-filters__user-image'>
                  <img src='/images/experts/user-image.svg' alt='' />
                </div>
                <div className='experts-filters__user-name'>Гений Г.</div>
                <div className='experts-filters__user-role'>Заказчик</div>
                <Link href='#' className='experts-filters__user-office'>
                  <span>Личный кабинет</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='10'
                    height='11'
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

              <div className='experts-filters__experience'>
                <div className='experts-filters__experience-title'>
                  Опыт исполнителя
                </div>
                <div className='flex flex-col gap-y-3.5'>
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

              <div className='experts-filters__body'>
                <CatalogAccordion title='Категория'>
                  <ul className='experts-filters__list'>
                    {category.map((item, index) => {
                      return (
                        <li key={index}>
                          <button>{item}</button>
                        </li>
                      )
                    })}
                  </ul>
                </CatalogAccordion>

                <CatalogAccordion title='Подкатегория'>
                  <ul className='experts-filters__list'>
                    {[...Array(4)].map((item, index) => {
                      return (
                        <li key={index}>
                          <button>Мобильная разработка</button>
                        </li>
                      )
                    })}
                  </ul>
                </CatalogAccordion>

                <CatalogAccordion title='Стоимость часа работы'></CatalogAccordion>

                <CatalogAccordion title='Язык'>
                  <div className='experts-filters__language flex flex-col gap-y-3.5'>
                    <Checkbox id='c_4' label='Русский' />
                    <Checkbox id='c_5' label='English' />
                    <Checkbox id='c_6' label='Spanish' />
                    <Checkbox id='c_7' label='Chineese' />
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
            <div className='experts-block-items'>
              <div className='experts-block-items__top'>
                <div className='experts-block-items__title'>
                  Найдите вашего исполнителя
                </div>
                <div className='experts-block-items__post-it experts-post-it'>
                  <Link href='#' className='experts-post-it__item'>
                    <div className='experts-post-it__image'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                      >
                        <path
                          d='M14.8938 17.1239H9.12389C8.80826 17.1239 8.54204 17.0141 8.32522 16.7945C8.10841 16.5749 8 16.3109 8 16.0025C8 15.6941 8.10841 15.4322 8.32522 15.2168C8.54204 15.0015 8.80826 14.8938 9.12389 14.8938H14.8938V9.12389C14.8938 8.81475 15.0024 8.55015 15.2196 8.33008C15.4368 8.11003 15.6979 8 16.0028 8C16.3077 8 16.5708 8.11003 16.792 8.33008C17.0133 8.55015 17.1239 8.81475 17.1239 9.12389V14.8938H22.8938C23.1979 14.8938 23.4583 15.0025 23.675 15.2199C23.8917 15.4373 24 15.7003 24 16.0087C24 16.3171 23.8917 16.5801 23.675 16.7976C23.4583 17.0151 23.1979 17.1239 22.8938 17.1239H17.1239V22.8938C17.1239 23.1979 17.0136 23.4583 16.7929 23.675C16.5722 23.8917 16.3069 24 15.9969 24C15.6919 24 15.4318 23.8917 15.2166 23.675C15.0014 23.4583 14.8938 23.1979 14.8938 22.8938V17.1239Z'
                          fill='currentColor'
                        />
                        <rect
                          x='1'
                          y='1'
                          width='30'
                          height='30'
                          rx='15'
                          stroke='currentColor'
                          strokeWidth='2'
                        />
                      </svg>
                    </div>
                    <div className='experts-post-it__text'>
                      Разместить задание
                    </div>
                  </Link>
                  <Link href='#' className='experts-post-it__item'>
                    <div className='experts-post-it__image'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                      >
                        <path
                          d='M14.8938 17.1239H9.12389C8.80826 17.1239 8.54204 17.0141 8.32522 16.7945C8.10841 16.5749 8 16.3109 8 16.0025C8 15.6941 8.10841 15.4322 8.32522 15.2168C8.54204 15.0015 8.80826 14.8938 9.12389 14.8938H14.8938V9.12389C14.8938 8.81475 15.0024 8.55015 15.2196 8.33008C15.4368 8.11003 15.6979 8 16.0028 8C16.3077 8 16.5708 8.11003 16.792 8.33008C17.0133 8.55015 17.1239 8.81475 17.1239 9.12389V14.8938H22.8938C23.1979 14.8938 23.4583 15.0025 23.675 15.2199C23.8917 15.4373 24 15.7003 24 16.0087C24 16.3171 23.8917 16.5801 23.675 16.7976C23.4583 17.0151 23.1979 17.1239 22.8938 17.1239H17.1239V22.8938C17.1239 23.1979 17.0136 23.4583 16.7929 23.675C16.5722 23.8917 16.3069 24 15.9969 24C15.6919 24 15.4318 23.8917 15.2166 23.675C15.0014 23.4583 14.8938 23.1979 14.8938 22.8938V17.1239Z'
                          fill='currentColor'
                        />
                        <rect
                          x='1'
                          y='1'
                          width='30'
                          height='30'
                          rx='15'
                          stroke='currentColor'
                          strokeWidth='2'
                        />
                      </svg>
                    </div>
                    <div className='experts-post-it__text'>
                      Разместить вакансию
                    </div>
                  </Link>
                </div>
              </div>
              <div className='experts-block-items__search catalog-search'>
                <input
                  type='text'
                  className='catalog-search__input'
                  placeholder='Поиск'
                />
                <button className='catalog-search__button-icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
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
              <div className='experts-block-items__filters catalog-filters-items'>
                <button className='catalog-filters-items__item'>
                  <span>Категория: Дизайн и искусство</span>
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
                <button className='catalog-filters-items__item'>
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
                <button className='catalog-filters-items__item'>
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
                <button className='catalog-filters-items__reset-button'>
                  Сбросить фильтры
                </button>
              </div>

              <div className='experts-block-items__cards'>
                {[...Array(4)].map((item, index) => {
                  return <Card key={index} id={2} />
                })}
              </div>

              <div className='flex justify-center border-t border-[#DBDBDB] pt-[40px]'>
                <div className='flex items-center gap-x-2.5'>
                  <button className='flex items-center py-2.5 text-13  text-[#DBDBDB]'>
                    <div className='up-icon mr-2.5 h-[14px] w-[14px]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
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

                  <button className='flex items-center py-2.5 text-13 text-greenDark'>
                    <span>Следующая</span>
                    <div className='up-icon ml-2.5 h-[14px] w-[14px]'>
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
