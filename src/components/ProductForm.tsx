import React, { useEffect } from 'react'
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { Category, type IFormInput } from './data';

type Props = {
    selectedData: IFormInput
}

const ProductForm = (props: Props) => {
    const { selectedData } = props
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm<IFormInput>({
        mode: "onBlur",
        defaultValues: selectedData
    });


    const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
        console.log("data submit", data)
    }

    useEffect(()=>{
        reset({...selectedData})
    },[selectedData])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='border p-4 w-full'>
            <div className='text-xl font-bold pb-4 border-b'>
                Product Details Form
            </div>
            <div className='py-4 flex flex-col gap-4'>
                <div className='flex flex-col items-start gap-1 '>
                    <label>Product Name:</label>
                    <input className='border border-gray-400 w-full p-1' {...register('prodName')} placeholder="Name" />
                </div>
                <div className='flex flex-col items-start gap-1 '>
                    <label>Product Category:</label>
                    {/* <input className='border border-gray-400 w-full p-1' {...register('prodCategory')} placeholder="Product Category" /> */}
                    <select {...register('prodCategory')} className='border border-gray-400 w-full p-1'>
                        <option value="Electronics">Electronics</option>
                        <option value="Appliances">Appliances</option>
                        <option value="KitchenWare">KitchenWare</option>
                    </select>
                </div>
                <div className='flex flex-col items-start gap-1 '>
                    <label>Product Description:</label>
                    <textarea className='border border-gray-400 w-full p-1' {...register('prodDescription')} placeholder="Product Description" />
                </div>
                <div className='flex flex-col items-start gap-1 '>
                    <label>Price:</label>
                    <input className='border border-gray-400 w-full p-1' {...register('price', { valueAsNumber: true })} type='number' placeholder="Price" />
                </div>
                <div className='flex flex-col items-start gap-1 '>
                    <label>Buy Price:</label>
                    <input className='border border-gray-400 w-full p-1' {...register('buyPrice', { valueAsNumber: true })} type='number' placeholder="Buy Price" />
                </div>
                <div className='flex flex-col items-start gap-1 '>
                    <label>Stock:</label>
                    <input className='border border-gray-400 w-full p-1' {...register('stock', { valueAsNumber: true })} type='number' placeholder="Stock" />
                </div>
                <input className='bg-black text-white p-2' type="submit" value="Add" />
            </div>
        </form>
    )
}

export default ProductForm