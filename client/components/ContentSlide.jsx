import React from 'react'

const ContentSlide = ({imageid, imageheading}) => {
    return (
            <div key={imageid} className=" md:hidden w-[300px] min-h-[50px] bg-white absolute top-[220px] left-10 z-20
                        rounded-lg  text-center p-2  shadow-md">
                <h1 className="text-2xl font-extralight tracking-tighter text-black/80">{imageheading}</h1>
                <div className="flex items-center">
                    <div className="flex-grow h-0.5  mr-3 line-center-left "></div>
                    <img
                        src="/logoipsum2.svg"
                        alt='logo1'
                        className="w-7 h-7"
                    />
                    <div className="flex-grow h-0.5 ml-3 line-center-right"></div>
                </div>
            </div>
    )
}

export default ContentSlide