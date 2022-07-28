import React from 'react'
import { NavLink } from 'react-router-dom';



const ShowProducts = ({filter, filterProduct,data , setFilter}) => {


  return (
      <>
    <div className='buttons d-flex justify-content-center mb-5 pb-5'>
        <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
        <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}>Men's clothing</button>
        <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>Women's clothing</button>
        <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("jewelery")}>Jewelry's clothing</button>
        <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("electronics")}>Electronics</button>
    </div>
    {filter.map((product)=>{
        return(
            <>
              <div className='col-md-3 mb-4'>
               <div className='card h-100 text-center p-4' key={product.id}>
                 <img src={product.image} className='card-img-top' alt='peter' height='250px' />
                 <div className='card-body'>
                    <h5 className='card-title'>{product.title.substring(0,12)}</h5>
                    <p className='card-text lead fw-bold'>${product.price}</p>
                    <NavLink to={`/products/${product.id}`} className='btn btn-outline-dark'>Buy Now</NavLink>
                  </div>
               </div>
              </div>
            </>

        )
    })}
    </>
  );
};

export default ShowProducts