'use client'

import Link from 'next/link'
import { useState } from 'react'

import Radio from '@/components/ui/Radio/Radio'

const placeholderTextArea = `Например, задание:

- Проанализировать текущий дизайн и предложить улучшения.
- Разработать 3 макета главной страницы.
- Проанализировать пользовательский опыт и предложить изменения.
- Разработать дизайн для мобильной версии сайта.

Требования:
- Опыт работы с Figma или Adobe XD.
- Понимание основ UX/UI.
- Портфолио с примерами релевантных работ.`

const ModalInvite = () => {
  const [payment, setPayment] = useState()
  return (
    <div className='pl-[51px] pr-[64px]'>
      <div className='mb-[22px] text-22 font-medium leading-[1.22] tracking-[-0.44px] text-fontBlack'>
        Пригласить на проект
      </div>
      <div className='mb-10 flex items-center'>
        <div className='mr-[20px] flex h-[50px] w-[50px] flex-[0_0_50px] items-start'>
          <img
            className='h-[50px] w-[50px] rounded-[50%] object-cover'
            src='/images/experts/user-card-mock.svg'
            alt=''
          />
        </div>
        <div>
          <div className='mb-[9px] flex'>
            <div className='flex items-start'>
              <span className='text-15 leading-[1.33] tracking-[-0.6px] text-greenDark'>
                Афанасий В.
              </span>
              <div className='ml-[3px] h-[15px] w-[16px]'>
                <svg
                  className='h-full w-full text-blueLight'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='15'
                  viewBox='0 0 16 15'
                  fill='none'
                >
                  <path
                    d='M7.21877 8.19055L5.9985 6.96148C5.8737 6.83129 5.72069 6.76619 5.53949 6.76619C5.35829 6.76619 5.19967 6.82786 5.06363 6.9512C4.93068 7.08329 4.86421 7.23833 4.86421 7.41632C4.86421 7.59431 4.93068 7.7484 5.06363 7.87859L6.72879 9.49716C6.8674 9.6348 7.03072 9.70362 7.21877 9.70362C7.40682 9.70362 7.57015 9.6348 7.70876 9.49716L10.9364 6.34862C11.0643 6.22529 11.1274 6.07519 11.1259 5.89832C11.1243 5.72145 11.0571 5.57039 10.9242 5.44514C10.7963 5.32977 10.6437 5.27333 10.4666 5.2758C10.2895 5.27826 10.142 5.33814 10.0242 5.45542L7.21877 8.19055ZM5.16593 14.6542L4.06535 12.8158L1.89931 12.375C1.72736 12.3432 1.58647 12.2545 1.47666 12.1089C1.36685 11.9632 1.32415 11.8057 1.34857 11.6363L1.5866 9.54666L0.179108 7.94732C0.0597027 7.82355 0 7.67444 0 7.5C0 7.32556 0.0597027 7.17645 0.179108 7.05268L1.5866 5.46528L1.34857 3.37562C1.32415 3.20628 1.36685 3.04878 1.47666 2.90309C1.58647 2.7574 1.72736 2.66776 1.89931 2.63416L4.06535 2.19618L5.16593 0.345824C5.25704 0.198147 5.38629 0.0955961 5.55369 0.0381746C5.7211 -0.0192589 5.88777 -0.0118117 6.0537 0.060515L8 0.924509L9.9463 0.060515C10.1122 -0.00989922 10.2789 -0.0188639 10.4463 0.0336211C10.6137 0.0861061 10.743 0.186187 10.8341 0.333864L11.9469 2.19618L14.1007 2.63416C14.2726 2.66776 14.4135 2.7574 14.5233 2.90309C14.6331 3.04878 14.6758 3.20628 14.6514 3.37562L14.4134 5.46528L15.8209 7.05268C15.9403 7.17645 16 7.32556 16 7.5C16 7.67444 15.9403 7.82355 15.8209 7.94732L14.4134 9.54666L14.6514 11.6363C14.6758 11.8057 14.6331 11.9632 14.5233 12.1089C14.4135 12.2545 14.2726 12.3432 14.1007 12.375L11.9469 12.8158L10.8341 14.6661C10.743 14.8138 10.6137 14.9139 10.4463 14.9664C10.2789 15.0189 10.1122 15.0099 9.9463 14.9395L8 14.0755L6.0537 14.9395C5.88777 15.0099 5.7211 15.0169 5.55369 14.9604C5.38629 14.9039 5.25704 14.8019 5.16593 14.6542Z'
                    fill='currentColor'
                  />
                </svg>
              </div>
            </div>
            <span className='ml-[19px] text-12 leading-[1.66] tracking-[-0.48px] text-fontGrey'>
              Россия, Москва
            </span>
            <Link href='/' className='ml-[19px] flex items-center gap-x-[6px]'>
              <span className='text-13 tracking-[-0.52px] text-greenDark'>
                Перейти в профиль
              </span>
              <div className='h-[10px] w-[10px] flex-[0_0_10px]'>
                <svg
                  className='h-full w-full text-greenDark'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 10 10'
                  fill='none'
                >
                  <path
                    d='M1.17211 10C0.84907 10 0.57296 9.88541 0.343776 9.65622C0.114592 9.42704 0 9.15093 0 8.82789V1.17712C0 0.852708 0.114592 0.575419 0.343776 0.345252C0.57296 0.115084 0.84907 0 1.17211 0H4.22528C4.38928 0 4.52795 0.0578078 4.6413 0.173424C4.75465 0.289031 4.81133 0.428909 4.81133 0.59306C4.81133 0.757211 4.75465 0.895593 4.6413 1.0082C4.52795 1.12081 4.38928 1.17712 4.22528 1.17712H1.17211V8.82789H8.82288V5.77472C8.82288 5.61072 8.87971 5.47205 8.99335 5.3587C9.107 5.24535 9.2459 5.18867 9.41005 5.18867C9.5742 5.18867 9.71356 5.24535 9.82813 5.3587C9.94271 5.47205 10 5.61072 10 5.77472V8.82789C10 9.15093 9.88492 9.42704 9.65475 9.65622C9.42458 9.88541 9.14729 10 8.82288 10H1.17211ZM8.82288 1.99944L4.32184 6.50549C4.20515 6.61957 4.06935 6.67388 3.91443 6.66842C3.75949 6.66296 3.62498 6.60319 3.51089 6.48911C3.39681 6.37502 3.33977 6.23944 3.33977 6.08238C3.33977 5.92531 3.39681 5.78973 3.51089 5.67564L8.00943 1.17712H6.28386C6.11985 1.17712 5.98118 1.1203 5.86783 1.00665C5.75448 0.893 5.69781 0.7541 5.69781 0.589949C5.69781 0.425798 5.75448 0.286438 5.86783 0.171868C5.98118 0.0572891 6.11985 0 6.28386 0H10V3.71614C10 3.88015 9.94219 4.01882 9.82658 4.13217C9.71097 4.24552 9.57109 4.30219 9.40694 4.30219C9.24279 4.30219 9.10441 4.24552 8.9918 4.13217C8.87919 4.01882 8.82288 3.88015 8.82288 3.71614V1.99944Z'
                    fill='currentColor'
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className='flex flex-wrap items-center gap-[20px]'>
            <span className='text-15 font-medium leading-[1.06] tracking-[-0.6px] text-fontBlack'>
              1 500 ₽ / час
            </span>
            <span className='text-15 leading-[1.06] tracking-[-0.6px] text-fontBlack'>
              <span className='font-medium'>78</span> завершенных проектов
            </span>
            <div className='flex h-[17px] items-start gap-x-[6px]'>
              <div className='h-[14px] w-[14px] text-greenDark'>
                <svg
                  className='h-full w-full'
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                  fill='none'
                >
                  <path
                    d='M7 11.6828L3.51263 13.8831C3.37675 13.9705 3.23543 14.0089 3.08868 13.9983C2.94193 13.9876 2.81232 13.9386 2.69984 13.8512C2.58736 13.7638 2.50245 13.652 2.44509 13.5159C2.38772 13.3797 2.37617 13.227 2.41045 13.0578L3.33269 8.9018L0.252428 6.09807C0.126006 5.98254 0.0481134 5.85166 0.0187502 5.70541C-0.010613 5.55917 -0.00548867 5.41656 0.0341232 5.27761C0.0716801 5.13866 0.145831 5.02215 0.256576 4.92808C0.367322 4.83401 0.505718 4.77797 0.671764 4.75994L4.74069 4.38806L6.31713 0.463871C6.38036 0.307091 6.47652 0.190581 6.60561 0.11434C6.73471 0.0381138 6.86617 0 7 0C7.13383 0 7.26529 0.0381138 7.39439 0.11434C7.52348 0.190581 7.61964 0.307091 7.68287 0.463871L9.25931 4.38806L13.3313 4.75994C13.4953 4.77797 13.6327 4.83401 13.7434 4.92808C13.8542 5.02215 13.9283 5.13866 13.9659 5.27761C14.0055 5.41656 14.0106 5.55917 13.9812 5.70541C13.9519 5.85166 13.874 5.98254 13.7476 6.09807L10.6673 8.9018L11.5896 13.0578C11.6238 13.227 11.6123 13.3797 11.5549 13.5159C11.4976 13.652 11.4126 13.7638 11.3002 13.8512C11.1877 13.9386 11.0581 13.9876 10.9113 13.9983C10.7646 14.0089 10.6233 13.9705 10.4874 13.8831L7 11.6828Z'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <span className='text-15 leading-[1.06] tracking-[-0.6px] text-fontBlack'>
                <span className='font-medium'>5.0</span> (81 отзыв)
              </span>
            </div>
            <div className='flex items-center gap-x-[8px]'>
              <img
                className='h-4 w-[18px]'
                src='/images/experts/diamond-blue.svg'
                alt=''
              />
              <span className='text-15 leading-[1.06] tracking-[-0.6px] text-fontBlack'>
                Продвинутый
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='mb-[37px]'>
        <div className='mb-[7px] text-17 tracking-[-0.17px] text-fontBlack'>
          Название задания
        </div>
        <div>
          <label
            htmlFor=''
            className='mb-[14px] inline-block text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'
          >
            Введите краткое и понятное название для вашего задания.
          </label>
          <input
            type='text'
            className='mb-[11px] h-[40px] w-full rounded-[10px] border border-greyThrid py-3 pl-[19px] pr-[12px]'
            placeholder='Например, редизайн сайта интернет-магазина игрушек.'
          />
          <span className='text-13 leading-[1.53] tracking-[-0.13px] text-fontGrey'>
            0 / 80 символов
          </span>
        </div>
      </div>
      <div className='mb-[37px]'>
        <div className='mb-[7px] text-17 tracking-[-0.17px] text-fontBlack'>
          Описание задания
        </div>
        <div>
          <label
            htmlFor=''
            className='mb-[14px] inline-block text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'
          >
            Подробно опишите ваше задание, требования и ожидания.
          </label>
          <textarea
            name=''
            id=''
            cols='30'
            rows='12'
            className='text-pre-line text-break mb-[13px] w-full rounded-[10px] border border-greyThrid px-5 py-[15px] text-15 leading-[1.33] tracking-[-0.15px]  placeholder:text-greyThrid'
            placeholder={placeholderTextArea}
          ></textarea>
          <span className='text-13 leading-[1.53] tracking-[-0.13px] text-fontGrey'>
            0 / 80 символов
          </span>
        </div>
      </div>
      <div className='mb-[37px]'>
        <div className='mb-[7px] text-17 tracking-[-0.17px] text-fontBlack'>
          Бюджет
        </div>
        <div className='mb-6 text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
          Укажите бюджет задания.
        </div>
        <div className='mb-[30px] flex flex-col gap-y-5'>
          <div className='flex items-center gap-x-[5px]'>
            <Radio
              onChange={(value) => setPayment(value)}
              id='o_1'
              name='payment'
              value='1'
              label='Фиксированная цена'
            />
            <div className='group relative'>
              <span>
                <div class='up-icon h-[16px] w-[16px] cursor-pointer text-greenDark'>
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
              {/* <div className='popaver-view max-w-[369px w-[369px] py-[20px] pl-[25px] pr-[20px] group-hover:visible group-hover:translate-x-[-50%] group-hover:translate-y-0 group-hover:opacity-100'>
                <div className='mb-2 text-13 tracking-[-0.13px] text-fontBlack'>
                  Фиксированная цена
                </div>
                <div className='mb-3 text-13 leading-[1.23] tracking-[-0.13px] text-fontGrey'>
                  Вы заранее определяете конечную сумму, которую готовы
                  заплатить за выполнение всего задания.
                </div>
                <div className='text-13 leading-[1.23] tracking-[-0.13px] text-fontGrey'>
                  Хороший выбор для проектов с четко обозначенными задачами и
                  сроками.
                </div>
              </div> */}
            </div>
          </div>

          {/* <div>
            <div className='tooltip w-[400px]'>
              <div className='tooltip__text'>
                tooltip text
                <span className='tooltip__arrow'></span>
              </div>
              <span>hover on me</span>
            </div>
          </div> */}

          <div className='flex items-center gap-x-[5px]'>
            <Radio
              onChange={(value) => setPayment(value)}
              id='o_2'
              name='payment'
              value='2'
              label='Почасовая оплата'
            />
            <span>
              <div class='up-icon h-[16px] w-[16px] cursor-pointer text-greenDark'>
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
          <div className='flex items-center gap-x-[5px]'>
            <Radio
              onChange={(value) => setPayment(value)}
              id='o_3'
              name='payment'
              value='3'
              label='Бюджет не определен'
            />
            <span>
              <div class='up-icon h-[16px] w-[16px] cursor-pointer text-greenDark'>
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
        <div>
          <input
            type='text'
            className='mb-2 h-[40px] max-w-[320px] rounded-[10px] border border-greyThrid py-3 pl-[19px] pr-[12px]'
            placeholder='Укажите сумму'
          />
          <span className='block text-12 leading-[1.66] tracking-[-0.12px] text-fontGrey'>
            Рублей, ₽
          </span>
        </div>
      </div>
      <div className='mb-[44px]'>
        <div className='mb-[7px] text-17 tracking-[-0.17px] text-fontBlack'>
          Срок выполнения
        </div>
        <div className='mb-[18px] text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
          Укажите ожидаемую дату завершения работы. Будьте реалистичны в своих
          оценках, учтите время на обсуждение деталей с исполнителем.
        </div>
        <input
          type='text'
          className='mb-[11px] h-[40px] max-w-xs rounded-[10px] border border-greyThrid py-3 pl-[19px] pr-[12px]'
          placeholder='01 сентября 2023'
        />
      </div>
      <div className='mb-[44px]'>
        <div className='mb-[7px] text-17 tracking-[-0.17px] text-fontBlack'>
          Требуемый уровень опыта
        </div>
        <div className='mb-7 text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
          Выберите уровень опыта, который необходим для выполнения этого
          задания. Он определяет квалификацию исполнителя.
        </div>
        <div className='flex flex-col gap-y-5'>
          <Radio
            onChange={(value) => setPayment(value)}
            id='o_4'
            name='payment'
            value='1'
            label='Начальный'
          />
          <Radio
            onChange={(value) => setPayment(value)}
            id='o_5'
            name='payment'
            value='2'
            label='Продвинутый'
          />
          <Radio
            onChange={(value) => setPayment(value)}
            id='o_6'
            name='payment'
            value='3'
            label='Эксперт'
          />
        </div>
      </div>
      <div>
        <div className='mb-[7px] text-17 tracking-[-0.17px] text-fontBlack'>
          Добавить файл
        </div>
        <div className='mb-5 text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
          Вы можете прикрепить файлы, которые могут быть полезны для
          исполнителя, например, чертежи, документы, образцы и т.д.
        </div>
        <div className='mb-[22px]'>
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
                className='flex w-[317px] items-center justify-between border-b border-[#DBDBDB] py-2'
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
      <div className='mt-[30px] flex items-center gap-x-2.5'>
        <button className='btn-primary px-[20px]'>Отправить</button>
        <button className='btn-secondary px-[20px]'>Отмена</button>
      </div>
    </div>
  )
}

export default ModalInvite
