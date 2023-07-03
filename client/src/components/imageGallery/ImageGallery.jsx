/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../../features/imageGallery/imageGallerySlice';
import ImageCard from './ImageCard';

function ImageGallery() {
  const images = useSelector((state) => state.ImageGallery.images);
  const { searchText } = useSelector((state) => state.operations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages())
  }, []);

  return (
    <div
      className="m-2 p-5 border-solid border-2 border-gray-200 rounded-md mt-4 grid  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {
        images
          .filter((image) => {
            if (searchText !== '') {
              if (image.title.toLowerCase().includes(searchText.toLowerCase())) {
                return true;
              }
              return false;
            }
            return true;
          })
          .map((image) => <ImageCard image={image} key={image._id} />)
      }
    </div>
  );
}

export default ImageGallery;
