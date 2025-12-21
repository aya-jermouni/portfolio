import React from 'react'
import  {motion} from "framer-motion"

type Props = {}

export default function Backgroundcircles({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,
    }}
    animate={{
        scale:[1,2,2,1],
        opacity:[0.1,0.2,0.2,0.1],
        borderRadius:["20%","20%","40%","50%"]
    }}
    transition={{
        duration:2.5,
    }}
    className='relative flex justify-center items-center' >
        <div className=' absolute border border-[#9f496e] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className=' absolute border border-[#9f496e] rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
        <div className=' absolute border border-[#9f496e] rounded-full h-[500px] w-[500px] mt-52 animate-ping'/>
        <div className=' absolute border border-[#9f496e] opacity-10 rounded-full h-[650px] w-[650px] mt-52 animate-pulse'/>
    </motion.div>
  )
}