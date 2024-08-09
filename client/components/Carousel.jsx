"use client"
import { Carousel } from "flowbite-react"
import Image from "next/image";
import Info from "./Info";
import ContentSlide from "./ContentSlide";
import { IoIosSearch } from "react-icons/io";
import { motion } from "framer-motion";
import moment from "moment"
import { MdDateRange } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { FaPersonHalfDress } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";


const carousel = () => {

    const CarouselImages = [
        { id: 1, src: "/r1.jpg", alt: "Image 1", heading: "Stylish Couple’s Workspace", para: "A stylish workspace for couples to collaborate on professional projects." },
        { id: 2, src: "/r7.jpg", alt: "Image 2", heading: "Serene Reading Nook", para: "Find peace in our serene reading nooks, perfect for a good book and a cup of tea." },
        { id: 3, src: "/r8.jpg", alt: "Image 3", heading: "Elegant Dining Room", para: "Elegant dining rooms perfect for dinner parties and intimate meals." },
        { id: 4, src: "/r6.jpg", alt: "Image 4", heading: "Cozy Bedroom Retreat", para: "Relax in our cozy bedrooms, crafted for restful nights and serene mornings." },
        { id: 5, src: "/r2.jpg", alt: "Image 5", heading: "Modern Pool Area", para: "Enjoy modern luxury with sleek pool designs and chic furnishings for stylish events." },
        { id: 6, src: "/r5.png", alt: "Image 6", heading: "Luxurious Living Room", para: "Luxurious living rooms for ultimate comfort and stylish entertaining." },
    ];


    const startDate = moment();
    const endDate = moment().add(1, 'day');

    const router=useRouter()

    return (
        <>
            <div className="w-full h-[450px] sm:h-[500px] md:h-[550px]">
                <Carousel slideInterval={5000}>
                    {CarouselImages.map((image) => (
                        <div key={image.id} className="relative w-full h-full">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                                className="w-fit h-fit"
                            />

                            {image.id === 1 || image.id === 3 || image.id === 6 ? (
                                <div className="hidden md:block w-[300px] min-h-[180px] bg-white absolute top-[180px] left-20 z-20
                           rounded-lg  text-center p-6 backdrop-filter backdrop-blur-xs bg-opacity-90">
                                    <h1 className="text-xl font-light tracking-tighter text-black/80 mb-2">{image.heading}</h1>
                                    <div className="flex items-center mb-2">
                                        <div className="flex-grow h-0.5  mr-3 line-center-left "></div>
                                        <img
                                            src="/logoipsum2.svg"
                                            alt='logo1'
                                            className="w-5 h-5"
                                        />
                                        <div className="flex-grow h-0.5 ml-3 line-center-right"></div>
                                    </div>
                                    <p className="text-base font-normal tracking-wide text-black mb-1">{image.para}</p>
                                    <button className="text-sm mt-2 px-4 py-1 border border-black rounded-full">KNOW MORE</button>
                                </div>
                            ) : (
                                <div className="hidden md:block w-[300px] min-h-[180px] bg-white absolute top-[180px] right-20 z-20
                                 rounded-lg  text-center p-6 backdrop-filter backdrop-blur-xs bg-opacity-90">
                                    <h1 className="text-xl font-light tracking-tighter text-black/80 mb-2">{image.heading}</h1>
                                    <div className="flex items-center mb-2">
                                        <div className="flex-grow h-0.5  mr-3 line-center-left "></div>
                                        <img
                                            src="/logoipsum2.svg"
                                            alt='logo1'
                                            className="w-5 h-5"
                                        />
                                        <div className="flex-grow h-0.5 ml-3 line-center-right"></div>
                                    </div>
                                    <p className="text-base font-normal tracking-wide text-black mb-1">{image.para}</p>
                                    <button className="text-sm mt-2 px-4 py-1 border border-black rounded-full">KNOW MORE</button>
                                </div>

                            )}

                              {/** booking bar*/}

                            <div className="hidden  md:flex w-3/4 h-[50px] rounded-lg bg-white absolute 
                                bottom-10 left-[150px] overflow-hidden" onClick={()=> router.push("/booknow")}>
                                <div className="w-1/4 bg-secondary rounded-tl-lg rounded-bl-lg flex items-center justify-center">
                                    <div className="w-fit p-3">
                                        <IoIosSearch size={22} className="text-graybg" />
                                    </div>
                                    <div className="w-full overflow-hidden flex items-center">
                                        <motion.span
                                            className="whitespace-nowrap text-sm font-sans"
                                            initial={{ x: "100%" }}
                                            animate={{ x: "-100%" }}
                                            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
                                        >Premium,Standard,Economy</motion.span>
                                    </div>
                                </div>

                                <div className="w-1/2 bg-white flex items-center justify-between">
                                    <span className="text-sm font-medium flex items-center ms-7">
                                        <MdDateRange size={18} className="text-graybg mr-2" />
                                        {`${startDate.format('MMM DD')} to ${endDate.format('MMM DD')}, 1N`}
                                    </span>
                                    <span className="text-sm font-medium flex items-center ms-5">
                                        <FaBed size={18} className="text-graybg mr-2" />
                                        1 Room
                                    </span>
                                    <span className="text-sm font-medium flex items-center">
                                        <FaPersonHalfDress size={18} className="text-graybg mr-1" />
                                        1 Adult,0 Child
                                    </span>
                                </div>

                                <div className="w-1/4 bg-white rounded-tr-lg rounded-br-lg flex justify-end items-center p-4">
                                    <Link href="/booknow">
                                        <button className="bg-graybg text-md  font-medium rounded-2xl px-4 text-white hover:scale-105 transition-transform duration-300 ease-in-out">
                                            Book Now
                                        </button>
                                    </Link>
                                </div>

                            </div>




                            <>
                                <ContentSlide imageid={image.id} imageheading={image.heading} imagetext={image.para} />
                            </>

                        </div>

                    ))}


                </Carousel>

                <Info />
            </div>



        </>
    )
}

export default carousel