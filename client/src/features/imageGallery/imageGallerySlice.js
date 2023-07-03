/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */

import { addImageThunk, deleteImageThunk, getImages } from './imageGalleryAPI';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  images: [],
  isLoading: false,
  isError: false,
  error: ''
};

export const fetchImages = createAsyncThunk('imageGallery/fetchImages', getImages);
export const addImage = createAsyncThunk('imageGallery/addImage', addImageThunk);
export const deleteImage = createAsyncThunk('imageGallery/deleteImage', deleteImageThunk);

const imageGallerySlice = createSlice({
  name: 'imageGallery',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        console.log('inside fetchImages.pending');
        state.isError = false;
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        console.log('inside fetchImages.fulfilled');
        state.isLoading = false;
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        console.log('inside fetchImages.rejected');
        state.isLoading = false;
        state.images = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(addImage.pending, (state) => {
        console.log('inside addImage.pending');
        state.isError = false;
        state.isLoading = true;
        state.error = '';
      })
      .addCase(addImage.fulfilled, (state) => {
        console.log('inside addImage.fulfilled');
        state.isLoading = false;
      })
      .addCase(addImage.rejected, (state, action) => {
        console.log('inside addImage.rejected');
        console.log('addImage.rejected action.error = ', action.error);
        console.log('addImage.rejected action.payload = ', action.payload);
        state.isLoading = false;
        state.isError = true;

        if (action?.payload) {
          state.error = action.payload;
        } else {
          state.error = 'Internal Server Error'
        }

        console.log('inside addImage.rejected end');
      })
      .addCase(deleteImage.pending, (state) => {
        console.log('inside deleteImage.pending');
        state.isError = false;
        state.isLoading = true;
        state.error = '';
      })
      .addCase(deleteImage.fulfilled, (state) => {
        console.log('deleteImage.fulfilled');
        state.isLoading = false;
      })
      .addCase(deleteImage.rejected, (state, action) => {
        console.log('inside deleteImage.rejected');
        console.log('deleteImage.rejected action.error = ', action.error);
        console.log('deleteImage.rejected action.payload = ', action.payload);
        state.isLoading = false;
        state.isError = true;

        if (action?.payload) {
          state.error = action.payload;
        } else {
          state.error = 'Internal Server Error'
        }
      });
  }
});

export default imageGallerySlice.reducer;
