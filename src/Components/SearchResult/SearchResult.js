import React from "react";
import SongBox from "../SongBox/SongBox";

function SearchResult({songList,handleOperation}){
    return (
        <div>
            <h2>Results</h2>
            {
                !songList.length?'No searched results':
                songList.map(song=><SongBox operation='add' song={song} handleOperation={handleOperation} />)
            }
        </div>
    );
}

export default SearchResult;