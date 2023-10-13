'use client'

import Checkbox from '@/components/ui/Checkbox'

const FifthStep = () => {
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
          Шаг 5/5
        </div>
      </div>

      <div className='pt-[34px]'>
        <div className='mb-10'>
          <div className='mb-2 text-17 leading-[1.3] tracking-[-0.17px] text-fontBlack'>
            Перед публикацией
          </div>
          <span className='mb-7 inline-block max-w-[575px] text-15 leading-[1.33] tracking-[-0.15px] text-fontDarkGrey'>
            Проверьте все введенные данные и, если все в порядке, нажмите
            «Опубликовать». Ожидайте откликов от кандидатов и выберите самого
            подходящего.
          </span>

          <div className='flex flex-col gap-y-[18px]'>
            <div>
              <Checkbox
                id='c_1'
                label='Уведомление об авторских правах'
                variants='secondary'
              />
              <div className='mt-2 max-w-[575px] pl-[32px] text-15 leading-[1.33] tracking-[-0.15px] text-fontGrey'>
                Опубликовав ваше задание, вы подтверждаете, что владеете правами
                на представленные материалы и их размещение не нарушает прав
                третьих лиц. Вы также соглашаетесь с тем, что ваша услуга будет
                проверена нашей платформой на соответствие критериям сервиса.
              </div>
            </div>
            <div>
              <Checkbox
                id='c_2'
                label='Условия использования сервиса'
                variants='secondary'
              />
              <div className='mt-2 max-w-[653px] pl-[32px] text-15 leading-[1.33] tracking-[-0.15px] text-fontGrey'>
                Я понимаю и согласен с Условиями использования сервиса, включая
                Пользовательское соглашение и Политику конфиденциальности.
              </div>
            </div>
            <div>
              <Checkbox
                id='c_3'
                label='Уведомление о конфиденциальности'
                variants='secondary'
              />
              <div className='mt-2 max-w-[616px] pl-[32px] text-15 leading-[1.33] tracking-[-0.15px] text-fontGrey'>
                Опубликовав данное задание, я понимаю, что он будет отображаться
                в результатах поиска нашей платформы и выдаваться в результатах
                поисковых систем.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FifthStep
