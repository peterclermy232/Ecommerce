import React from 'react'
import { Products } from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0 ">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/86Jcdo1gMVe/4Ac0IrG/qD/UIoJLNooA7bV5qLWLx/na/V/IWr1tu3dVfLwbR8PZgbLPmg05cHr7p/NLglMjT4j86YS9ddjKjaquGNNVl1Z5ub/className="card-img" alt="Background " height="850px" />
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