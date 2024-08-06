"use client"
import { useState } from "react";
import NavBar from "../components/NavBar";
import NewTab from "../components/NewTab";
import SearchResultsList from "../components/SearchResultsList";
import SlidingHome from "../components/SlidingHome";
import TrendingTab from "../components/TrendingTab";


export default function Page() {
  const [results, setResults] = useState([])
  
  return (
    <main className="bg-neutral">
      <NavBar setResult={setResults} />
      <div className="">
      <div className='h-96 w-2/5 absolute ml-[32.5%]'>
              <SearchResultsList results={results} />
            </div>
      </div>
      
      <div className=" mx-auto mt-2 w-11/12"> <SlidingHome /></div>
      
      <div role="tablist" className="tabs tabs-bordered mt-5">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab ml-64 "
          aria-label="New"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content">
          <NewTab />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Trending"
        />
        <div role="tabpanel" className="tab-content">
          <TrendingTab />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Random"
        />
        <div role="tabpanel" className="tab-content">
          <TrendingTab />
        </div>
      </div>
    </main>
  );
}
