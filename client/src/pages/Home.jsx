import React from 'react';
import { useSelector } from 'react-redux';
import Error from '../components/Error';
import AddImageForm from '../components/imageGallery/AddImageForm';
import ImageGallery from '../components/imageGallery/ImageGallery';
import Header from '../components/navbar/Header';

function Home() {
  const { isError, error } = useSelector((state) => state.ImageGallery)
  const { addOperation } = useSelector((state) => state.operations);

  return (
    <div>
      <Header />
      { isError && <Error message={error} /> }
      {addOperation && <AddImageForm />}
      <ImageGallery />
    </div>
  );
}

export default Home;
