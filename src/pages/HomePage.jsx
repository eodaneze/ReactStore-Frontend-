import axios from 'axios';
import React, { useEffect, useState } from 'react'

const HomePage = () => {
    const[products, setProducts] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
const getProducts = async() => {
    try{
     setIsLoading(true);
     const response = await axios.get("http://localhost:3000/api");
     console.log(response.data);
     setProducts(response.data);
    }catch(err){
       console.log(err);
    }
}
    useEffect(() => {
        
        getProducts()
    }, [])
  return (
    <div>This is the homepage of the application</div>
  )
}

export default HomePage