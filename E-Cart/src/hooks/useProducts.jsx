import React, { useEffect, useState } from 'react'

const useProducts = () => {

    const [products,setProducts] = useState([])

    const fetchData = async() => {
        let res = await fetch('https://fakestoreapi.com/products')
        let data = await res.json()
        setProducts(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    {
        products
    }
  )
}

export default useProducts
