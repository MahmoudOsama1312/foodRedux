import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cake1 from '../../imgs/Cake/cake1.jpg';
import cake2 from '../../imgs/Cake/cake2.jpg';
import cake3 from '../../imgs/Cake/cake3.jpg';
import { fetchCake } from '../Redux/cakeSlice';

export default function Cake() {
    const dispatch = useDispatch();
    const cake = useSelector((state) => state.cake.cake);
    const loading = useSelector((state) => state.cake.loading);
    const error = useSelector((state) => state.cake.error);

    useEffect(() => {
        dispatch(fetchCake());
    }, [dispatch]);

    if (loading) {
        return <p className='d-flex justify-content-center mt-5 '>Loading Cake...</p>;
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
                      <img src={cake1} className="d-block w-100 vh-100 animate__animated animate__pulse  " alt="cake1" />
                      <div className="carousel-caption d-none d-md-block">
                          <h5>First slide label</h5>
                          <p>Some representative placeholder content for the first slide.</p>
                      </div>
                  </div>
                  <div className="carousel-item">
                      <img src={cake2} className="d-block w-100 vh-100 animate__animated animate__pulse " alt="cake2" />
                      <div className="carousel-caption d-none d-md-block">
                          <h5>Second slide label</h5>
                          <p>Some representative placeholder content for the second slide.</p>
                      </div>
                  </div>
                  <div className="carousel-item">
                      <img src={cake3} className="d-block w-100 vh-100 animate__animated animate__pulse" alt="cake3" />
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
              <h1 className='animate__animated animate__bounce p-2'>Cake</h1>
              <div className='row'>
                  {cake.map((item, index) =>
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
