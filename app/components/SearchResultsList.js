"use client"
import SearchResult from "./SearchResult";



export default function SearchResultsList( {results} ) {

    if (results === undefined || results.length == 0 ) {
        return(
            <div></div>
        );
    }


    return(
        <div className="b bg-white overflow-y-auto max-h-96"> 
            {
                results.map( (item) => (
                    <SearchResult bookObj={item} key={item.id} />
                ))
            }
        </div>
        
    );
}