import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';

const Goods = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () =>
    })
  return (
    <div>

    </div>
  )
}

export default Goods