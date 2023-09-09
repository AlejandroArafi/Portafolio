import Link from 'next/link'
import React from 'react'
import { DribbbleIcon, GitHubIcon, LinkedInIcon, PinterestIcon, XIcon } from './icons'


export const NavBar = () => {
  return (
    <>
    <header className='w-full px-32 py-8 font-medium flex item-center justify-between' >
        <nav>
            <Link href="/ ">Home</Link>
            <Link href="/about ">About</Link>
            <Link href="/projects ">Projects</Link>
        </nav>

        <div className='w-16 h-16 bg-black text-white flex items-center justify-center font-bold text-2xl rounded-full'>
            AF
        </div>

        <nav className='flex item-center justify-center flex-wrap gap-2' >
            <a href='http://x.com' target={'_blank'}><XIcon/></a>
            <a href='http://github.com'><GitHubIcon/></a>
            <a href='http://linkedin.com'><LinkedInIcon/></a>
            <a href='http://pinterest.com'><PinterestIcon/></a>
            <a href='http://dribbble.com'><DribbbleIcon/></a>
        </nav>
        
       
    </header>


    </>
  )
}
