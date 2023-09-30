import React from 'react'
import { AnimatedImage } from '../about/components/AnimatedImage'
import { AnimatedText } from '../about/components/AnimatedText'
import Link from 'next/link'
import '../projects/projects.css'
import Card from '../about/components/Card'
import Card2 from '../about/components/Card2'
import Card3 from '../about/components/Card3'
import Card4 from '../about/components/Card4'
import Card5 from '../about/components/Card5'



export const metadata = {
    title: 'proyectos de alejandro',
    description:'React, NextJS, '
}

const page = () => {
  return (
    <>
    {/* proyecto 1 */}
    <div className='title-container'>
    <h1>Proyectos</h1>
    <h2>Pasteleria (Landing)</h2>
     </div>
    
    <div className='cards-container'>
      <div className='screen-1'><Card/>
      </div>
    </div>

    {/* proyecto 2 */}
    
    <div className='title-container2'>
        <h2>Lista de compras (CRUD)</h2>
     </div>
    
    <div className='cards-container'>
      <div className='screen-2'><Card2/>
      </div>
    </div>

    {/* proyecto 3 */}

    <div className='title-container3'>
        <h2>Tablero de datos (api)</h2>
     </div>
    
    <div className='cards-container'>
      <div className='screen-3'><Card3/>
      </div>
    </div>

    {/* proyecto 4 */}

    <div className='title-container4'>
        <h2>Restaurant App</h2>
     </div>
    
    <div className='cards-container'>
      <div className='screen-4'><Card4/>
      </div>
    </div>

    {/* proyecto 5 */}

    <div className='title-container5'>
        <h2>Restaurant App</h2>
     </div>
    
    <div className='cards-container'>
      <div className='screen-5'><Card5/>
      </div>
    </div>
    
    
 
   {/* <div className='w-full h-full p-32 bg-red'>
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
   */}

   </>
  )
}

export default page