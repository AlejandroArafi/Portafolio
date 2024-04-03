import Link from "next/link";
import React from "react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./Icons";
import "./navbar.css";
import { AnimatedText } from "./AnimatedText";




export const NavBar = () => {
  return (
    <>
    <div className="contenedor-titulo">
      <div className="titulo">
        <h2 >
          ALEJANDRO FIGUEROA
         </h2>
         <AnimatedText className="desarrollador-web"  text={'DESARROLLADOR WEB/SOFTWARE'}/>
        
         {/* <h3>DESARROLLADOR WEB</h3>      */}
      </div>
      </div>

      <div className="navbar">
        <header className="contenedor-navbar">
          <Link href="/ " className="home-link">Home </Link>
          <Link href="/about " className="nav-link">About </Link>
          <Link href="/projects " className="nav-link">Projects</Link>
          
        </header>
      </div>
    </>
  );
};
