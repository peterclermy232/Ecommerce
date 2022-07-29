import React from 'react'
import { Products } from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0 ">
                <img src="https://media.gettyimages.com/photos/biker-in-motion-motogirl-motoboy-picture-id1255470283?k=20&m=1255470283&s=612x612&w=0&h=cW-nJfMN8tufBXS3TX_eZM4OE0swsZ8A1fEJCw_lVLo=" className="card-img" alt="Background " height="850px" />
                <div className="card-img-overlay d-flex flex-column
                justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">It is Peter's Time</h5>
                   <p className="card-text lead fs-2">
                    Welcome Customer from here you will what you like.
                   </p>
                    </div>
                   
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home