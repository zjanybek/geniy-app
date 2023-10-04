import Link from 'next/link'

import CatalogAccordion from '@/components/CatalogAccordion/CatalogAccordion'
import Checkbox from '@/components/ui/Checkbox'

import Card from './components/Card/Card'
import './page.scss'

const page = ({ params }) => {
  return (
    <div className='catalog-experts'>
      <div className='catalog-experts__container-box'>
        <div className='catalog-experts__header'>
          <div className='catalog-experts__for-text'>Для заказчика</div>
          <h1 className='catalog-experts__title'>Каталог экспертов</h1>
        </div>

        <div className='catalog-experts__items'>
          <div className='catalog-experts__column-filters'>
            <div className='catalog-experts__filters experts-filters'>
              <div className='experts-filters__top'>
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

              <div className='experts-filters__body'>
                <CatalogAccordion title='Категория'>
                  <ul className='experts-filters__list'>
                    {[...Array(10)].map((_, index) => {
                      return (
                        <li key={index}>
                          <button>Веб-разработка</button>
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
                  <div className='experts-filters__language'>
                    <Checkbox id='c_4' label='Русский' />
                    <Checkbox id='c_5' label='English' />
                    <Checkbox id='c_6' label='Spanish' />
                    <Checkbox id='c_7' label='Chineese' />
                  </div>
                </CatalogAccordion>
              </div>
            </div>
          </div>
          <div className='catalog-experts__column-list'>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
