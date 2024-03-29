'use client'

import Link from 'next/link'
import { useState } from 'react'

import Radio from '@/components/ui/Radio/Radio'

const page = () => {
  const [payment, setPayment] = useState()

  return (
    <div className='pb-[133px]'>
      <div className='page-send-invite__second-container'>
        <div className='flex items-center  gap-x-2 pb-6 pt-1'>
          <div className='flex items-center'>
            <span className='mr-[10px] text-12 leading-[1.66] tracking-[-0.48px] text-fontGrey'>
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
            <span className='mr-[10px] text-12 leading-[1.66] tracking-[-0.48px] text-fontGrey'>
              Отправить заявку
            </span>
          </div>
        </div>

        <div className='flex gap-x-10'>
          {/* Left */}
          <div className='flex-auto'>
            <div className='mb-6'>
              <div className='mb-[14px] text-22 font-medium leading-[1.18] tracking-[-0.88px] text-fontBlack'>
                Отправить заявку
              </div>
              <div className='flex items-center gap-x-9'>
                <div className='flex items-center'>
                  <div className='relative mr-3 flex'>
                    <img
                      className='inline-flex h-[30px] max-h-[30px] w-[30px] max-w-[30px] overflow-hidden rounded-[50%] object-cover'
                      src='/images/project-modal-avatar.svg'
                      alt=''
                    />
                  </div>
                  <span className='text-15 leading-[1.06] tracking-[-0.3px] text-greenDark'>
                    Афанасий В.
                  </span>
                </div>

                <div className='flex h-[17px] items-start gap-x-[6px]'>
                  <div className='up-icon h-[14px] w-[14px] text-greenDark'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      role='image'
                      viewBox='0 0 14 14'
                      fill='none'
                    >
                      <path
                        d='M7 11.6828L3.51263 13.8831C3.37675 13.9705 3.23543 14.0089 3.08868 13.9983C2.94193 13.9876 2.81232 13.9386 2.69984 13.8512C2.58736 13.7638 2.50245 13.652 2.44509 13.5159C2.38772 13.3797 2.37617 13.227 2.41045 13.0578L3.33269 8.9018L0.252428 6.09807C0.126006 5.98254 0.0481134 5.85166 0.0187502 5.70541C-0.010613 5.55917 -0.00548867 5.41656 0.0341232 5.27761C0.0716801 5.13866 0.145831 5.02215 0.256576 4.92808C0.367322 4.83401 0.505718 4.77797 0.671764 4.75994L4.74069 4.38806L6.31713 0.463871C6.38036 0.307091 6.47652 0.190581 6.60561 0.11434C6.73471 0.0381138 6.86617 0 7 0C7.13383 0 7.26529 0.0381138 7.39439 0.11434C7.52348 0.190581 7.61964 0.307091 7.68287 0.463871L9.25931 4.38806L13.3313 4.75994C13.4953 4.77797 13.6327 4.83401 13.7434 4.92808C13.8542 5.02215 13.9283 5.13866 13.9659 5.27761C14.0055 5.41656 14.0106 5.55917 13.9812 5.70541C13.9519 5.85166 13.874 5.98254 13.7476 6.09807L10.6673 8.9018L11.5896 13.0578C11.6238 13.227 11.6123 13.3797 11.5549 13.5159C11.4976 13.652 11.4126 13.7638 11.3002 13.8512C11.1877 13.9386 11.0581 13.9876 10.9113 13.9983C10.7646 14.0089 10.6233 13.9705 10.4874 13.8831L7 11.6828Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                  <span className='text-13 leading-none tracking-[-0.52px] text-fontBlack'>
                    <span className='font-medium'>5.0</span>{' '}
                    <span className='text-fontGrey'>(81 отзыв)</span>
                  </span>
                </div>

                <div>
                  <span className='text-13 leading-[1.53] tracking-[-0.52px] text-fontGrey'>
                    Россия, Москва
                  </span>
                </div>

                <div>
                  <span className='text-13 leading-[1.53] tracking-[-0.52px] text-fontBlack'>
                    21:30 <span className='text-fontGrey'>местное время</span>
                  </span>
                </div>
              </div>
            </div>

            <div className='mb-10'>
              <div className='mb-2 text-17 font-medium leading-[1.2] tracking-[-0.17px] text-fontBlack'>
                Комментарий к заявке
              </div>
              <label className='mb-5 block max-w-[575px] text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
                Вы можете написать сообщение или уточнить детали, которые вы
                считаете важными для заказчика.{' '}
              </label>
              <textarea
                name=''
                id=''
                cols='30'
                rows='9'
                className='text-pre-line text-break mb-2 w-full rounded-[10px] border border-greyThrid px-5 py-[15px] text-15 leading-[1.33] tracking-[-0.15px]  placeholder:text-greyThrid'
                placeholder=''
              ></textarea>
              <span className='text-13 leading-[1.53] tracking-[-0.13px] text-fontGrey'>
                0 / 80 символов
              </span>
            </div>

            <div className='mb-7'>
              <div className='mb-2 text-17 font-medium leading-[1.2] tracking-[-0.17px] text-fontBlack'>
                Срок выполнения
              </div>
              <label className='mb-5 block max-w-[578px] text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
                Укажите, сколько времени вам потребуется, чтобы выполнить эту
                работу. Будьте реалистичны и учтите все возможные факторы,
                которые могут повлиять на сроки.
              </label>
              <input
                type='text'
                className='mb-[11px] h-[40px] max-w-xs rounded-[10px] border border-greyThrid py-3 pl-[19px] pr-[12px]'
                placeholder='01 сентября 2023'
              />
            </div>

            <div className='mb-11'>
              <div className='mb-2 text-17 font-medium leading-[1.2] tracking-[-0.17px] text-fontBlack'>
                Стоимость работы
              </div>
              <div className='mb-7 max-w-[578px] text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
                Укажите вашу цену за выполнение данного задания. Выберите тип
                стоимости, который вы хотели бы предложить заказчику:
              </div>

              <div className='mb-[30px] flex flex-col gap-y-5'>
                <div className='flex items-center gap-x-[5px]'>
                  <Radio
                    onChange={(value) => setPayment(value)}
                    id='o_1'
                    name='payment'
                    value='1'
                    label='Предварительная стоимость'
                  />
                  <div className='group relative'>
                    <span>
                      <div className='up-icon h-[16px] w-[16px] cursor-pointer text-greenDark'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 16 16'
                          role='image'
                        >
                          <circle cx='8' cy='8' r='8' fill='currentColor' />
                          <path
                            d='M7.4 11.8C7.4 12.2418 7.75817 12.6 8.2 12.6C8.64183 12.6 9 12.2418 9 11.8C9 11.3582 8.64183 11 8.2 11C7.75817 11 7.4 11.3582 7.4 11.8ZM8.2 3C6.70536 3 5.45084 4.02342 5.09865 5.40808C4.98973 5.83627 5.35817 6.2 5.8 6.2C6.24183 6.2 6.58396 5.82034 6.79697 5.43325C7.06967 4.93772 7.59731 4.6 8.2 4.6C9.08 4.6 9.8 5.32 9.8 6.2C9.8 7.61558 7.92137 7.62219 7.4883 9.40552C7.38404 9.83487 7.75817 10.2 8.2 10.2C8.64183 10.2 8.98142 9.82361 9.17376 9.42585C9.72525 8.28535 11.4 7.8707 11.4 6.2C11.4 4.432 9.968 3 8.2 3Z'
                            fill='#FFF'
                          />
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>
                <div className='flex items-center gap-x-[5px]'>
                  <Radio
                    onChange={(value) => setPayment(value)}
                    id='o_2'
                    name='payment'
                    value='2'
                    label='Окончательная стоимость'
                  />
                  <div className='group relative'>
                    <span>
                      <div className='up-icon h-[16px] w-[16px] cursor-pointer text-greenDark'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 16 16'
                          role='image'
                        >
                          <circle cx='8' cy='8' r='8' fill='currentColor' />
                          <path
                            d='M7.4 11.8C7.4 12.2418 7.75817 12.6 8.2 12.6C8.64183 12.6 9 12.2418 9 11.8C9 11.3582 8.64183 11 8.2 11C7.75817 11 7.4 11.3582 7.4 11.8ZM8.2 3C6.70536 3 5.45084 4.02342 5.09865 5.40808C4.98973 5.83627 5.35817 6.2 5.8 6.2C6.24183 6.2 6.58396 5.82034 6.79697 5.43325C7.06967 4.93772 7.59731 4.6 8.2 4.6C9.08 4.6 9.8 5.32 9.8 6.2C9.8 7.61558 7.92137 7.62219 7.4883 9.40552C7.38404 9.83487 7.75817 10.2 8.2 10.2C8.64183 10.2 8.98142 9.82361 9.17376 9.42585C9.72525 8.28535 11.4 7.8707 11.4 6.2C11.4 4.432 9.968 3 8.2 3Z'
                            fill='#FFF'
                          />
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>
              </div>

              <input
                type='text'
                className='mb-[30px] h-[40px] max-w-[347px] rounded-[10px] border border-greyThrid py-3 pl-[19px] pr-[12px]'
                placeholder='4000'
              />

              <div>
                <div className='flex max-w-[347px] items-center justify-between gap-x-1 rounded-[15px] bg-[#F9F9F9] px-5 py-2.5'>
                  <span className='text-15 leading-[1.3] text-fontDarkGrey'>
                    Стоимость работы
                  </span>
                  <strong className='text-15 font-normal leading-[1.06] tracking-[-0.6px] text-fontBlack'>
                    4 000 ₽
                  </strong>
                </div>
                <div className='flex max-w-[347px] items-center justify-between gap-x-1 px-5 py-2.5'>
                  <span className='text-15 leading-[1.3] text-fontDarkGrey'>
                    Комиссия платформы (4,9%)
                  </span>
                  <strong className='text-15 font-normal leading-[1.06] tracking-[-0.6px] text-fontBlack'>
                    4 000 ₽
                  </strong>
                </div>
                <div className='flex max-w-[347px] items-center justify-between gap-x-1 rounded-[15px] bg-[#F9F9F9] px-5 py-2.5'>
                  <span className='text-15 leading-[1.3] text-greenDark'>
                    Ваш доход
                  </span>
                  <strong className='text-15 font-normal leading-[1.06] tracking-[-0.6px] text-greenDark'>
                    4 000 ₽
                  </strong>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className='mb-2 text-17 font-medium leading-[1.2] tracking-[-0.17px] text-fontBlack'>
                  Добавить файл
                </div>
                <div className='mb-5 max-w-[578px] text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
                  Вы можете прикрепить файлы, которые могут быть полезны для
                  исполнителя, например, чертежи, документы, образцы и т.д.
                </div>
              </div>

              <div className='mb-5'>
                <input id='upload-file' type='file' className='hidden' />
                <label
                  htmlFor='upload-file'
                  className='flex cursor-pointer select-none items-center text-center text-15 leading-[1.33] tracking-[-0.15px] text-greenDark'
                >
                  <svg
                    className='mr-[6px] text-greenDark'
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='22'
                    viewBox='0 0 20 22'
                    fill='none'
                  >
                    <path
                      d='M2.58008 19.7635C1.30944 18.4928 0.666957 16.9727 0.65263 15.2031C0.638315 13.4334 1.26354 11.9162 2.52829 10.6514L10.8861 2.29359C11.7959 1.38378 12.8932 0.928257 14.1778 0.927024C15.4625 0.925777 16.5592 1.37949 17.4679 2.28817C18.3851 3.20542 18.8428 4.30609 18.841 5.59018C18.8392 6.87427 18.3791 7.9755 17.4607 8.89387L9.89507 16.4595C9.33398 17.0206 8.66322 17.3033 7.88277 17.3076C7.10233 17.3118 6.43036 17.0322 5.86686 16.4687C5.30335 15.9052 5.0323 15.2271 5.05372 14.4344C5.07513 13.6416 5.37308 12.958 5.94758 12.3835L12.9034 5.42767C13.07 5.26109 13.2674 5.18052 13.4957 5.18595C13.7239 5.19141 13.9195 5.27562 14.0825 5.43856C14.2454 5.6015 14.3278 5.79528 14.3296 6.01991C14.3314 6.24454 14.249 6.44014 14.0825 6.60672L7.08806 13.6011C6.84429 13.8449 6.71715 14.1317 6.70664 14.4616C6.69615 14.7915 6.80708 15.0726 7.03942 15.305C7.27175 15.5373 7.55046 15.6501 7.87555 15.6434C8.20066 15.6366 8.48081 15.5157 8.71602 15.2805L16.2945 7.70198C16.8856 7.11091 17.179 6.40634 17.1746 5.58827C17.1704 4.77021 16.8727 4.06564 16.2816 3.47458C15.6906 2.88352 14.986 2.58585 14.1679 2.58158C13.3499 2.57728 12.6453 2.87067 12.0543 3.46175L3.67326 11.8427C2.7395 12.7765 2.283 13.8998 2.30375 15.2127C2.3245 16.5256 2.80557 17.6527 3.74695 18.5941C4.6969 19.544 5.82836 20.0256 7.14135 20.0389C8.45434 20.0522 9.58165 19.588 10.5233 18.6464L18.3227 10.847C18.4893 10.6804 18.684 10.5971 18.9068 10.5971C19.1296 10.5971 19.3238 10.6799 19.4894 10.8454C19.6549 11.011 19.7394 11.2069 19.7429 11.4331C19.7463 11.6594 19.6647 11.8558 19.4981 12.0224L11.7116 19.809C10.4468 21.0737 8.92636 21.7 7.15022 21.6878C5.3741 21.6756 3.85073 21.0341 2.58008 19.7635Z'
                      fill='currentColor'
                    />
                  </svg>
                  Прикрепить файл
                </label>
              </div>

              <div>
                {[...Array(3)].map((_, index) => {
                  return (
                    <div
                      key={index}
                      className='flex w-[317px] items-center justify-between border-[#DBDBDB] py-2 [&:not(:last-child)]:border-b'
                    >
                      <span className='flex-[0_0_190px] text-13 leading-[1.53] tracking-[-0.13px] text-greenDark'>
                        Task_instructions.docx
                      </span>
                      <button className='flex items-center'>
                        <div className='h-[11px] w-[10px] flex-[0_0_10px]'>
                          <svg
                            className='h-full w-full  text-[#6C6C70]'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 10 11'
                            fill='none'
                          >
                            <path
                              d='M5 6.63323L1.36944 10.2638C1.21196 10.4213 1.02309 10.5 0.802827 10.5C0.582568 10.5 0.393695 10.4213 0.23621 10.2638C0.0787367 10.1063 0 9.91743 0 9.69717C0 9.47691 0.0787367 9.28804 0.23621 9.13055L3.86677 5.5L0.23621 1.86944C0.0787367 1.71196 0 1.52309 0 1.30283C0 1.08257 0.0787367 0.893696 0.23621 0.73621C0.393695 0.578737 0.582568 0.5 0.802827 0.5C1.02309 0.5 1.21196 0.578737 1.36944 0.73621L5 4.36677L8.63055 0.73621C8.78804 0.578737 8.97691 0.5 9.19717 0.5C9.41743 0.5 9.6063 0.578737 9.76379 0.73621C9.92126 0.893696 10 1.08257 10 1.30283C10 1.52309 9.92126 1.71196 9.76379 1.86944L6.13323 5.5L9.76379 9.13055C9.92126 9.28804 10 9.47691 10 9.69717C10 9.91743 9.92126 10.1063 9.76379 10.2638C9.6063 10.4213 9.41743 10.5 9.19717 10.5C8.97691 10.5 8.78804 10.4213 8.63055 10.2638L5 6.63323Z'
                              fill='currentColor'
                            />
                          </svg>
                        </div>
                        <span className='ml-[5px] text-13 leading-[1.53] tracking-[-0.13px] text-fontDarkGrey'>
                          Удалить
                        </span>
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='mt-9'>
              <button className='btn-primary mr-[15px] px-5'>Отправить</button>
              <button className='btn-secondary px-5'>Назад</button>
            </div>
          </div>

          {/* Right */}
          <div className='flex-[0_0_351px]'>
            <div className='sticky top-[140px] rounded-[30px] border border-[#DBDBDB] px-[30px] pb-[39px] pt-[17px]'>
              <div className='pb-7'>
                <span className='inline-block text-13 leading-[2.76] tracking-[0.13px] text-greenDark'>
                  Проект
                </span>
                <div className='mb-[18px] text-17 leading-[1.17] tracking-[0.17px] text-fontBlack'>
                  Создание сайта образовательной организации - интернет-магазина
                  "под ключ" на wordpress
                </div>
                <div className='mb-5 text-15 leading-[1.33] tracking-[-0.3px] text-fontDarkGrey'>
                  Специализируюсь на проектировании и дизайне сайтов со сложным
                  и нестандартным функционалом (сервисы, порталы, крупные
                  интернет-магазины...
                </div>
                <Link
                  href='/projects/1'
                  className='flex items-center text-15 leading-[1.06] tracking-[-0.6px] text-greenDark hover:underline'
                >
                  <span>Перейти на страницу проекта</span>
                  <div className='up-icon ml-[9px] h-[10px] w-[10px] text-greenDark'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      role='image'
                      viewBox='0 0 10 10'
                      fill='none'
                    >
                      <path d='M1.17211 10C0.84907 10 0.57296 9.88541 0.343776 9.65622C0.114592 9.42704 0 9.15093 0 8.82789V1.17712C0 0.852708 0.114592 0.575419 0.343776 0.345252C0.57296 0.115084 0.84907 0 1.17211 0H4.22528C4.38928 0 4.52795 0.0578078 4.6413 0.173424C4.75465 0.289031 4.81133 0.428909 4.81133 0.59306C4.81133 0.757211 4.75465 0.895593 4.6413 1.0082C4.52795 1.12081 4.38928 1.17712 4.22528 1.17712H1.17211V8.82789H8.82288V5.77472C8.82288 5.61072 8.87971 5.47205 8.99335 5.3587C9.107 5.24535 9.2459 5.18867 9.41005 5.18867C9.5742 5.18867 9.71356 5.24535 9.82813 5.3587C9.94271 5.47205 10 5.61072 10 5.77472V8.82789C10 9.15093 9.88492 9.42704 9.65475 9.65622C9.42458 9.88541 9.14729 10 8.82288 10H1.17211ZM8.82288 1.99944L4.32184 6.50549C4.20515 6.61957 4.06935 6.67388 3.91443 6.66842C3.75949 6.66296 3.62498 6.60319 3.51089 6.48911C3.39681 6.37502 3.33977 6.23944 3.33977 6.08238C3.33977 5.92531 3.39681 5.78973 3.51089 5.67564L8.00943 1.17712H6.28386C6.11985 1.17712 5.98118 1.1203 5.86783 1.00665C5.75448 0.893 5.69781 0.7541 5.69781 0.589949C5.69781 0.425798 5.75448 0.286438 5.86783 0.171868C5.98118 0.0572891 6.11985 0 6.28386 0H10V3.71614C10 3.88015 9.94219 4.01882 9.82658 4.13217C9.71097 4.24552 9.57109 4.30219 9.40694 4.30219C9.24279 4.30219 9.10441 4.24552 8.9918 4.13217C8.87919 4.01882 8.82288 3.88015 8.82288 3.71614V1.99944Z' />
                    </svg>
                  </div>
                </Link>
              </div>

              <div className='border-t border-[#DBDBDB] pt-7'>
                <div className='mb-2.5 flex items-center justify-between gap-x-1'>
                  <div className='flex items-center'>
                    <span className='inline-block text-15 tracking-[0.15px] text-fontBlack'>
                      Статус проекта
                    </span>
                    <div className='up-icon ml-2 h-[16px] w-[16px] text-greenDark'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        role='image'
                        viewBox='0 0 16 16'
                        fill='none'
                      >
                        <circle cx='8' cy='8' r='8' />
                        <path
                          d='M7.4 11.8C7.4 12.2418 7.75817 12.6 8.2 12.6C8.64183 12.6 9 12.2418 9 11.8C9 11.3582 8.64183 11 8.2 11C7.75817 11 7.4 11.3582 7.4 11.8ZM8.2 3C6.70536 3 5.45084 4.02342 5.09865 5.40808C4.98973 5.83627 5.35817 6.2 5.8 6.2C6.24183 6.2 6.58396 5.82034 6.79697 5.43325C7.06967 4.93772 7.59731 4.6 8.2 4.6C9.08 4.6 9.8 5.32 9.8 6.2C9.8 7.61558 7.92137 7.62219 7.4883 9.40552C7.38404 9.83487 7.75817 10.2 8.2 10.2C8.64183 10.2 8.98142 9.82361 9.17376 9.42585C9.72525 8.28535 11.4 7.8707 11.4 6.2C11.4 4.432 9.968 3 8.2 3Z'
                          fill='white'
                        />
                      </svg>
                    </div>
                  </div>
                  <span className='inline-block text-15 tracking-[-0.3px] text-greenDark'>
                    Открыт
                  </span>
                </div>
                <span className='mb-3 inline-block text-13 tracking-[0.13px] text-fontDarkGrey'>
                  Опубликован 08 авг 2023
                </span>

                <div>
                  <div className='mb-2.5 text-15 leading-[2.4] tracking-[0.15px] text-fontBlack'>
                    Условия проекта
                  </div>

                  <div className='flex flex-col gap-y-5'>
                    <div>
                      <div className='flex items-center justify-between gap-x-1 text-15 leading-[1.06] tracking-[-0.3px] text-fontBlack'>
                        <div>
                          <div className='up-icon mr-[6px] h-[16px] w-[16px] text-greenDark'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 16 16'
                              fill='none'
                            >
                              <path
                                d='M9.72941 15.5627C9.43805 15.8542 9.08403 16 8.66735 16C8.25067 16 7.89664 15.8542 7.60526 15.5627L0.430541 8.38352C0.278349 8.23123 0.16854 8.06435 0.101116 7.88288C0.0337054 7.70142 0 7.50972 0 7.30776V1.48364C0 1.06567 0.142172 0.713908 0.426517 0.428345C0.710862 0.142782 1.06189 0 1.4796 0H7.30011C7.50194 0 7.69787 0.034254 7.88791 0.102762C8.07794 0.171257 8.24905 0.281648 8.40124 0.433935L15.5499 7.58888C15.85 7.88912 16 8.2474 16 8.66372C16 9.08005 15.85 9.43833 15.5499 9.73856L9.72941 15.5627ZM8.70457 14.539L14.5251 8.71493L7.30011 1.48364H1.4796V7.30776L8.70457 14.539ZM3.4979 4.55857C3.78871 4.55857 4.03937 4.45325 4.24988 4.2426C4.46038 4.03196 4.56563 3.78115 4.56563 3.49016C4.56563 3.19918 4.46038 2.94836 4.24988 2.73772C4.03937 2.52709 3.78871 2.42177 3.4979 2.42177C3.20709 2.42177 2.95643 2.52709 2.74593 2.73772C2.53541 2.94836 2.43016 3.19918 2.43016 3.49016C2.43016 3.78115 2.53541 4.03196 2.74593 4.2426C2.95643 4.45325 3.20709 4.55857 3.4979 4.55857Z'
                                fill='currentColor'
                              />
                            </svg>
                          </div>
                          <span>Бюджет</span>
                        </div>
                        <strong className='font-normal text-fontBlack'>
                          15 000 ₽
                        </strong>
                      </div>
                    </div>

                    <div>
                      <div className='flex items-center justify-between gap-x-1 text-15 leading-[1.06] tracking-[-0.3px] text-fontBlack'>
                        <div>
                          <div className='up-icon mr-[6px] h-[16px] w-[16px] text-greenDark'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 14 17'
                              fill='none'
                            >
                              <path d='M5.28394 1.44306C5.08608 1.44306 4.92114 1.37321 4.78914 1.23349C4.65712 1.09377 4.59111 0.921555 4.59111 0.716854C4.59111 0.512141 4.65712 0.341486 4.78914 0.204891C4.92114 0.0682968 5.08608 0 5.28394 0H8.71303C8.91089 0 9.07582 0.0687729 9.20783 0.206319C9.33985 0.343865 9.40586 0.51559 9.40586 0.721493C9.40586 0.926193 9.33985 1.09763 9.20783 1.23581C9.07582 1.37398 8.91089 1.44306 8.71303 1.44306H5.28394ZM7.00007 10.3675C7.19672 10.3675 7.36103 10.2986 7.493 10.1608C7.62496 10.0229 7.69093 9.85209 7.69093 9.64833V6.45066C7.69093 6.24689 7.62442 6.07609 7.4914 5.93826C7.35837 5.80042 7.19354 5.7315 6.9969 5.7315C6.80024 5.7315 6.63593 5.80042 6.50396 5.93826C6.37201 6.07609 6.30603 6.24689 6.30603 6.45066V9.64833C6.30603 9.85209 6.37254 10.0229 6.50557 10.1608C6.63859 10.2986 6.80343 10.3675 7.00007 10.3675ZM6.99778 17C6.03547 17 5.13008 16.8085 4.28158 16.4255C3.43309 16.0425 2.69147 15.5218 2.05672 14.8633C1.42197 14.2048 0.9205 13.4351 0.552308 12.554C0.184103 11.673 0 10.7329 0 9.73368C0 8.73447 0.184236 7.79427 0.552709 6.91308C0.921194 6.0319 1.42279 5.26152 2.05748 4.60195C2.6922 3.94238 3.43377 3.42079 4.28221 3.03717C5.13064 2.65353 6.03606 2.46172 6.99848 2.46172C7.83584 2.46172 8.63018 2.60487 9.38151 2.89118C10.1328 3.17748 10.8112 3.58209 11.4165 4.10501L11.9808 3.51884C12.118 3.37637 12.2809 3.30513 12.4695 3.30513C12.6581 3.30513 12.821 3.37689 12.9582 3.52043C13.0954 3.66396 13.164 3.83366 13.164 4.02953C13.164 4.22539 13.0954 4.39457 12.9582 4.53706L12.3968 5.12006C12.8664 5.69794 13.251 6.36743 13.5506 7.12852C13.8502 7.88963 14 8.75786 14 9.73323C14 10.7329 13.8155 11.6734 13.4465 12.5549C13.0775 13.4363 12.5754 14.2061 11.9404 14.8643C11.3054 15.5224 10.5634 16.043 9.71454 16.4258C8.86566 16.8086 7.96007 17 6.99778 17ZM6.99797 15.4953C8.54044 15.4953 9.85159 14.9355 10.9314 13.816C12.0113 12.6965 12.5512 11.3357 12.5512 9.73376C12.5512 8.13181 12.0114 6.77009 10.932 5.64861C9.85246 4.52714 8.54148 3.9664 6.999 3.9664C5.45653 3.9664 4.14537 4.52696 3.06553 5.64807C1.9857 6.76919 1.44578 8.13073 1.44578 9.73269C1.44578 11.3346 1.98553 12.6956 3.06501 13.8155C4.1445 14.9354 5.45549 15.4953 6.99797 15.4953Z' />
                            </svg>
                          </div>
                          <span>Срок выполнения</span>
                        </div>
                        <strong className='font-normal text-fontBlack'>
                          14 дней
                        </strong>
                      </div>
                    </div>

                    <div>
                      <div className='flex items-center justify-between gap-x-1 text-15 leading-[1.06] tracking-[-0.3px] text-fontBlack'>
                        <div>
                          <div className='up-icon mr-[6px] h-[16px] w-[16px] text-greenDark'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 14 16'
                              fill='none'
                            >
                              <path
                                d='M9.12099 12.9839C8.59663 12.9839 8.1542 12.7973 7.79371 12.4242C7.43321 12.0511 7.25297 11.5944 7.25297 11.0541C7.25297 10.5138 7.43399 10.0578 7.79604 9.68637C8.1581 9.31488 8.6013 9.12914 9.12565 9.12914C9.65 9.12914 10.0924 9.31568 10.4529 9.68876C10.8134 10.0619 10.9937 10.5186 10.9937 11.0589C10.9937 11.5992 10.8126 12.0551 10.4506 12.4266C10.0885 12.7981 9.64534 12.9839 9.12099 12.9839ZM1.44578 16C1.05143 16 0.71188 15.8533 0.427128 15.5599C0.142376 15.2664 0 14.9165 0 14.5102V2.80408C0 2.39686 0.142376 2.04623 0.427128 1.75218C0.71188 1.45813 1.05143 1.31111 1.44578 1.31111H2.48164V0.727241C2.48164 0.523309 2.55031 0.351119 2.68766 0.210671C2.825 0.0702233 2.99227 0 3.18949 0C3.3903 0 3.55965 0.0702233 3.69752 0.210671C3.83539 0.351119 3.90433 0.523309 3.90433 0.727241V1.31111H10.0926V0.727241C10.0926 0.523309 10.1613 0.351119 10.2987 0.210671C10.436 0.0702233 10.6033 0 10.8005 0C11.0013 0 11.1707 0.0702233 11.3085 0.210671C11.4464 0.351119 11.5153 0.523309 11.5153 0.727241V1.31111H12.5512C12.9464 1.31111 13.2866 1.45813 13.572 1.75218C13.8573 2.04623 14 2.39686 14 2.80408V14.5102C14 14.9165 13.8573 15.2664 13.572 15.5599C13.2866 15.8533 12.9464 16 12.5512 16H1.44578ZM1.44578 14.5102H12.5512V6.2971H1.44578V14.5102ZM1.44578 4.98598H12.5512V2.80408H1.44578V4.98598Z'
                                fill='currentColor'
                              />
                            </svg>
                          </div>
                          <span>Дата сдачи проекта</span>
                        </div>
                        <strong className='font-normal text-fontBlack'>
                          22 авг 2023
                        </strong>
                      </div>
                    </div>

                    <div>
                      <div className='flex items-center justify-between gap-x-1 text-15 leading-[1.06] tracking-[-0.3px] text-fontBlack'>
                        <div>
                          <div className='up-icon mr-[6px] h-[16px] w-[16px] text-greenDark'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              role='image'
                              viewBox='0 0 14 19'
                              fill='none'
                            >
                              <path d='M6.99813 19C6.57128 19 6.18598 18.9013 5.8422 18.704C5.49842 18.5067 5.25862 18.2292 5.12281 17.8715H4.90265C4.44926 17.8504 4.0613 17.6728 3.73878 17.3386C3.41625 17.0044 3.25499 16.6134 3.25499 16.1657V12.9138C2.25011 12.2481 1.45639 11.3962 0.873822 10.3582C0.291274 9.32018 0 8.17841 0 6.93287C0 5.00883 0.680347 3.37234 2.04104 2.0234C3.40174 0.674467 5.0538 0 6.99723 0C8.94066 0 10.5937 0.674467 11.9562 2.0234C13.3187 3.37234 14 5.00883 14 6.93287C14 8.18814 13.7081 9.33256 13.1243 10.3661C12.5405 11.3997 11.7474 12.249 10.745 12.9138V16.1657C10.745 16.6134 10.5831 17.0044 10.2593 17.3386C9.93557 17.6728 9.54824 17.8504 9.09735 17.8715H8.87722C8.73889 18.2292 8.4969 18.5067 8.15124 18.704C7.80558 18.9013 7.42121 19 6.99813 19ZM5.04178 16.1657H8.95447V15.2003H5.04178V16.1657ZM5.04178 14.2662H8.95447V13.3476H5.04178V14.2662ZM4.78096 11.7347H6.363V8.82983L4.6367 7.12055C4.50863 6.99373 4.44815 6.8498 4.45527 6.68875C4.4624 6.5277 4.52874 6.38376 4.6543 6.25695C4.78238 6.13261 4.92774 6.07044 5.0904 6.07044C5.25307 6.07044 5.39843 6.13261 5.52649 6.25695L6.99813 7.73895L8.4911 6.25695C8.61918 6.13261 8.76454 6.07304 8.9272 6.07824C9.08987 6.08343 9.23524 6.14819 9.3633 6.27253C9.48887 6.39934 9.55166 6.54067 9.55166 6.69653C9.55166 6.85239 9.48887 6.99373 9.3633 7.12055L7.63325 8.82983V11.7347H9.21529C10.116 11.3092 10.8403 10.6637 11.3879 9.79843C11.9356 8.93311 12.2095 7.97841 12.2095 6.93434C12.2095 5.48595 11.7066 4.26361 10.7008 3.26733C9.69509 2.27104 8.46108 1.7729 6.99881 1.7729C5.53653 1.7729 4.3023 2.27091 3.2961 3.26693C2.2899 4.26295 1.7868 5.48502 1.7868 6.93315C1.7868 7.97703 2.06063 8.93188 2.6083 9.79769C3.15599 10.6635 3.88021 11.3092 4.78096 11.7347Z' />
                            </svg>
                          </div>
                          <span>Опыт исполнителя</span>
                        </div>
                        <div>
                          <div className='up-icon mr-1 h-[14px] w-[16px] text-[#AF52DE]'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              role='image'
                              viewBox='0 0 16 14'
                              fill='none'
                            >
                              <path d='M5.56922 4.35218L7.6936 0H8.3064L10.4308 4.35218H5.56922ZM7.45265 14L0.161514 5.4254H7.45265V14ZM8.54735 14V5.4254H15.8385L8.54735 14ZM11.6633 4.35218L9.54283 0H12.8238C13.1219 0 13.3943 0.0758961 13.641 0.227688C13.8876 0.37948 14.0813 0.582143 14.2219 0.835675L16 4.35218H11.6633ZM0 4.35218L1.7814 0.835675C1.91982 0.582143 2.11236 0.37948 2.359 0.227688C2.60567 0.0758961 2.87807 0 3.17622 0H6.45717L4.33993 4.35218H0Z' />
                            </svg>
                          </div>
                          <strong className='font-normal text-fontBlack'>
                            Эксперт
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
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
