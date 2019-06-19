import React from 'react';

const Search = ( {location} ) => {
    return (
        <div>
            <h1>
                Search - {new URLSearchParams(location.search).get('keyword')}
            </h1>
        </div>
    );
};

export default Search;