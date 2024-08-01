import Link from 'next/link';


export default function Home() {
  const searchStyle = ""
  const searchButton = ""
  return(
    <main className="h-screen bg-gray-400">
      <h1>Page</h1>
      {/* <label>Search Books</label> */}

      <div className="">
        <div>Search Bar</div>
        <div>Search Result</div>
        <input type='search'  placeholder="Search Books" className={searchStyle}/>
        <button type="submit" className={searchButton} >Search</button>
      </div>
    </main>
  );
}