import React from 'react'
import { Products } from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0 ">
                <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fdelivery-biker-arriving-at-destination-motogirl-picture-id1253501430%3Fk%3D20%26m%3D1253501430%26s%3D612x612%26w%3D0%26h%3DMo1N5Z7ASyuQwICZG0tH9UJHVoARmhCri3fuqMwqYrU%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fmotorcycle-delivery&tbnid=HQ0PH1pqOWxwFM&vet=12ahUKEwjY8dXq7p35AhVFyRoKHQ8GCOsQMygIegUIARCIAg..i&docid=8KGt9dnvIVGk6M&w=612&h=408&q=images%20of%20delivery%20bikes&ved=2ahUKEwjY8dXq7p35AhVFyRoKHQ8GCOsQMygIegUIARCIAg" className="card-img" alt="Background " height="850px" />
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