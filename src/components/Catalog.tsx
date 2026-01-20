import React, { useState } from 'react'
import ProductCard from './ProductCard'
import ProductForm from './ProductForm'
import type { IFormInput } from './data'


type Props = {
    products: IFormInput[]
}

const Catalog = (props: Props) => {
    const { products } = props

    const [showForm,setShowForm]= useState<Boolean>(false)

    const handleProductClick = (a) => {
        console.log(a)
        setShowForm(true)
        setSelectedData(a)
    }

    const [selectedData,setSelectedData] = useState<IFormInput>()

    return (
        <>
            <div className='flex p-4'>
                {/* products */}
                <div className='w-3/6 flex flex-wrap h-fit justify-center gap-2'>
                    {products.map((prod) => { return <ProductCard key={prod.id} updateForm={handleProductClick} productData={prod} /> })}
                </div>
                {/* form */}
                {showForm && (<div className='flex-1 border-l flex flex-col items-center ml-4 px-4'>
                    <div className='sticky top-14 w-full'>
                        <ProductForm selectedData={selectedData} />
                    </div>
                </div>)}
            </div>
        </>
    )
}

export default Catalog