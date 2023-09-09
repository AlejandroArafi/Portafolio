'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedText } from './about/components/AnimatedText'
import { AnimatedImage } from './about/components/AnimatedImage'
const desdeIzquierda = {
  initial:{
    opacity:0,
    x: -50
  },
  animate:{
    opacity:1,
    x: 0,
    transition: {
      duration: 3
    }
  }
}

export default function Home() {
  return (
   <>
   <div className='w-full h-full p-32 bg-red'>
    <main className='flex items-center justify-between w-full'>
      <AnimatedImage src='https://portfolio-demo-g1q6mr7h6-jonadrar.vercel.app/'/>
      
      <div className='w-1/2'>
        <AnimatedText   text={'Turning Vision Into Reality With Code And Design'}/>
        <h1 className='text-6xl font-bold'>

          </h1>
          <p className='my-4 font-medium text-base'>
          As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
          </p>

          <Link href='' className='flex items-center justify-center bg-slate-950 text-slate-100 p-2 rounded-lg'>Curriculum</Link>
          
          
      </div>
    </main>

   </div>
  

   </>
  )
}
