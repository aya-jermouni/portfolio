"use client"; 
 
import React from 'react'
import {motion} from "framer-motion"
type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{
      x:-200,
      opacity:0,
    }}
    transition={{
      duration:1.2,
    }}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    className=' flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl
    px-10 justify-evenly mx-auto items-center
    '>
<h3 className='absolute top-24 uppercase tracking-[20px] 
        text-[#ab768d] text-2xl'>
  About me ! 
</h3>

<motion.img 
initial={{
  x:-200,
  opacity:0, 
}}
transition={{
  duration:1.2,
}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
 src='/images/me.jpg'
 className='-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover
 md:rounded-lg md:w-64 md:h-95 xl:w-[600px] xl:h-[600px]
 '
/>
<div className='space-y-10 px-0 md:px-10'>
  <h4 className='text-2xl font-semibold text-center'>Here's a {""} <span className='underline decoration-[#9f496e]'>little</span> {""} background about me</h4>
<p className='text-base -ml-50 -mr-50'> Heyy! I'm Aya, a computer science student with a passion for coding. 👩‍💻
  I've earned certificates in full-stack JavaScript and frontend development.
   As a freelancer for several months now, I've enjoyed crafting websites that are both stylish and user-friendly.
    I thrive on the challenge of translating ideas into functional code, whether it's perfecting website layouts or
   enhancing user experiences. 
  When I'm not coding, you'll find me exploring the latest tech innovations and enjoying a good cup of coffee!❤️</p>
</div>
<div className='w-full absolute top-[30%] bg-[#9f496e]/5 left-0 h-[300px] -skew-y--12 z-0' ></div>
    </motion.div>
  ) 
}
