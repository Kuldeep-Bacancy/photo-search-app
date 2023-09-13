import React from 'react'
import usePhotoSearch from '../context/PhotoSearch'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PhotoCards() {
  const { pics } = usePhotoSearch();

  const copyUrl = (e) => {
    window.navigator.clipboard.writeText(e.target.src)
    toast.success('URL copied!', { autoClose: 3000 })
  }
  return (
    <div className="card-list">
      {
        pics.map((pic) =>
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
              onClick={copyUrl}
            ></img>
          </div>)
      }
      <ToastContainer />
    </div>
  )
}

export default PhotoCards