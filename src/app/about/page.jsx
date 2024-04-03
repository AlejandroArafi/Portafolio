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
    <h1 className='about-me'>ACERCA DE MI</h1>
    <p>
    Soy un apasionado desarrollador Front-End con un enfoque en la creación de soluciones web responsivas y atractivas. Comprometido con la excelencia en cada proyecto, mi objetivo es fusionar habilidades técnicas con creatividad para ofrecer una gran experiencia al usuario Con experiencia tanto en el desarrollo web como en el diseño de aplicaciones móviles, busco constantemente desafíos que me permitan expandir mis conocimientos y superar expectativas.
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