

const ContentSlide = ({imageid, imagetext, imageheading}) => {
    return (
            <div key={imageid} className=" md:hidden w-[300px] min-h-[150px] bg-white absolute top-[260px] left-[60px] z-20
                        rounded-lg  text-center p-4 backdrop-filter backdrop-blur-xs bg-opacity-65">
                <h1 className="text-xl font-light tracking-tighter text-black/80 mb-2">{imageheading}</h1>
                <div className="flex items-center mb-2">
                    <div className="flex-grow h-0.5  mr-3 line-center-left "></div>
                    <img
                        src="/logoipsum2.svg"
                        alt='logo1'
                        className="w-5 h-5"
                    />
                    <div className="flex-grow h-0.5 ml-3 line-center-right"></div>
                </div>
                <p className="text-base font-normal tracking-wide text-black mb-1">{imagetext}</p>
            </div>
    )
}

export default ContentSlide