import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    const { fetchGiphy } = props;
    console.log(event.currentTarget.value);
    fetchGiphy(event.currentTarget.value);
  };
  return (
    <input className="form-search form-control" type="text" placeholder="Search for a gif" onChange={handleChange} />
  );
};

export default SearchBar;
