import Link from 'next/link'

const page = () => {
  return (
    <div className='py-10'>
      <div className='perfomer-page__second-container'>
        <h1>Customer</h1>
        <Link href='/customer/create-project' className='text-greenDark'>
          Разместить проект
        </Link>
      </div>
    </div>
  )
}

export default page
