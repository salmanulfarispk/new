"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const NavbarSec = () => {

 const[isScrolled,setScrolled]=useState(false)

    const imageSources = [
        "/m1.svg",
        "/m2.svg",
        "/m3.svg",
        "/m4.svg",
        "/m5.svg",
        "/m6.svg"
    ];


     const handleScroll=()=>{
        if(window.scrollY > 50){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
     };

       useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
        return()=>{
            window.removeEventListener("scroll",handleScroll)
        };
       },[])


    return (
        <motion.div className={`flex items-center text-white justify-between p-1 md:p-3 ${isScrolled ? 'bg-slate-100 shadow-sm' : 'bg-transparent'}`}
           transition={{duration: 0.3 }}
        >
            <div className="flex space-x-7">
                {imageSources.map((src, index) => (
                    <img key={index} src={src} className="w-3 h-3 md:w-5 md:h-5" alt={`Image ${index + 1}`}/>
                ))}

            </div>
            <div className="flex space-x-7 text-sm font-bold">
                <Link href="/about" className="hidden md:block">
                  <h2 className={`hover:underline ${isScrolled ? 'text-black' : 'text-white'}`}>About</h2>
                </Link>
                <Link href="/policies" className="hidden md:block">
                  <h2 className={`hover:underline ${isScrolled ? 'text-black' : 'text-white'}`}>Policies</h2>
                </Link>

                <Link href="/booknow">
                  <motion.button className="bg-graybg rounded-2xl px-2 md:px-4 text-white"
                    initial={{scale:0}}
                    whileInView={{scale:1}}
                  >Book Now</motion.button>
                </Link>

            </div>
        </motion.div>
    )
}

export default NavbarSec