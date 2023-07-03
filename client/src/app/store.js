/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import ImageGalleryReducer from '../features/imageGallery/imageGallerySlice';
import operationReducer from '../features/operation/operationSlice';

export const store = configureStore({
  reducer: {
    ImageGallery: ImageGalleryReducer,
    operations: operationReducer
  }
});
