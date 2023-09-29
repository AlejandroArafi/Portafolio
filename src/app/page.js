'use client'
// import Image from 'next/image'
import Link from 'next/link'
// import { motion } from 'framer-motion'
import { AnimatedText } from './about/components/AnimatedText'
import { AnimatedImage } from './about/components/AnimatedImage'


export default function Home() {
  return (
   <>
   <div className='w-full h-full p-32 bg-red'>
    <main className='flex items-center justify-between w-full'>
      <AnimatedImage src='https://portfolio-demo-g1q6mr7h6-jonadrar.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-1.d43c09fa.png&w=3840&q=75'/>
      
      <div className='w-1/2'>
        <AnimatedText   text={'web developer'}/>
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
