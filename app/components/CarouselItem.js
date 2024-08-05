import Image from "next/image";
import { useEffect, useState } from "react";
import CarouselDescription from "./CarouselDescription";


export default function CarouselItem( {bookId} ) {
    let image = ""
    let url = ''
    
    const [bookDisplay, setBookDisplay] = useState([]);

    async function getBookById(bookId) {
        try {
          const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}`);
          const data = response.json();
          console.dir(data)
          return data;
        } catch (error) {
          
        }
      }


      useEffect(() => {
        (async () => {
          let thisBook = await getBookById(bookId);
          setBookDisplay(thisBook);
          console.dir(thisBook)
        })();
      }, [bookId])

      try {
        image = bookDisplay.volumeInfo.imageLinks.medium
        url = bookObj.volumeInfo.previewLink
      } catch (error) {
        
      }

    return(
        <div className="carousel-item w-full ">
          <Image
            src={image}
            alt="wtv"
            width={800}
            height={400}
          />
          <CarouselDescription bookObj={bookDisplay} />
        </div>
    );
}