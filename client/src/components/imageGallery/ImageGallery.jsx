/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import { useFetchImagesQuery } from '../../features/api/apiSlice';
import Error from '../Error';
import ImageCard from './ImageCard';

function ImageGallery() {
  const { searchText } = useSelector((state) => state.operations);

  const {
    isLoading, isError, data: images, error
  } = useFetchImagesQuery();

  // what to render

  let content;

  if (isLoading && !isError) {
    content = <h1>Loadig..</h1>;
  }
  if (!isLoading && isError) {
    console.log(error);
    if (error?.data?.message) {
      content = <Error message={error.data.message} />;
    } else {
      content = <Error message="There is an error" />;
    }
  }
  if (!isLoading && !isError && images?.length === 0) {
    content = <Error message="No Image found" />;
  }

  if (!isLoading && !isError && images?.length > 0) {
    // console.log(images);
    content = images.filter((image) => {
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

  return (
    <div
      className="m-2 p-5 border-solid border-2 border-gray-200 rounded-md mt-4 grid  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      { content }
    </div>
  );
}

export default ImageGallery;
