import React, { useContext } from 'react'
import { Switch } from "@material-tailwind/react";
import header1 from "../../assets/images/headerImage.png"
import { motion } from 'framer-motion';
import  { ThemeBgContext } from "../ContextWrapper/ThemeContext"

function Header() {

    const{theme,handleTheme}=useContext(ThemeBgContext)

    return (
        <div className='mx-auto pt-16'>
            <div className='grid grid-cols-2 justify-items-center items-center'>

                {/**left section */}

                <div className='w-4/5 pl-2'>
                    <Switch color="blue" onClick={handleTheme}
                     label={theme === "light" ? "Switch to Dark" : "Switch to Light"}
                     defaultChecked={theme === "dark" ? true : false}
                    />
                    <h1 className={
                        theme ==="light" ?
                        'text-4xl font-serif font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark':
                        'text-4xl font-serif font-medium no-underline align-middle tracking-wide normal-case leading-normal text-white'
                    }>
                    
                      Axel Brand new {" "}<span className={
                          theme==="light" ?
                        'text-dark text-5xl font-petitFormal font-bold' :
                        'text-white text-5xl font-petitFormal font-bold'
                        }
                      >Furniture</span>{" "}Mobile App
                    </h1>
                    <div className='mt-4'>
                    <p
              className={
                theme === "light"
                  ? "w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark text-2xl"
                  : "w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-white text-2xl"
              }
            >
              Giving your home a propper makeover never was this easy. Modern
              and stylish furniture for decent prices. Take a look what we offer
              with simple button click.
            </p>
                    </div>
                    <div className='pb-20'>
                        <button className='pushable mt-4'>
                            <span className='front'>start now</span>
                        </button>
                    </div>
                </div>

                {/**right section */}

                <div className='mt-4'>
                    <div>
                    <h2
              className={
                theme === "light"
                  ? " text-5xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
                  : "text-5xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-white"
              }
            >
              Modern Design
            </h2>
                    </div>
                    <motion.img
                        className='h-[665px] w-full bg-no-repeat bg-center relative z-10 rounded-xl'
                        src={header1}
                        alt='header-phone'
                        animate={{
                            y: [-20, 20, -20],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </div>

            </div>
        </div>
    )
}

export default Header