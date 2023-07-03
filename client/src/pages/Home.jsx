import React from 'react';
import { useSelector } from 'react-redux';
import AddImageForm from '../components/imageGallery/AddImageForm';
import ImageGallery from '../components/imageGallery/ImageGallery';
import Header from '../components/navbar/Header';

function Home() {
  const { addOperation } = useSelector((state) => state.operations);

  return (
    <div>
      <Header />
      {addOperation && <AddImageForm />}
      <ImageGallery />
    </div>
  );
}

export default Home;
