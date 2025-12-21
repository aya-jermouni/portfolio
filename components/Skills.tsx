"use client"; 

import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { skills } from './data';

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, x: 0 }}
      className='flex flex-col relative h-screen max-w-7xl px-10 justify-center mx-auto items-center'
    >
      <div className='absolute top-24 w-full flex flex-col items-center'>
        <h3 className='uppercase tracking-[20px] text-[#ab768d] text-2xl'>
          Skills
        </h3>
        <h3 className='mt-4 uppercase tracking-[2px] text-[#ab768d] text-sm'>
          Hover over a skill for current proficiency
        </h3>
      </div>
      <div className='mt-32 w-full flex justify-center'>
        <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4'>
          {skills.map(skill => (
            <Skill key={skill.id} src={skill.src} percentage={skill.percentage} directionLeft={skill.id % 2 === 0} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
