import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CreatePage = () => {
  const[name, setName] = useState("")
  const[price, setPrice] = useState("")
  const[quantity, setQuantity] = useState("")
  const[image, setImage] = useState("");
  const[isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const saveProduct = async(e) => {
    e.preventDefault();
    // alert(name)

    if(name === "" || quantity === "" || price === "" || image === ""){
      toast.error("Please fill out all the input completely")
      //  alert("Please fill out all the input completely");
    } 
    try{
        setIsLoading(true);
      const response = await axios.post("http://localhost:3000/api/products", {name: name, quantity: quantity, price: price, image: image});
      // alert(`Save ${response.data.name} Successfully`);
      toast.success("New product have been added successfully");
      setIsLoading(false)
      navigate('/');
    }catch(err){
      toast.error(err.message)
      isLoading(false)
    }
  }
  return (
    <div className='max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6'>
        <h2 className='font-semibold text-2xl mb-4 block text-center'>
          Create a Product
        </h2>
        <form onSubmit={saveProduct}>
            <div className='space-y-2'>
                <div>
                   <label>Name</label>
                   <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder:gray-400' placeholder='Enter Product name' />
                </div>
                <div>
                   <label>Quantity</label>
                   <input type="number"  value={quantity} onChange={(e) => setQuantity(e.target.value)} className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder:gray-400' placeholder='Enter Quantity' />
                </div>
                <div>
                   <label>Price</label>
                   <input type="number"  value={price} onChange={(e) => setPrice(e.target.value)} className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder:gray-400' placeholder='Enter Price' />
                </div>
                <div>
                   <label>Image Url</label>
                   <input type="text"  value={image} onChange={(e) => setImage(e.target.value)} className='w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder:gray-400' placeholder='Enter Image Url' />
                </div>
                <div>
                    {!isLoading && (<button className='block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer'>Save</button>)}
                </div>
            </div>
        </form>
    </div>
  )
}

export default CreatePage