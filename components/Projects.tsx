"use client";
import React from 'react'
import { motion } from "framer-motion"
type Props = {}

export default function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            transition={{
                duration: 1.5,
            }}
            whileInView={{ opacity: 1 }}
            className='h-screen relative flex overflow_hidden flex-col text-left md:flex-row 
      ma-w-full justify-evenly mx-auto items-center z-0 '>
            <h3 className='absolute top-24 uppercase tracking-[20px] 
        text-[#ab768d] text-2xl '>
                Projects
            </h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-[#f6f4f4] scrollbar-thin scrollbar-thumb-[#123c69]'>
                {projects.map((project, i) => (
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                  <motion.img 
                  initial={{
                    y:.33,
                    opacity:0
                  }}
                  transition={{
                    duration:1.2
                  }}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                  src="" alt="" />
                
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h4 className='text-4xl font-semibold text-center'>
                                    <span className='underline decoration-[#9f496e]/50'>
                                        case study {i + 1} of {projects.length}
                                    </span>{" "}
                                    UPS clone 
                                </h4>
                                <p className='text-lg text-center md:text-left'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ea voluptate rerum nemo dolor voluptatem quam quas necessitatibus ratione ex cupiditate, vel numquam suscipit, culpa minus alias commodi quo! Harum.
                                </p>
                            </div>
                                 </div>
        
  
                ))}
          </div>
                <div className='w-full absolute top-[30%] bg-[#9f496e]/5 left-0 h-[300px] -skew-y-12 ' ></div>
        </motion.div>
    )
}