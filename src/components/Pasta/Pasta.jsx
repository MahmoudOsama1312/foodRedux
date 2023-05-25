import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import pasta1 from '../../imgs/Pasta/pasta1.jpg';
import pasta2 from '../../imgs/Pasta/pasta2.jpg';
import pasta3 from '../../imgs/Pasta/pasta3.jpg';
import { fetchPastas } from '../Redux/pastaSlice';

export default function Pasta() {
    const dispatch = useDispatch();
    const pastas = useSelector((state) => state.pasta.pastas);
    const loading = useSelector((state) => state.pasta.loading);
    const error = useSelector((state) => state.pasta.error);

    useEffect(() => {
        dispatch(fetchPastas());
    }, [dispatch]);

    if (loading) {
        return <p className='d-flex justify-content-center mt-5 '>Loading Pastas...</p>;
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
                        <img src={pasta1} className="d-block w-100 vh-100 animate__animated animate__pulse  " alt="pasta1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pasta2} className="d-block w-100 vh-100 animate__animated animate__pulse " alt="pasta2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pasta3} className="d-block w-100 vh-100 animate__animated animate__pulse" alt="pasta3" />
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
                <h1 className='animate__animated animate__bounce p-2'>Pasta</h1>
                <div className='row'>
                    {pastas.map((item, index) =>
                        <div key={index} className=' parent col-lg-3 col-md-3 col-sm-6 col-xs-12 py-3 '>
                            <Link className="text-decoration-none text-white py-5" to={`/details/${item.recipe_id}`}>
                                <div className='img-container'>
                                    <img src={item.image_url} className='rounded' alt='img'/>
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
