import React from 'react'
//import { useSelector } from 'react-redux';
const Cart = () => {
  return (
    <div className='row'>
        <div className='col-md-4'>
            <img src={product.image} alt={product.title} height="200px" width="180px" />
        </div>
          <div className='col-md-4'>
            <h3>{product.tit}</h3>
          </div>
    </div>
  )
}

export default Cart