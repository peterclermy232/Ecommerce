import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';
import Loading from './Loading';
import ShowProducts from './ShowProducts';

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
    },[input])

    const Loading = () => {
        return(await)
    }
  return (
    <div>
       <div className='row'>
          {loading ? <Loading /> : <ShowProducts />}
       </div>
    </div>
  )
}

export default Goods