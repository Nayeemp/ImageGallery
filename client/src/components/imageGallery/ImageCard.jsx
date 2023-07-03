/* eslint-disable no-empty-pattern */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { useDeleteImageMutation } from '../../features/api/apiSlice';
import Error from '../Error';

function ImageCard({ image }) {
  const { deleteOperation } = useSelector((state) => state.operations);
  const [deleteImage, { isLoading, isError, error }] = useDeleteImageMutation();
  let responseError = null;
  if (!isLoading && isError) {
    console.log('error = ', error);
    if (error?.data?.message) {
      responseError = <Error message={error.data.message} />;
    } else {
      responseError = <Error message="There is an error" />;
    }
  }

  console.log('responseError  = ', responseError);

  return (
    <div className="max-w-sm bg-white shadow-lg duration-500 hover:scale-105 hover:shadow-xl relative">
      { deleteOperation && (
      <div className="absolute text-xl font-bold text-red-500 bg-green-500 px-2 right-0 hover:bg-red-500 hover:text-green-500 cursor-pointer" onClick={() => deleteImage(image.image)}>
        <i className="fa fa-times" />
      </div>
      )}

      <img
        src={`${process.env.REACT_APP_API_IMAGES_FOLDER_LOCATION}/${image.image}`}
        alt=""
      />
      <div className="px-6 py-4 text-center font-bold">{image.title}</div>
      {responseError && <div className="px-6 py-4 text-center font-bold">{responseError}</div>}
    </div>
  );
}

export default ImageCard;
