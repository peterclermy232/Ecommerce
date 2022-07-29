import React from 'react'
import { Products } from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0 ">
                <img src="data:image/jpeg;base64,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" className="card-img" alt="Background " height="850px" />
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