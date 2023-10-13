"use client";
// import Image from 'next/image'
import Link from "next/link";
// import { motion } from 'framer-motion'
import { AnimatedText } from "./about/components/AnimatedText";
import { AnimatedImage } from "./about/components/AnimatedImage";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="background-image">
        <AnimatedImage src="https://portfolio-demo-g1q6mr7h6-jonadrar.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-1.d43c09fa.png&w=3840&q=75" />
      </div>
    </>
  );
}
