"use client"
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import SearchResultsList from './components/SearchResultsList';


export default function Home() {

  const [results, setResults] = useState([])

  return(
    <main className="h-screen bg-gray-900">
      <h1>BOOKS</h1>
      <div className="mx-auto min-w-52 w-2/5 mt-60 min-w-52">
        <SearchBar setResults={setResults}/>
        <SearchResultsList results={results} />
      </div>
    </main>
  );
}