import CommentRating from '../Comment/CommentRating'

import styles from './reviews.module.scss'

const Reviews = () => {
  return (
    <>
      <div className='text-17 font-medium leading-[2.11] tracking-[0.17px] text-fontBlack [&:not(:last-child)]:mb-5'>
        Отзывы <span>(127)</span>
      </div>
      <div className='flex items-center'>
        <div className='w-1/3'>
          <div className={styles.raiting}>
            <div className={styles.rating__progress}>
              <div className={styles['rating__progress-value']}>
                <p className={styles['rating__rating-value']}>5.0</p>
                <div className={styles.progress}>
                  <div className={styles.bar}></div>
                </div>
                <p className={`${styles['rating__rating-value']}`}>(32)</p>
              </div>
            </div>
            <div className={styles.rating__progress}>
              <div className={styles['rating__progress-value']}>
                <p className={styles['rating__rating-value']}>4.0</p>
                <div className={styles.progress}>
                  <div className={styles.bar}></div>
                </div>
                <p
                  className={`${styles['rating__rating-value']} ${styles['rating__rating-value_grey']}`}
                >
                  (0)
                </p>
              </div>
            </div>
            <div className={styles.rating__progress}>
              <div className={styles['rating__progress-value']}>
                <p className={styles['rating__rating-value']}>3.0</p>
                <div className={styles.progress}>
                  <div className={styles.bar}></div>
                </div>
                <p
                  className={`${styles['rating__rating-value']} ${styles['rating__rating-value_grey']}`}
                >
                  (0)
                </p>
              </div>
            </div>
            <div className={styles.rating__progress}>
              <div className={styles['rating__progress-value']}>
                <p className={styles['rating__rating-value']}>2.0</p>
                <div className={styles.progress}>
                  <div className={styles.bar}></div>
                </div>
                <p
                  className={`${styles['rating__rating-value']} ${styles['rating__rating-value_grey']}`}
                >
                  (0)
                </p>
              </div>
            </div>
            <div className={styles.rating__progress}>
              <div className={styles['rating__progress-value']}>
                <p className={styles['rating__rating-value']}>1.0</p>
                <div className={styles.progress}>
                  <div className={styles.bar}></div>
                </div>
                <p
                  className={`${styles['rating__rating-value']} ${styles['rating__rating-value_grey']}`}
                >
                  (0)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-auto'>
          <div className='mb-2.5 flex h-[16px]'>
            <CommentRating
              initialValue={5}
              maxRating={5}
              // className='h-full'
            />

            <span className='ml-2.5 text-17 font-medium leading-none tracking-[-0.68px] text-fontBlack'>
              5.0
            </span>
          </div>
          <div>
            <div className='mb-[9px] text-13 leading-[1.23] tracking-[-0.52px] text-fontGrey'>
              32 отзыва
            </div>
            <div className='flex gap-x-8'>
              <div className='w-[39.8%]'>
                <div className='flex items-center justify-between [&:not(:last-child)]:mb-2'>
                  <span className='text-13 leading-[1.23] tracking-[-0.52px] text-fontBlack'>
                    Качество
                  </span>
                  <div className='flex items-start gap-x-[3px]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                    >
                      <path
                        d='M6 10.0138L3.01083 11.8998C2.89436 11.9747 2.77323 12.0076 2.64744 11.9985C2.52165 11.9894 2.41056 11.9474 2.31415 11.8725C2.21774 11.7975 2.14495 11.7017 2.09579 11.585C2.04662 11.4683 2.03672 11.3375 2.0661 11.1924L2.85659 7.63011L0.216367 5.22692C0.108005 5.1279 0.04124 5.01571 0.0160716 4.89035C-0.00909685 4.765 -0.00470457 4.64277 0.0292484 4.52366C0.0614401 4.40457 0.124998 4.3047 0.219923 4.22407C0.314847 4.14344 0.433472 4.0954 0.575798 4.07995L4.06345 3.76119L5.41468 0.397604C5.46888 0.263221 5.5513 0.163355 5.66195 0.0980061C5.77261 0.032669 5.88529 0 6 0C6.11471 0 6.22739 0.032669 6.33805 0.0980061C6.4487 0.163355 6.53112 0.263221 6.58532 0.397604L7.93655 3.76119L11.4269 4.07995C11.5674 4.0954 11.6852 4.14344 11.7801 4.22407C11.875 4.3047 11.9386 4.40457 11.9708 4.52366C12.0047 4.64277 12.0091 4.765 11.9839 4.89035C11.9588 5.01571 11.892 5.1279 11.7836 5.22692L9.14341 7.63011L9.9339 11.1924C9.96328 11.3375 9.95338 11.4683 9.90421 11.585C9.85505 11.7017 9.78226 11.7975 9.68585 11.8725C9.58944 11.9474 9.47834 11.9894 9.35256 11.9985C9.22677 12.0076 9.10564 11.9747 8.98917 11.8998L6 10.0138Z'
                        fill='#24A322'
                      />
                    </svg>
                    <span className='text-13 leading-[1.23] tracking-[-0.52px] text-fontBlack'>
                      5.0
                    </span>
                  </div>
                </div>
                <div className='flex items-center justify-between [&:not(:last-child)]:mb-2'>
                  <span className='text-13 leading-[1.23] tracking-[-0.52px] text-fontBlack'>
                    Соблюдение сроков
                  </span>
                  <div className='flex items-start gap-x-[3px]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                    >
                      <path
                        d='M6 10.0138L3.01083 11.8998C2.89436 11.9747 2.77323 12.0076 2.64744 11.9985C2.52165 11.9894 2.41056 11.9474 2.31415 11.8725C2.21774 11.7975 2.14495 11.7017 2.09579 11.585C2.04662 11.4683 2.03672 11.3375 2.0661 11.1924L2.85659 7.63011L0.216367 5.22692C0.108005 5.1279 0.04124 5.01571 0.0160716 4.89035C-0.00909685 4.765 -0.00470457 4.64277 0.0292484 4.52366C0.0614401 4.40457 0.124998 4.3047 0.219923 4.22407C0.314847 4.14344 0.433472 4.0954 0.575798 4.07995L4.06345 3.76119L5.41468 0.397604C5.46888 0.263221 5.5513 0.163355 5.66195 0.0980061C5.77261 0.032669 5.88529 0 6 0C6.11471 0 6.22739 0.032669 6.33805 0.0980061C6.4487 0.163355 6.53112 0.263221 6.58532 0.397604L7.93655 3.76119L11.4269 4.07995C11.5674 4.0954 11.6852 4.14344 11.7801 4.22407C11.875 4.3047 11.9386 4.40457 11.9708 4.52366C12.0047 4.64277 12.0091 4.765 11.9839 4.89035C11.9588 5.01571 11.892 5.1279 11.7836 5.22692L9.14341 7.63011L9.9339 11.1924C9.96328 11.3375 9.95338 11.4683 9.90421 11.585C9.85505 11.7017 9.78226 11.7975 9.68585 11.8725C9.58944 11.9474 9.47834 11.9894 9.35256 11.9985C9.22677 12.0076 9.10564 11.9747 8.98917 11.8998L6 10.0138Z'
                        fill='#24A322'
                      />
                    </svg>
                    <span className='text-13 leading-[1.23] tracking-[-0.52px] text-fontBlack'>
                      5.0
                    </span>
                  </div>
                </div>
                <div className='flex items-center justify-between [&:not(:last-child)]:mb-2'>
                  <span className='text-13 leading-[1.23] tracking-[-0.52px] text-fontBlack'>
                    Профессионализм
                  </span>
                  <div className='flex items-start gap-x-[3px]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                    >
                      <path
                        d='M6 10.0138L3.01083 11.8998C2.89436 11.9747 2.77323 12.0076 2.64744 11.9985C2.52165 11.9894 2.41056 11.9474 2.31415 11.8725C2.21774 11.7975 2.14495 11.7017 2.09579 11.585C2.04662 11.4683 2.03672 11.3375 2.0661 11.1924L2.85659 7.63011L0.216367 5.22692C0.108005 5.1279 0.04124 5.01571 0.0160716 4.89035C-0.00909685 4.765 -0.00470457 4.64277 0.0292484 4.52366C0.0614401 4.40457 0.124998 4.3047 0.219923 4.22407C0.314847 4.14344 0.433472 4.0954 0.575798 4.07995L4.06345 3.76119L5.41468 0.397604C5.46888 0.263221 5.5513 0.163355 5.66195 0.0980061C5.77261 0.032669 5.88529 0 6 0C6.11471 0 6.22739 0.032669 6.33805 0.0980061C6.4487 0.163355 6.53112 0.263221 6.58532 0.397604L7.93655 3.76119L11.4269 4.07995C11.5674 4.0954 11.6852 4.14344 11.7801 4.22407C11.875 4.3047 11.9386 4.40457 11.9708 4.52366C12.0047 4.64277 12.0091 4.765 11.9839 4.89035C11.9588 5.01571 11.892 5.1279 11.7836 5.22692L9.14341 7.63011L9.9339 11.1924C9.96328 11.3375 9.95338 11.4683 9.90421 11.585C9.85505 11.7017 9.78226 11.7975 9.68585 11.8725C9.58944 11.9474 9.47834 11.9894 9.35256 11.9985C9.22677 12.0076 9.10564 11.9747 8.98917 11.8998L6 10.0138Z'
                        fill='#24A322'
                      />
                    </svg>
                    <span className='text-13 leading-[1.23] tracking-[-0.52px] text-fontBlack'>
                      5.0
                    </span>
                  </div>
                </div>
              </div>
              <div className='w-[39.8%]'>
                <div className='flex items-center justify-between [&:not(:last-child)]:mb-2'>
                  <span className='text-13 leading-[1.23] tracking-[-0.52px] text-fontBlack'>
                    Доступность
                  </span>
                  <div className='flex items-start gap-x-[3px]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                    >
                      <path
                        d='M6 10.0138L3.01083 11.8998C2.89436 11.9747 2.77323 12.0076 2.64744 11.9985C2.52165 11.9894 2.41056 11.9474 2.31415 11.8725C2.21774 11.7975 2.14495 11.7017 2.09579 11.585C2.04662 11.4683 2.03672 11.3375 2.0661 11.1924L2.85659 7.63011L0.216367 5.22692C0.108005 5.1279 0.04124 5.01571 0.0160716 4.89035C-0.00909685 4.765 -0.00470457 4.64277 0.0292484 4.52366C0.0614401 4.40457 0.124998 4.3047 0.219923 4.22407C0.314847 4.14344 0.433472 4.0954 0.575798 4.07995L4.06345 3.76119L5.41468 0.397604C5.46888 0.263221 5.5513 0.163355 5.66195 0.0980061C5.77261 0.032669 5.88529 0 6 0C6.11471 0 6.22739 0.032669 6.33805 0.0980061C6.4487 0.163355 6.53112 0.263221 6.58532 0.397604L7.93655 3.76119L11.4269 4.07995C11.5674 4.0954 11.6852 4.14344 11.7801 4.22407C11.875 4.3047 11.9386 4.40457 11.9708 4.52366C12.0047 4.64277 12.0091 4.765 11.9839 4.89035C11.9588 5.01571 11.892 5.1279 11.7836 5.22692L9.14341 7.63011L9.9339 11.1924C9.96328 11.3375 9.95338 11.4683 9.90421 11.585C9.85505 11.7017 9.78226 11.7975 9.68585 11.8725C9.58944 11.9474 9.47834 11.9894 9.35256 11.9985C9.22677 12.0076 9.10564 11.9747 8.98917 11.8998L6 10.0138Z'
                        fill='#24A322'
                      />
                    </svg>
                    <span className='text-13 leading-[1.23] tracking-[-0.52px] text-fontBlack'>
                      5.0
                    </span>
                  </div>
                </div>
                <div className='flex items-center justify-between [&:not(:last-child)]:mb-2'>
                  <span className='text-13 leading-[1.23] tracking-[-0.52px] text-fontBlack'>
                    Этичность
                  </span>
                  <div className='flex items-start gap-x-[3px]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                    >
                      <path
                        d='M6 10.0138L3.01083 11.8998C2.89436 11.9747 2.77323 12.0076 2.64744 11.9985C2.52165 11.9894 2.41056 11.9474 2.31415 11.8725C2.21774 11.7975 2.14495 11.7017 2.09579 11.585C2.04662 11.4683 2.03672 11.3375 2.0661 11.1924L2.85659 7.63011L0.216367 5.22692C0.108005 5.1279 0.04124 5.01571 0.0160716 4.89035C-0.00909685 4.765 -0.00470457 4.64277 0.0292484 4.52366C0.0614401 4.40457 0.124998 4.3047 0.219923 4.22407C0.314847 4.14344 0.433472 4.0954 0.575798 4.07995L4.06345 3.76119L5.41468 0.397604C5.46888 0.263221 5.5513 0.163355 5.66195 0.0980061C5.77261 0.032669 5.88529 0 6 0C6.11471 0 6.22739 0.032669 6.33805 0.0980061C6.4487 0.163355 6.53112 0.263221 6.58532 0.397604L7.93655 3.76119L11.4269 4.07995C11.5674 4.0954 11.6852 4.14344 11.7801 4.22407C11.875 4.3047 11.9386 4.40457 11.9708 4.52366C12.0047 4.64277 12.0091 4.765 11.9839 4.89035C11.9588 5.01571 11.892 5.1279 11.7836 5.22692L9.14341 7.63011L9.9339 11.1924C9.96328 11.3375 9.95338 11.4683 9.90421 11.585C9.85505 11.7017 9.78226 11.7975 9.68585 11.8725C9.58944 11.9474 9.47834 11.9894 9.35256 11.9985C9.22677 12.0076 9.10564 11.9747 8.98917 11.8998L6 10.0138Z'
                        fill='#24A322'
                      />
                    </svg>
                    <span className='text-13 leading-[1.23] tracking-[-0.52px] text-fontBlack'>
                      5.0
                    </span>
                  </div>
                </div>
                <div className='flex items-center justify-between [&:not(:last-child)]:mb-2'>
                  <span className='text-13 leading-[1.23] tracking-[-0.52px] text-fontBlack'>
                    Дружелюбность
                  </span>
                  <div className='flex items-start gap-x-[3px]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                    >
                      <path
                        d='M6 10.0138L3.01083 11.8998C2.89436 11.9747 2.77323 12.0076 2.64744 11.9985C2.52165 11.9894 2.41056 11.9474 2.31415 11.8725C2.21774 11.7975 2.14495 11.7017 2.09579 11.585C2.04662 11.4683 2.03672 11.3375 2.0661 11.1924L2.85659 7.63011L0.216367 5.22692C0.108005 5.1279 0.04124 5.01571 0.0160716 4.89035C-0.00909685 4.765 -0.00470457 4.64277 0.0292484 4.52366C0.0614401 4.40457 0.124998 4.3047 0.219923 4.22407C0.314847 4.14344 0.433472 4.0954 0.575798 4.07995L4.06345 3.76119L5.41468 0.397604C5.46888 0.263221 5.5513 0.163355 5.66195 0.0980061C5.77261 0.032669 5.88529 0 6 0C6.11471 0 6.22739 0.032669 6.33805 0.0980061C6.4487 0.163355 6.53112 0.263221 6.58532 0.397604L7.93655 3.76119L11.4269 4.07995C11.5674 4.0954 11.6852 4.14344 11.7801 4.22407C11.875 4.3047 11.9386 4.40457 11.9708 4.52366C12.0047 4.64277 12.0091 4.765 11.9839 4.89035C11.9588 5.01571 11.892 5.1279 11.7836 5.22692L9.14341 7.63011L9.9339 11.1924C9.96328 11.3375 9.95338 11.4683 9.90421 11.585C9.85505 11.7017 9.78226 11.7975 9.68585 11.8725C9.58944 11.9474 9.47834 11.9894 9.35256 11.9985C9.22677 12.0076 9.10564 11.9747 8.98917 11.8998L6 10.0138Z'
                        fill='#24A322'
                      />
                    </svg>
                    <span className='text-13 leading-[1.23] tracking-[-0.52px] text-fontBlack'>
                      5.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews
