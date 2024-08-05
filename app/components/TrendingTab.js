"use client"
import { useEffect, useState } from "react";
import BookCard from "./BookCard";

export default function TrendingTab() {

  const [bookDisplay, setBookDisplay] = useState([]);
  const [bookIds, setBookIds] = useState([])

  async function getBookById(bookId) {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}`);
      const data = response.json();
      return data;
    } catch (error) {
      
    }
  }

  async function getBookId () {
    
    let books = ["tLdiDwAAQBAJ", "4WFnEAAAQBAJ", "wy0J0AEACAAJ", "gswAEAAAQBAJ", "QQOdvwEACAAJ", "Mj5XDwAAQBAJ", "yH2nxAEACAAJ", "VVAREAAAQBAJ", "6fEgzwEACAAJ", "oX7V3fb2i4gC", "Qn4PMQAACAAJ", "wzILywAACAAJ"]
    setBookIds(books)
  }

  useEffect(() => {
    getBookId();
  }, []);



  useEffect(() => {
    (async () => {
      let thisDisplay =[];
      for (let i = 0; i < bookIds.length; i++) {
        let thisBook = await getBookById(bookIds[i]);
        thisDisplay.push(thisBook);
      }
      setBookDisplay(thisDisplay);
    })();
  }, [bookIds])
  
  
  return (
    <div className="flex flex-wrap max-w-screen-2xl pt-2 pl-2 mx-auto ">

        {
          bookDisplay.map((book) => (
            <BookCard bookObj={book} />
          ))
        }
 
    </div>
  );
}
