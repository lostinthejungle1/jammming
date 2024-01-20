import './App.css';
import React,{useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';

import SearchResult from '../SearchResult/SearchResult';
import PlayList from '../PlayList/PlayList'


function App() {
  const [searchValue,setSearchValue] = useState('');
  const [searchResults,setSearchResults] = useState([]);
  const [addedList,setAddedList] = useState([]);

  const mockdata = [
    {songName:'Cruel Summer',artist:'Taylor Swify',album:'1999',key:'1'},
    {songName:'Show yourself',artist:'3unshine',album:'We are 3unshine',key:'2'},
    {songName:'Go back to 1999',artist:'Liang Liu',album:'Me',key:'3'},
  ]
  const handleChange = e=>{
    setSearchValue(e.target.value)
    console.log(searchValue)
  }

  const handleSearch = (e)=>{
    //request spotify api and then update search results
    e.preventDefault();
    setSearchResults(mockdata) 
  }
  const handleOperation = (song,operation)=>{
    console.log(song,operation)
    if(operation==='add'){
      //move this song item to the playlist
      setAddedList(prev=>{
        if(!prev.find(item=>item.key===song.key)){
          return [...prev,song];  
        }else{
          return prev;
        }
      })
    }else{
      //remove this song item from the playlist
      setAddedList(prev=>{
        return prev.filter(item=>item.key!==song.key)
      })
    }
  }

  const handleSavePlayList = ()=>{
    //save the created list to the spotify account
  }

  return (
    <div className="App">
      <header>Jammming</header>
      <SearchBar searchValue={searchValue} handleChange={handleChange} handleSearch={handleSearch} />
      <SearchResult songList={searchResults} handleOperation={handleOperation} />
      <PlayList addedList={addedList} handleOperation={handleOperation} handleSavePlayList={handleSavePlayList}/>
    </div>
  );
}

export default App;

//pending two api request as well as styling
//1.search songs
//save to account playlist
//style different components
//part2 extra feature