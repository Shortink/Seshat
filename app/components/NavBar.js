"use client"
import Link from "next/link";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";
import { useState } from "react";



export default function NavBar( {setResult}) {

  return (
    <div className="navbar bg-primary-content">
        <div >
            <Link href="../" className="btn btn-primary text-xl">Home</Link>
        </div>
        
        <div className="mx-auto w-2/5 min-w-5 text-white">
            <SearchBar setResults={setResult}/>
        </div>
    </div>
  );
}
