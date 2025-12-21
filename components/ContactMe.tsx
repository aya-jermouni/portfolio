"use client";
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/16/solid'
import { useForm, SubmitHandler } from "react-hook-form"
type Props = {}
type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}
export default function ContactMe({ }: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href='mailto:ayajermouni7@gmail.com?subject=${formData.subject}&body=Hey youve received a request from ${formData.name} saying: ${formData.message}  ${formData.email} )'
    }
    return (
        <div className='h-screen relative flex  flex-col text-center md:flex-row 
      ma-w-7xl px-10 justify-evenly mx-auto items-center z-0 '>
            <h3 className='absolute top-24 uppercase tracking-[20px] 
        text-[#ab768d] text-2xl '>
                contact me!
            </h3>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got what you need.{""}
                    <span className='decoration-[#9f496e]/50 underline '> Let's talk</span>
                </h4>
                <div className='space-y-10'>
                    <div className='flex items-center spacex-5 justify-center'>
                        <PhoneIcon className='text-[#123c69] h-7 w-7 animate-pulse' />
                        <p className='text-xl'>+212 667789728</p>
                    </div>
                </div>
                <div className='space-y-10'>
                    <div className='flex items-center spacex-5 justify-center'>
                        <MapPinIcon className='text-[#123c69] h-7 w-7 animate-pulse' />
                        <p className='text-xl'>Rabat</p>
                    </div>
                </div>
                <div className='space-y-10'>
                    <div className='flex items-center spacex-5 justify-center'>
                        <EnvelopeIcon className='text-[#123c69] h-7 w-7 animate-pulse' />
                        <p className='text-xl'>ayajermouni7@gmail.com</p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input  {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>
                <input   {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                <textarea  {...register('message')} placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-[#9f496e] py-5 px-10 rounded-md text-[#123c69] font-bold text-lg'>submit</button>
            </form>
        </div>
    )
}