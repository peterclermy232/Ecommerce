import React from 'react'

import { Products } from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0 ">
                <img src="data:image/jpeg;base64,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 " className="card-img" alt="Background " height="850px" />
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