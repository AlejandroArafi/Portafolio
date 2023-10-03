import React from "react";
import { GitHubIcon, Gith, Linke, LinkedInIcon, XIcon } from "./Icons";
import './footer.css'




export const Footer = () => {
  return (
    <>
     <div className='contenedor-icons' >
            
            <a href='https://github.com/AlejandroArafi'><Gith/></a>
            <a className="linkedin-icon" href='https://linkedin.com/in/alejandroarafi'><Linke/></a>
                      
        </div>

    </>
  );
};