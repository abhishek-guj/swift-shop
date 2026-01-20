import React from 'react'

type Props = {
    productData: any
}

const ProductCard = ({ productData }: Props) => {
    return (
        <div className='rounded-md border p-4 w-48 text-sm justify-start'>
            <div className='rounded-sm bg-red-200 w-40 h-30'>
                <img src="" alt="image" />
            </div>
            <div className='truncate'>
                {productData.title}
            </div>
            <div className='flex justify-between items-center'>
                <div>{productData.category}</div>
                <div className='text-xs items-center'>Rs. {productData.price}</div>
            </div>
            <div className='h-10 truncate'>{productData.description}</div>
        </div>
    )
}

export default ProductCard