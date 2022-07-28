import React from 'react'

const ShowProducts = ({filter}) => {
  return (
    <div className='buttons d-flex justify-content-center mb-5 pb-5'>
        <button className='btn btn-outline-dark me-2'>All</button>
        <button className='btn btn-outline-dark me-2'>Men's clothing</button>
        <button className='btn btn-outline-dark me-2'>Women's clothing</button>
        <button className='btn btn-outline-dark me-2'>Jewelry's clothing</button>
        <button className='btn btn-outline-dark me-2'>Electronics</button>
    </div>
    {filter.map((product)=>{
        return(
            <>
              <div className='col-md-3'>
               <div className='card' style="width: 18rems">
                 <img src="images" className='card-img-top' alt='peter' />
                 <div className='card-body'>
                    <h5 className='card-title'> Card title</h5>
                    <p className='card-text'>Hello</p>
                    <a href=""
                  </div>
               </div>
              </div>
            </>
        )
    })}
  );
};

export default ShowProducts