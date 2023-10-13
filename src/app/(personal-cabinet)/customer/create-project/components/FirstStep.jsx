'use client'

const placeholderTextArea = `Например, нам нужен уникальный логотип для нашего нового проекта - приложения для трекинга физической активности.

Желаем, чтобы логотип был ярким, современным и отражал динамику движения.
Целевая аудитория - молодые люди в возрасте 18-30 лет.
Ожидаем 3 варианта на выбор с возможностью корректировки.
Готовы рассмотреть ваши идеи и пожелания.`

const FirstStep = () => {
  return (
    <div className=''>
      <div className='border-b border-[#DBDBDB] pb-7'>
        <div>
          <div className='mb-2 text-22 leading-none tracking-[-0.44px] text-fontBlack'>
            Общая информация
          </div>
          {/*  */}
        </div>
        <div className='font-secondFamily text-24 font-bold leading-[1.12] tracking-[-0.48px] text-greenDark'>
          Шаг 1/5
        </div>
      </div>

      <div className='flex flex-col gap-y-9 pt-[34px]'>
        <div>
          <label
            htmlFor=''
            className='mb-2 block text-17 leading-[1.3] tracking-[-0.17px] text-fontBlack'
          >
            Название задания
          </label>
          <span className='mb-3.5 inline-block text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
            Сформулируйте название для вашего задания.
          </span>
          <input
            type='text'
            placeholder='Например, разработка логотипа для стартапа в сфере фитнеса'
            className='h-10 w-full rounded-[10px] border border-[#AEAEB2] py-3 pl-[19px] pr-[38px]'
          />
          <span className='mt-3 inline-block text-13 leading-[1.53] tracking-[-0.13px] text-fontGrey'>
            0 / 80 символов
          </span>
        </div>

        <div>
          <label
            htmlFor=''
            className='mb-2 block text-17 leading-[1.3] tracking-[-0.17px] text-fontBlack'
          >
            Описание задания
          </label>
          <span className='mb-3.5 inline-block text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
            Подробно опишите, что вам нужно, по пунктам, чтобы исполнитель сразу
            понял задачу.
          </span>
          <textarea
            cols='30'
            rows='10'
            placeholder={placeholderTextArea}
            className='text-pre-line text-break w-full rounded-[10px] border border-[#AEAEB2] py-4 pl-[19px] pr-[26px] text-15 leading-[1.33] tracking-[-0.15px]  placeholder:text-greyThrid'
          ></textarea>
          <span className='mt-3 inline-block text-13 leading-[1.53] tracking-[-0.13px] text-fontGrey'>
            0 / 1500 символов (минимум 150)
          </span>
        </div>

        <div>
          <div className='mb-2 text-17 leading-[1.3] tracking-[-0.17px] text-fontBlack'>
            Название задания
          </div>
          <span className='mb-3.5 inline-block max-w-[575px] text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
            Выберите из списка подходящую категорию, которая лучше всего
            описывает вашу задачу. Это поможет привлечь специалистов с нужными
            навыками.
          </span>

          <div>
            <input
              type='text'
              className='mb-[11px] mr-2.5 h-[40px] max-w-xs rounded-[10px] border border-greyThrid py-3 pl-[19px] pr-[12px]'
              placeholder='Дизайн и искусство'
            />
            <input
              type='text'
              className='mb-[11px] h-[40px] max-w-xs rounded-[10px] border border-greyThrid py-3 pl-[19px] pr-[12px]'
              placeholder='Специализация'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstStep
