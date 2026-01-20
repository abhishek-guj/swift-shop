import React from 'react'
import { useForm, Controller, type SubmitHandler } from "react-hook-form";


interface IFormInput {
    prodName: string;
    prodCategory: string;
    prodDescription: string;
    price: number;
    buyPrice: number;
    stock: number;
}

const ProductForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
        console.log("data submit", data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='border p-4 w-full'>
            <div className='text-xl font-bold pb-4 border-b'>
                Product Details Form
            </div>
            <div className='py-4'>
                <div className='flex justify-start gap-2 '>
                    <label>Product Name:</label>
                    <input {...register('prodName')} placeholder="Name" />
                </div>
                <div className='flex justify-start gap-2 '>
                    <label>Product Category:</label>
                    <input {...register('prodCategory')} placeholder="Product Category" />
                </div>
                <div className='flex justify-start gap-2 '>
                    <label>Product Description:</label>
                    <input {...register('prodDescription')} placeholder="Product Description" />
                </div>
                <div className='flex justify-start gap-2 '>
                    <label>Price:</label>
                    <input {...register('price', {valueAsNumber:true})} type='number' placeholder="Price" />
                </div>
                <div className='flex justify-start gap-2 '>
                    <label>Buy Price:</label>
                    <input {...register('buyPrice', {valueAsNumber:true})} type='number' placeholder="Buy Price" />
                </div>
                <div className='flex justify-start gap-2 '>
                    <label>Stock:</label>
                    <input {...register('stock', {valueAsNumber:true})} type='number' placeholder="Stock" />
                </div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    )
}

export default ProductForm