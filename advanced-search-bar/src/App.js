import './App.css';
import BookData from './MOCK_DATA.json';
import React from 'react';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a title..." data={BookData}/>
    </div>
  );
}

export default App;
