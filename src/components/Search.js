import React from 'react'

import SearchIcon from '@mui/icons-material/Search';

const Search = ({ searchQuery, SetSearchQuery}) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            value={searchQuery}
            onInput={e => SetSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search"
            name="s"
        />
        <SearchIcon onClick="Submit" className="search-icon" />
    </form>
)

export default Search