import React, {useState,useEffect} from 'react'

export const Products = () => {

    const [data, setData]= useState([]);
    const [filter, setFilter] = useState(data);
    const [loading,setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
      const getProducts = async () => {
        setLoading()
      }
        getProducts();
    }, [])
  return (
    <div>

    </div>
  )
}
