import React from 'react'
import {motion} from "framer-motion"
type Props = {
    directionLeft?:boolean;
    src: string;
    percentage: string;
}

export default function Skill({directionLeft, src, percentage }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial ={{
        x:directionLeft?-200:200,
        opacity:0,
    }}
    transition={{ duration:1}}
    whileInView={{opacity:1,x:0}}
    src={src}
    className='rounded-full border border-[#f4eee9] object-cover w-24 h-24 md:w-28 md:h-28
        xl:w-32 xl:h-32 filter group-hover:[#f4eee9] transition duration-300 ease-in-out
    '
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-white w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
           <div className='flex items-center justify-center h-full'>
             <p className='text-3xl font.bold text-[#123c69] opacity-100'>{percentage}</p></div>
        </div>
    </div>
  )
}