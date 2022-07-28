import React, {useState,useEffect} from 'react'
import Loading from './Loading';
import ShowProducts from './ShowProducts';

export const Products = () => {

    const [data, setData]= useState([]);
    const [filter, setFilter] = useState(data);
    const [loading,setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
      const getProducts = async () => {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if(componentMounted){
            setData(await response.clone().json());
            setFilter(await response.json());
            setLoading(false);
            console.log(filter)
        }

        return () =>{
            componentMounted = false;
        }
      }
        getProducts();
    }, []);

    const ShowProducts = () => {
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
                   <div className='card h-100 text-center p-4' key={product.id}>
                     <img src={product.image} className='card-img-top' alt='peter' />
                     <div className='card-body'>
                        <h5 className='card-title'>{product.title}</h5>
                        <p className='card-text'>${product.price}</p>
                        <a href="#" className='btn btn-primary'>go to cart</a>
                      </div>
                   </div>
                  </div>
                </>
            );
        })}
      );
    };
    
  return (
    <div>
       <div className='container my-5 py-5'>
           <div className='row'>
              <div className='col-12 mb-5'>
                   <h2 className='display-6 fw-border text-center'>Latest Products</h2>
                   <hr />
              </div>
           </div>
           <div className='row justify-content-center'>
             {loading ? <Loading /> : <ShowProducts  />}
           </div>
       </div>
    </div>
  )
}
