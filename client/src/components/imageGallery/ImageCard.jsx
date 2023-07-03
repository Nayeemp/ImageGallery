/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteImage, fetchImages } from '../../features/imageGallery/imageGallerySlice';

function ImageCard({ image }) {
  const dispatch = useDispatch();
  const { isError, isLoading } = useSelector((state) => state.ImageGallery);
  const { deleteOperation } = useSelector((state) => state.operations);

  const deleteHandler = async (value) => {
    await dispatch(deleteImage({ image: value }));
    if (!isError && !isLoading) {
      console.log('fetchImages called after DELETE operation');
      await dispatch(fetchImages());
    }
  };
  return (
    <div className="max-w-sm bg-white shadow-lg duration-500 hover:scale-105 hover:shadow-xl relative">
      { deleteOperation && (
      <div className="absolute text-xl font-bold text-red-500 bg-green-500 px-2 right-0 hover:bg-red-500 hover:text-green-500 cursor-pointer" onClick={() => deleteHandler(image.image)}>
        <i className="fa fa-times" />
      </div>
      )}

      <img
        src={`${process.env.REACT_APP_API_IMAGES_FOLDER_LOCATION}/${image.image}`}
        alt=""
      />
      <div className="px-6 py-4 text-center font-bold">{image.title}</div>
    </div>
  );
}

export default ImageCard;
