


export default function CarouselDescription( {bookObj} ) {
    
    let title = ""
    let description = ""

    try {
        title = bookObj.volumeInfo.title
        description = bookObj.volumeInfo.description
    } catch (error) {
        title = "Error 429"
        description = "error"
    }

    return(
        <div className="bg- pt-10 p-5 overflow-hidden max-w-[40%] min-w-[40%] ">
            <div className=" text-5xl overflow-hidden max-w-[80%] max-h-24 font-bold text-primary"><h1>{title}</h1></div>
            
            <div className="mt-5 overflow-hidden max-w-[80%] max-h-48 text-2xl font-sans text-neutral-content">
                <p className="font-sans text-neutral-content">
                    {description}
                </p>
            </div>
        </div>
    )
}