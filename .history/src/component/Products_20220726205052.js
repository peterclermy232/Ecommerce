import React, {useState,useEffect} from 'react'

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
        }

        return () =>{
            componentMounted = false
        }
      }
        getProducts();
    }, [])
  return (
    <div>

    </div>
  )
}
