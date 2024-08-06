import Image from "next/image";
import { useRouter } from 'next/navigation'


export default function SearchResult( {bookObj} ) {
    const router = useRouter()
    // let image = "/book-cover-placeholder.png"
    let image = ""
    let author = ""
    let link = ""

    const {selfLink, id, volumeInfo:{title, publishedDate, printType}} = bookObj

    try {
        image = bookObj.volumeInfo.imageLinks.thumbnail
        author = bookObj.volumeInfo.authors[0]
        link = bookObj.volumeInfo.previewLink
    } catch (error) {
        image = "/book-cover-placeholder.png"
    }
    console.log(bookObj)




    return(
        <div className="p-3 flex overflow-hidden min-h-24 border-b border-black bg-secondary hover:bg-accent" key={id} onClick={()=> router.push(link)}>
            <div className="mr-3 min-w-16 min-h-20 max-h-20">
                <Image
                    src={image}
                    alt=""
                    width="64"
                    height="80"
                />
            </div>

            <div>
                <div className="max-h-12 overflow-hidden text-warning">
                    <p>{title}</p>
                </div>

                <div className="flex mt-2 text-primary">
                    <div className="mr-4">{printType}</div>
                    <div className="mr-4">{publishedDate}</div>
                    <div className="mr-4">{author}</div>
                </div>
            </div>
        </div>
    );
}