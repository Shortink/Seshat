"use client"
import { useEffect, useState } from "react";
import { useDebouncedCallback } from 'use-debounce';


export default function SearchBar( { setResults } ) {

    async function getBooks(value) {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&printType=books&keyes&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}`);
            const data = await response.json();
            setResults(data.items);
        } catch (error) {
            console.dir(`Error: ${error.message}`);
        };
    };


    
    const [input, setInput] = useState("")
    const handleInputChange = (event) => {
        setInput(event.target.value);
        handleSearch(event)
    };

    const handleSearch = useDebouncedCallback((event) => {
        getBooks(event.target.value);
    }, 600);


    return(

        <div className="flex items-center w-full overflow-clip text-primary">
            <label className="input flex items-center gap-2 w-full">
                <input type="search" className="grow" placeholder="Search Books..." value={input} onChange={handleInputChange} />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>
        </div>

    );
};