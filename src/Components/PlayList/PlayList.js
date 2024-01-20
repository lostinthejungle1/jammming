import React from "react";
import SongBox from "../SongBox/SongBox";

function PlayList({addedList,handleOperation,handleSavePlayList}){
    return (
        <div>
            <h2>New Playlist</h2>
            {
                !addedList?'No songs added to the list yet':
                addedList.map(song=><SongBox operation='remove' song={song} handleOperation={handleOperation} />)
            }
            <button onClick={handleSavePlayList}>Save to spotify</button>
        </div>
    )
}

export default PlayList;