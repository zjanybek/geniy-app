'use client'

import FirstStep from './components/FirstStep'

const page = () => {
  return (
    <div className='py-10'>
      <div className='create-project__second-container'>
        <div>
          <div className='mb-1.5 text-12 uppercase leading-none tracking-[0.12px] text-fontBlack'>
            Для заказчика
          </div>
          <h1 className='font-secondFamily text-[32px] font-bold leading-[1.25] tracking-[-0.64px] text-fontBlack'>
            Личный кабинет
          </h1>
        </div>

        <div>
          <FirstStep />
        </div>
      </div>
    </div>
  )
}

export default page
