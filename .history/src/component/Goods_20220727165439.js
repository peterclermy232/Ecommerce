import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';


const Goods = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products/{id}')
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[])

    const Loading = () => {
        return(
            <> 
               loading ....
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
              <div className="col-md-6">
                 <img src={product.image} alt={product.title} height="400px" width="400px" />
              </div>
              <div className="col-md-6">
                <h4 className="text-uppercase">
                    {product.category}
                </h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder '>
                    Rating {product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                </p>
                <h3 className='display-6 fw-bold'
              </div>
            </>
        )
    }
  return (
    <div>
       <div className='row'>
          {loading ? <Loading /> : <ShowProduct />}
       </div>
    </div>
  )
}

export default Goods