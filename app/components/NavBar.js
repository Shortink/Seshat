import Link from "next/link";
import SearchBar from "./SearchBar";



export default function NavBar() {
  return (
    <div className="navbar bg-primary-content">
        <div >
            <Link href="../" className="btn btn-primary text-xl">Book</Link>
        </div>
        
        <div className="mx-auto w-2/5 min-w-5 text-white">
            <SearchBar />
        </div>
    </div>
  );
}
