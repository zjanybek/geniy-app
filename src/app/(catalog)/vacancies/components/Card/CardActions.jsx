'use client'

import { useState } from 'react'

import CompainCheckbox from '@/components/Catalog/CompainCheckbox'
import Modal from '@/components/Modal/Modal'

const CardActions = () => {
  const [showModal, setShowModal] = useState(false)
  const [check, setCheck] = useState(false)

  return (
    <>
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <div className='min-h-screen pb-[50px] pl-[50px] pr-[66px]'>
            <div className='mb-[35px] text-22 leading-[1.22] tracking-[-0.44px] text-fontBlack'>
              Пожаловаться на заказчика
            </div>
            <div className='flex flex-col gap-y-6'>
              <CompainCheckbox
                id='o_1'
                selected={check}
                onChange={() => setCheck(!check)}
              >
                <div className='ml-2.5'>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontBlack'>
                    Грубость или оскорбления
                  </div>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
                    Действия заказчика, которые могут быть восприняты как
                    оскорбительные или грубые.
                  </div>
                </div>
              </CompainCheckbox>
              <CompainCheckbox
                id='o_1'
                selected={check}
                onChange={() => setCheck(!check)}
              >
                <div className='ml-2.5'>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontBlack'>
                    Спам
                  </div>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
                    Действия заказчика, которые могут быть восприняты как
                    нежелательные или повторяющиеся сообщения, с целью рекламы
                    или других несанкционированных действий.
                  </div>
                </div>
              </CompainCheckbox>
              <CompainCheckbox
                id='o_1'
                selected={check}
                onChange={() => setCheck(!check)}
              >
                <div className='ml-2.5'>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontBlack'>
                    Мошенничество или обман
                  </div>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
                    Есть подозрение, что заказчик занимается мошенничеством или
                    предоставляет ложную информацию.
                  </div>
                </div>
              </CompainCheckbox>
              <CompainCheckbox
                id='o_1'
                selected={check}
                onChange={() => setCheck(!check)}
              >
                <div className='ml-2.5'>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontBlack'>
                    Нарушение конфиденциальности
                  </div>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
                    Несанкционированное распространение личной информации или
                    других конфиденциальных данных.
                  </div>
                </div>
              </CompainCheckbox>
              <CompainCheckbox
                id='o_1'
                selected={check}
                onChange={() => setCheck(!check)}
              >
                <div className='ml-2.5'>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontBlack'>
                    Фальсификация данных
                  </div>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
                    Предоставление недостоверной информации или фальшивых
                    отзывов.
                  </div>
                </div>
              </CompainCheckbox>
              <CompainCheckbox
                id='o_1'
                selected={check}
                onChange={() => setCheck(!check)}
              >
                <div className='ml-2.5'>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontBlack'>
                    Эксплуатация или злоупотребление
                  </div>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
                    Случаи, когда заказчик эксплуатирует исполнителя, например,
                    принуждает к неоплачиваемой работе.
                  </div>
                </div>
              </CompainCheckbox>
              <CompainCheckbox
                id='o_1'
                selected={check}
                onChange={() => setCheck(!check)}
              >
                <div className='ml-2.5'>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontBlack'>
                    Несоблюдение установленных правил платформы
                  </div>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
                    Жалобы на нарушение условий использования или других
                    внутренних правил платформы.
                  </div>
                </div>
              </CompainCheckbox>
              <CompainCheckbox
                id='o_1'
                selected={check}
                onChange={() => setCheck(!check)}
              >
                <div className='ml-2.5'>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontBlack'>
                    Домогательства
                  </div>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
                    Поведение заказчика, которое может рассматриваться как
                    домогательство или преследование.
                  </div>
                </div>
              </CompainCheckbox>
              <CompainCheckbox
                id='o_1'
                selected={check}
                onChange={() => setCheck(!check)}
              >
                <div className='ml-2.5'>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontBlack'>
                    Прочее
                  </div>
                  <div className='text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
                    Если ваш случай не подходит под вышеперечисленные категории,
                    но вы все равно считаете поведение некорректным.
                  </div>
                </div>
              </CompainCheckbox>
            </div>

            <div className='mt-6'>
              <button className='btn-primary mr-[15px] h-10 px-5'>
                Продолжить
              </button>
              <button className='btn-secondary h-10 px-5'>Отмена</button>
            </div>
          </div>
        </Modal>
      )}
      <button
        onClick={() => setShowModal(!showModal)}
        className='flex h-[35px] w-[35px] items-center justify-center rounded-[50%] border-2 border-[#D1D1D6] text-[#D1D1D6]'
      >
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
      <button className='flex h-[35px] w-[35px] items-center justify-center rounded-[50%] border-2 border-[#D1D1D6] text-[#D1D1D6]'>
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
    </>
  )
}

export default CardActions
