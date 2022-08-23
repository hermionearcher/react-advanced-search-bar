import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter= (event) => {
    const searchedWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchedWord.toLowerCase());
    });

    if (searchedWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("")
  }

  return (
    <div className="search">
      <div className='searchInputs'>
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
        <div className='searchIcon'>
          { filteredData.length === 0 ? 
            <i class="fa fa-xmark fa-xl" aria-hidden="true" id="clearBtn" onClick={clearInput}></i> :
            <i class="fa fa-search fa-xl" aria-hidden="true"></i>
          }
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className='dataResult'>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a key={key} className="dataItem" title={`by ${value.author}`} href={value.link} target="_blank">
                <p>{value.title}</p>
              </a>
            )
          })}
        </div>
      )
      }
    </div>
  )
}


export default SearchBar;