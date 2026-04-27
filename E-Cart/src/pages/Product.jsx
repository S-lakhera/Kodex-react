import { CardImage } from '@/components/local/cardImage'
import useProducts from '@/hooks/useProducts'
import React from 'react'

const Product = () => {
    const { products } = useProducts()

    return (
        <div className='grid grid-cols-4 gap-10'>
            {
                products?.map((p) => <CardImage product={p} key={p.id} />)
            }
        </div>
    )
}

export default Product
