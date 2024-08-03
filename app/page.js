"use client"
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import SearchResultsList from './components/SearchResultsList';


export default function Home() {

  const [results, setResults] = useState([])

  return(
    <main className="h-screen bg-gray-900">
      <h1>BOOKS</h1>
      <div className="mx-auto min-w-52 w-2/5 mt-20 min-w-52">
        <SearchBar setResults={setResults}/>
        <div className='h-96'>
          <SearchResultsList results={results} />
        </div>
        {/* <SearchResultsList results={results} /> */}
      </div>
      <div className="flex items-center mt-3">
        <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-auto">Go to Homepage</button>
      </div>
    </main>
  );
}