import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../imgs/logo.png'
import './navbar.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-dark bg-gradient bg-opacity-25 navbar-dark fw-medium text-uppercase">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/">
            <img src={logo} alt=" logo"  className='rounded-3'/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link px-3" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle px-3" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Food
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="pizza">Pizza</Link></li>
                  <li><Link className="dropdown-item" to="chicken">Chicken</Link></li>
                  <li><Link className="dropdown-item" to="pasta">Pasta</Link></li>
                  <li><Link className="dropdown-item" to="seafood">SeaFood</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle px-3" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dessert
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="cinnabon">Cinnabon</Link></li>
                  <li><Link className="dropdown-item" to="donuts">Donuts</Link></li>
                  <li><Link className="dropdown-item" to="cake">Cake</Link></li>
                  <li><Link className="dropdown-item" to="icecream">Ice Cream</Link></li>
                </ul>

              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}
