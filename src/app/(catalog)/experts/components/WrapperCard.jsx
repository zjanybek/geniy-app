'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { cloneElement, useState } from 'react'

import Modal from '@/components/Modal/Modal'

import ExpertModal from './ExpertModal/ExpertModal'

export function WrapperCard({ children, id }) {
  const [showModal, setShowModal] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleClick = () => {
    console.log('WOOOORK')
    setShowModal(true)

    const params = new URLSearchParams(searchParams)
    params.set('profile', id)
    router.replace(`/experts/?${params.toString()}`, { scroll: false })
  }

  const handleClose = () => {
    console.log('WOOOORK')
    setShowModal(false)

    const params = new URLSearchParams(searchParams)
    params.delete('profile')
    router.replace(`/experts/?${params.toString()}`, { scroll: false })
  }

  return (
    <>
      {cloneElement(children, { onClick: handleClick })}
      {showModal && (
        <Modal show={showModal} onClose={handleClose} maxWidth='xl'>
          <ExpertModal />
        </Modal>
      )}
    </>
  )
}
