import React from 'react'
import usePhotoSearch from '../context/PhotoSearch'

function SearchForm() {
  const { searchPhotos, searchText, setSearchText } = usePhotoSearch();

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </>
  )
}

export default SearchForm