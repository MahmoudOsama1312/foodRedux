import React from 'react'
import restaurant from '../../imgs/about/restaurant.jpg'
import './about.css'

export default function About() {
  return (
    <>
      <div className='container-fluid  py-5 '>
        <div className='container'>
          <div className='row py-5'>
            <div className='col-md-4'>
              <img src={restaurant} className='img-fluid rounded-2' alt='img' />
            </div>
            <div className="col-md-8 about">
              <h2 className="text-center py-3"> ABOUT US</h2>
              <h5 className=' w-75 m-auto '>Welcome to our food web application! We're passionate about providing you
                with the best food-related resources possible. Whether you're a foodie looking
                for new recipes or a health enthusiast seeking nutritious meal ideas,
                our platform has something for everyone. Our team of experts carefully curates and
                creates high-quality content, including recipes, cooking tips, nutrition advice,
                and more. We believe that food is not only fuel for the body, but it's also an essential
                part of our culture and brings people together.
                Join us on this journey to explore the wonderful world of food!</h5>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
