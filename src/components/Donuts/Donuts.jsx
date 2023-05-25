
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import do1 from '../../imgs/Donuts/do1.jpg';
import do2 from '../../imgs/Donuts/do2.jpg';
import do3 from '../../imgs/Donuts/do3.jpg';
import { fetchDonuts } from '../Redux/donutsSlice';


export default function Donuts() {
    const dispatch = useDispatch();
    const donuts = useSelector((state) => state.donuts.donuts);
    const loading = useSelector((state) => state.donuts.loading);
    const error = useSelector((state) => state.donuts.error);

    useEffect(() => {
        dispatch(fetchDonuts());
    }, [dispatch]);

    if (loading) {
        return <p className='d-flex justify-content-center'>Loading Donuts...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

  return (
      <>
          <div id="carouselExampleCaptions" className="carousel slide vh-100" data-bs-ride="carousel">
              <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner">
                  <div className="carousel-item active vh-100">
                      <img src={do1} className="d-block w-100 vh-100 animate__animated animate__pulse  " alt="do1" />
                      <div className="carousel-caption d-none d-md-block">
                          <h5>First slide label</h5>
                          <p>Some representative placeholder content for the first slide.</p>
                      </div>
                  </div>
                  <div className="carousel-item">
                      <img src={do2} className="d-block w-100 vh-100 animate__animated animate__pulse " alt="do2" />
                      <div className="carousel-caption d-none d-md-block">
                          <h5>Second slide label</h5>
                          <p>Some representative placeholder content for the second slide.</p>
                      </div>
                  </div>
                  <div className="carousel-item">
                      <img src={do3} className="d-block w-100 vh-100 animate__animated animate__pulse" alt="do3" />
                      <div className="carousel-caption d-none d-md-block">
                          <h5>Third slide label</h5>
                          <p>Some representative placeholder content for the third slide.</p>
                      </div>
                  </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
              </button>
          </div>
          {/* end Of Carousel */}
          <div className='container-fluid text-center bg bg-dark text-white pb-5 pt-3'>
              <h1 className='animate__animated animate__bounce p-2'>Donuts</h1>
              <div className='row'>
                  {donuts.map((item, index) =>
                      <div key={index} className=' parent col-lg-3 col-md-3 col-sm-6 col-xs-12 py-3 '>
                          <Link className="text-decoration-none text-white py-5" to={`/details/${item.recipe_id}`}>
                              <div className='img-container'>
                                  <img src={item.image_url} className='rounded' alt='img' />
                              </div>

                              <div className='items lead '>{item.title}</div>

                          </Link>
                      </div>
                  )}
              </div>
          </div>


      </>
  )
}
