import React from 'react'
import PhotoCards from './PhotoCards';
import SearchForm from './SearchForm';
import { PhotoSearchContextProvider } from '../context/PhotoSearch'

function SearchPhotos() {

  return (
    <PhotoSearchContextProvider>
      <SearchForm />
      <PhotoCards />
    </PhotoSearchContextProvider>
  )
}

export default SearchPhotos