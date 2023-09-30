import React from "react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./Icons";
import './footer.css'



export const Footer = () => {
  return (
    <>
     <nav className='contenedor-icons' >
            <a href='http://x.com' target={'_blank'}><XIcon/></a>
            <a href='https://github.com/AlejandroArafi'><GitHubIcon/></a>
            <a className="linkedin-icon" href='https://linkedin.com/in/alejandroarafi'><LinkedInIcon/></a>
                      
        </nav>
    </>
  );
};