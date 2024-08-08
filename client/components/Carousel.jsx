import { Carousel } from "flowbite-react"
import Image from "next/image";
import Info from "./Info";
import ContentSlide from "./ContentSlide";





const carousel = () => {

    const CarouselImages = [
        { id: 1, src: "/r1.jpg", alt: "Image 1", heading: "Stylish Couple’s Workspace", para: "A stylish workspace for couples to collaborate on professional projects." },
        { id: 2, src: "/r7.jpg", alt: "Image 2", heading: "Serene Reading Nook", para: "Find peace in our serene reading nooks, perfect for a good book and a cup of tea." },
        { id: 3, src: "/r8.jpg", alt: "Image 3", heading: "Elegant Dining Room", para: "Elegant dining rooms perfect for dinner parties and intimate meals." },
        { id: 4, src: "/r6.jpg", alt: "Image 4", heading: "Cozy Bedroom Retreat", para: "Relax in our cozy bedrooms, crafted for restful nights and serene mornings." },
        { id: 5, src: "/r2.jpg", alt: "Image 5", heading: "Modern Pool Area", para: "Enjoy modern luxury with sleek pool designs and chic furnishings for stylish events." },
        { id: 6, src: "/r5.png", alt: "Image 6", heading: "Luxurious Living Room", para: "Luxurious living rooms for ultimate comfort and stylish entertaining." },
    ];


    return (
        <>
        <div className="w-full h-[300px] sm:h-[400px] md:h-[550px]">
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


                  <>
                  <ContentSlide imageid={image.id} imageheading={image.heading}/>         
                  </>
             
                    </div>
                  
                ))}

                 
            </Carousel>

            {/* {CarouselImages.map((image)=>(
            <ContentSlide imageid={image.id} imagetext={image.para} imageheading={image.heading}/>         
            ))} */}

            <Info/>
        </div>
        
       

        </>
    )
}

export default carousel