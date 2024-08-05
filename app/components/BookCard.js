import Image from "next/image";
import Link from 'next/link';

export default function BookCard( {bookObj} ) {
  let title = ""
  let image = ""
  let url = ""
  let key = ""

  try {
    title = bookObj.volumeInfo.title
    image = bookObj.volumeInfo.imageLinks.thumbnail
    url = bookObj.volumeInfo.previewLink
    key = bookObj.id
  } catch (error) {
    title = "Too Many Requests"
  }

  return (

    <Link href={url} key={key}>

    <div className="max-w-52 mr-5 mb-6 bg-white">
        <div className="`bg-base-100 w-52 h-72 overflow-hidden rounded-sm max-h-72 max-w-52 relative">
            <Image
                src={image}
                alt="icon"
                // width={150}
                // height={288}
                fill={true}
            />
        </div>
        <div className="p-1 w-52 overflow-hidden h-14 text-primary bg-primary-content"><h1>{title}</h1></div>
    </div>

    </Link>
  );
}
