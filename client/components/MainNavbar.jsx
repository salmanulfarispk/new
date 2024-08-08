"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import NavbarSec from "./NavbarSec";


const MainNavbar = () => {

    const navItems=[
        
            { 
              name: "Offers", 
              href: "/offers" }
            ,
            { name: "Favourites", href: "/favourites" },
            { name: "Customer Service", href: "#" },
    ]
    
    const router=useRouter()

  return (
    <>
    <div className="hidden md:flex min-w-full h-[35px] bg-graybg  items-center justify-between fixed z-50">
        <div className="ms-10">
            <Link href='/'>
              <h1 className="font-bold xl:text-md text-white uppercase">IRC'S LuxeLodgings</h1>
            </Link>
        </div>

        <div className="flex">
            <ul className="flex items-center justify-center me-10 space-x-10">
                {navItems.map((item)=>(
                    <li key={item.name}>
                        <Link href={item.href} className="text-white xl:text-md font-sans  hover:underline">
                        {item.name === "Customer Service" ? (
                            <>
                                Customer&nbsp;Service
                            </>
                        ) : (
                            item.name
                        )}
                        </Link>
                    </li>
                ))}
            </ul>

                 <div className="w-full h-[35px] xl:text-md text-white cursor-pointer px-3 font-medium 
                  bg-gray-600 flex items-center justify-center hover:bg-black/80" onClick={()=> router.push("/login")}>
                    <span className="text-center text-white me-2"><FaRegUser/></span>
                     Login
                 </div>
        </div>          
    </div>
          
          <div className="fixed top-[35px] z-40  w-full h-[45px]  ">
           <NavbarSec/>
         </div>

    </>
  )
}

export default MainNavbar