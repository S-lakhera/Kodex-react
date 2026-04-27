import { ProductCard } from '@/components/local/ProductCard'
import useProducts from '@/hooks/useProducts'
import React from 'react'

const Product = () => {
    const { products } = useProducts()

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
            {
                products?.map((p) => <ProductCard product={p} key={p.id} />)
            }
        </div>
    )
}

export default Product
