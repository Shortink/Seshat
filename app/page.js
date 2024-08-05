"use client"
import SearchBar from './components/SearchBar';
import { useEffect, useState } from 'react';
import SearchResultsList from './components/SearchResultsList';
import Link from 'next/link';


export default function Home() {


  const [results, setResults] = useState([])

  return(
    <main className="h-screen bg-neutral">
      <h1>BOOKS</h1>
      <div className="mx-auto w-2/5 mt-20 min-w-52">
        <SearchBar setResults={setResults}/>
        <div className='h-96'>
          <SearchResultsList results={results} />
        </div>
      </div>
      <div className="flex items-center mt-3">
        <Link href="./home/" className="mx-auto"><button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">Go to Homepage</button></Link>
      </div>
    </main>
  );
}