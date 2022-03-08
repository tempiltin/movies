import React from 'react'

function Search({handleInput, search}) {

    return (
        <div className="search">
            <input 
                type="text" 
                className="searchInput" 
                placeholder="Search movie..." 
                onChange={handleInput}
                onKeyPress={search}
            />
        </div>
    )
}

export default Search;