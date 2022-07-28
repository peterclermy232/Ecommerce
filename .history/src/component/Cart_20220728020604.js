import React from 'react'
//import { useSelector } from 'react-redux';
const Cart = () => {
  return (
    <div className='row'>
        <div className='col-md-4'>
            <img src={product.image} alt={product.title} height="200px" width="180px" />
        </div>
          <div className='col-md-4'>
            <h3>{product.title}</h3>
            <p className='lead fw-bold'>
                {product.quantity} x &{product.price} = $ {product.quantity * product.price}
            </p>
            <button className='btn btn-o'
          </div>
    </div>
  )
}

export default Cart