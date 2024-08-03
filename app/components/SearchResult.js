import Image from "next/image";


export default function SearchResult( {bookObj} ) {

    const {selfLink, id, volumeInfo:{title, publishedDate, printType}} = bookObj
    // const {volumeInfo:{imageLinks:{thumbnail}}} = bookObj


    const ph = "http://books.google.com/books/content?id=kr09DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"


    return(
        <div className="mb-1 bg-cyan-200 p-3 flex overflow-hidden min-h-24" key={id}>
            <div className="mr-3 min-w-16 min-h-20 max-h-20">
                <Image
                    src={"/book-cover-placeholder.png"}
                    alt=""
                    width="64"
                    height="80"
                />
            </div>

            <div>
                <div className="max-h-12 overflow-hidden">
                    <p>{title}</p>
                </div>

                <div className="flex mt-2">
                    <div className="mr-4">{printType}</div>
                    <div className="mr-">{publishedDate}</div>
                </div>
            </div>
        </div>
    );
}