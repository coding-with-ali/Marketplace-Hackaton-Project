import React from 'react'
import Image from 'next/image'

export default function Brand() {
  return (
      <div className=''>
      <Image
        src="/banner3.png"
        alt="footer"
        width="990"
        height="990"
        className='w-[800px] h-[90px] object-fit m-auto'
        />
    </div>
  )
}
