import React from 'react'

const ShowProducts = ({filter, filterProductFilter,data}) => {
  return (
      <>
    <div className='buttons d-flex justify-content-center mb-5 pb-5'>
        <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
        <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct(data)}>Men's clothing</button>
        <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct(data)}>Women's clothing</button>
        <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct(data)}>Jewelry's clothing</button>
        <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct(data)}>Electronics</button>
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
                    <button  className='btn btn-outline-dark'>Buy Now</button>
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