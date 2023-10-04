'use client'

import { useState } from 'react'

import Modal from '@/components/Modal/Modal'
import Button from '@/components/ui/Button'

import ModalInvite from './ModalInvite'
import ModalSendMessage from './ModalSendMessage'

const ActionsButton = () => {
  const [isSendMessageModal, setIsSendMessageModal] = useState(false)
  const [isInviteModal, setIsInviteModal] = useState(false)

  return (
    <>
      {isSendMessageModal && (
        <Modal
          isOpen={isSendMessageModal}
          onClose={() => setIsSendMessageModal(false)}
        >
          <ModalSendMessage />
        </Modal>
      )}

      {isInviteModal && (
        <Modal isOpen={isInviteModal} onClose={() => setIsInviteModal(false)}>
          <ModalInvite />
        </Modal>
      )}

      <div className='flex items-center gap-x-[9px]'>
        <button className='flex h-[35px] w-[35px] flex-[0_0_35px] items-center justify-center rounded-[50%] border border-[#D1D1D6]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='4'
            viewBox='0 0 16 4'
            fill='none'
          >
            <path
              d='M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z'
              fill='#24A322'
            />
          </svg>
        </button>
        <Button
          onClick={() => setIsSendMessageModal(true)}
          border={true}
          className='w-[121px] flex-[0_0_121px]'
        >
          Написать
        </Button>
        <Button
          onClick={() => setIsInviteModal(true)}
          className='w-[121px] flex-[0_0_121px]'
        >
          Пригласить
        </Button>
      </div>
    </>
  )
}

export default ActionsButton
