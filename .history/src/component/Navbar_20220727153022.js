import React from 'react'
import {NavLink } ''


export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white py-3
              shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" href="#">Peter's Boutique</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" href="#">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="#">Products</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" href="#">About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" href="#">Contact</NavLink>
                            </li>

                        </ul>

                        <div className="buttons">
                            <NavLink href="" className='btn btn-outline-dark '>
                                <i className='fa fa-sign-in me-1 ms-2'></i>Login</NavLink>

                            <NavLink href="" className='btn btn-outline-dark ms-2'>
                                <i className='fa fa-user-plus me-1'></i>Register</NavLink>

                            <NavLink href="" className='btn btn-outline-dark ms-2'>
                                <i className='fa fa-shopping-cart me-1'></i>Cart(0)</NavLink>

                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}
