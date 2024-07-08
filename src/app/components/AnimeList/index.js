import React from 'react'
import Image from 'next/image'

const index = ({title, images}) => {
  return (
    <div>
        <Image src={images} alt='...' width={600} height={400} />
        <h1>{title}</h1>
    </div>
  )
}

export default index