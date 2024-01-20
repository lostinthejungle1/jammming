import React from 'react';
import './SongBox.css'
function SongBox({operation,song,handleOperation}){
    const {songName,artist,album} = song;
    return (
        <div className='container'>
            <p>{songName}</p>
            <p>{artist}</p>
            <p>{album}</p>
            <button onClick={()=>handleOperation(song,operation)}>{operation==="add"?'+':'-'}</button>
        </div>
    )
}

export default SongBox;