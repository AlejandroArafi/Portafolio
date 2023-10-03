import React from 'react'
import './about.css'
import Link from 'next/link'
import CvDownload from './components/CvDownload'
import { Skills } from './components/Skills'

export const metadata = {
    title: 'proyectos de alejandro',
    description:'React, NextJS, '
}

const page = () => {
  return (
    <>
    <div className='contenedor-about'>
    <h1>ACERCA DE MI</h1>
    <p>
    Como desarrollador full-stack (MERN) con un enfoque destacado en el frontend, mi pasión y experiencia se concentran en la creación de interfaces de usuario responsivas y en la construcción de experiencias web excepcionales. Echa un vistazo a mis proyectos, donde podrás apreciar mi trabajo tanto en el frontend, con tecnologías como Javascript y React.js, como en el desarrollo integral de aplicaciones web.
    </p>

    <Skills/>

  

    </div>
    {/* <div className='flex items-center justify-center bg-gradient-to-r from-cyan-400 to-cyan-600 text-slate-100 p-2 rounded-lg w-32' ><CvDownload/></div>
     */}
     <div className='flex justify-center'>
  <div className='flex items-center justify-center bg-slate-950 text-slate-100  p-2 rounded-lg w-32 mt-10'>


    <CvDownload />
  </div>
</div>


    
 
   

    </>
  )
}

export default page