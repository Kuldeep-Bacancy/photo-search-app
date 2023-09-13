import { useContext,createContext, useState} from "react";
import { createApi } from "unsplash-js";
import { toast } from 'react-toastify';

export const PhotoSearchContext = createContext();

export const PhotoSearchContextProvider = ({children}) => {
  const unsplash = createApi({ accessKey: 'YOO-Ph4IujEIzCMCykhy7ZrXwliK4o_CMYh8tOAWxWE' });
  const [searchText, setSearchText] = useState('');
  const [pics, setPics] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
      .getPhotos({ query: searchText, page: 1, perPage: 50 })
      .then((json) => {
        const feed = json.response;
        const { results } = feed;
        setPics(results);
        if(results.length === 0){
          toast.error('No Images Found!', { autoClose: 3000 })
        }
      });
  };

  return(
    <PhotoSearchContext.Provider value={{ searchText, setSearchText, pics, setPics, searchPhotos}}>
      {children}
    </PhotoSearchContext.Provider>
  )

}

export default function usePhotoSearch(){
  return useContext(PhotoSearchContext);
}

