"use client"
import { useState } from "react";
import { FaInfo } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const Info = () => {

    const [open,setOpen]=useState(false)
    const itemVariants = {
        open: {
          opacity: 1,
          x: 0,
        },
        closed: {
          opacity: 0,
          x: 50,
        },
      };

  return (
    <div className="fixed z-30">
    <motion.div className="w-12 h-9 p-2 border border-slate-600 rounded-md bg-black/80 fixed top-[140px] md:top-[150px] -right-3 "
       onClick={()=> setOpen(true)}
        variants={itemVariants}
        animate={open ? "closed" : "open"}
       >
       <span className="text-white cursor-pointer">
        <FaInfo />
       </span>

    </motion.div>
          {open && (
         <div className="w-[300px] md:w-[350px] min-h-[200px] bg-white rounded-md fixed top-[200px] right-12 border border-red-950 backdrop-filter backdrop-blur-sm bg-opacity-95">
             <div className="flex justify-end">
            <span className="cursor-pointer" onClick={() => setOpen(false)}>
              <IoIosClose size={28} />
            </span>
            </div>
           <div className="px-4 py-2 overflow-y-auto">
             <h1 className="text-black font-bold">Notice :</h1>
             <p className="text-sm font-light">Welcome to your dream stay! Discover our stylish rooms, serene reading nooks, and elegant dining areas designed for your comfort. Whether you're planning a romantic getaway, a family vacation, or a business trip, our luxurious and ensure an unforgettable experience. Book now and indulge in modern luxury</p>
         </div>
    </div>
)}
    </div>
  )
}

export default Info