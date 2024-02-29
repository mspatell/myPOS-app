import React, { useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import axios from "axios"

export default function POS() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async() => {
    const result = await axios.get('products');
    setProducts(await result.data);
  }

  useEffect(() => {fetchProducts()}, []);
    

  return (
    <MainLayout>
        POS content
    </MainLayout>
  )
}


