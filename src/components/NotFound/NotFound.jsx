import React from 'react'
import notFound from '../../imgs/notFound.jpg'
export default function NotFound() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <img src={notFound} alt='img' />
    </div>
  )
}
