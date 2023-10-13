'use client'

import Radio from '@/components/ui/Radio/Radio'

const SecondStep = () => {
  return (
    <div className=''>
      <div className='border-b border-[#DBDBDB] pb-7'>
        <div>
          <div className='mb-2 text-22 leading-none tracking-[-0.44px] text-fontBlack'>
            Детали задания
          </div>
          {/*  */}
        </div>
        <div className='font-secondFamily text-24 font-bold leading-[1.12] tracking-[-0.48px] text-greenDark'>
          Шаг 2/5
        </div>
      </div>

      <div className='pt-[34px]'>
        <div className='mb-11'>
          <div className='mb-2 text-17 leading-[1.3] tracking-[-0.17px] text-fontBlack'>
            Срок выполнения
          </div>
          <span className='mb-5 inline-block max-w-[575px] text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
            Укажите ожидаемую дату завершения работы. Будьте реалистичны в своих
            оценках, учтите время на обсуждение деталей с исполнителем.
          </span>

          <div>
            <input
              type='text'
              className='mb-[11px] h-[40px] max-w-xs rounded-[10px] border border-greyThrid py-3 pl-[19px] pr-[12px]'
              placeholder='01 сентября 2023'
            />
          </div>
        </div>

        <div className='mb-10'>
          <div className='mb-2 text-17 leading-[1.3] tracking-[-0.17px] text-fontBlack'>
            Бюджет
          </div>
          <span className='mb-7 inline-block max-w-[575px] text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
            Укажите ваш бюджет для этого задания. Помните, что чем больше
            бюджет, тем больше шансов привлечь опытных специалистов.
          </span>

          <div className='flex flex-col gap-y-[18px]'>
            <div>
              <Radio id='o_1' label='Фиксированная цена' />
              <div className='max-w-[606px] pl-[30px] text-15 leading-[1.33] tracking-[-0.15px] text-fontGrey'>
                Вы заранее определяете конечную сумму, которую готовы заплатить
                за выполнение всего задания. Хороший выбор для проектов с четко
                обозначенными задачами и сроками.
              </div>
            </div>
            <div>
              <Radio id='o_2' label='Почасовая оплата' />
              <div className='max-w-[606px] pl-[30px] text-15 leading-[1.33] tracking-[-0.15px] text-fontGrey'>
                Оплата исполнителю за каждый отработанный час. Оптимальный
                вариант для проектов с непредсказуемым объемом работы или
                возможностью расширения задач в процессе выполнения.
              </div>
            </div>
            <div>
              <Radio id='o_3' label='Бюджет не определен' />
              <div className='max-w-[606px] pl-[30px] text-15 leading-[1.33] tracking-[-0.15px] text-fontGrey'>
                Если вы не уверены в стоимости проекта, и готовы обсудить это с
                потенциальными кандидатами.
              </div>
            </div>
          </div>
        </div>

        <input
          type='text'
          placeholder='Укажите сумму'
          className='h-10 max-w-xs rounded-[10px] border border-[#AEAEB2] px-5 py-3'
        />
        <span className='mt-3 block text-13 leading-[1.53] tracking-[-0.13px] text-fontGrey'>
          Рублей,
        </span>
      </div>
    </div>
  )
}

export default SecondStep
