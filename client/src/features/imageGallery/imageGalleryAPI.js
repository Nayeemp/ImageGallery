/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

export const getImages = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/images`);
  return response.data;
};

export const addImageThunk = async (payload, { rejectWithValue }) => {
  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/images`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  } catch (error) {
    console.log(error);
    return rejectWithValue(error?.response?.data?.message)
  }
};

export const deleteImageThunk = async (payload, { rejectWithValue }) => {
  try {
    // console.log('payload = ', payload);
    const { image } = payload;
    // console.log('image = ', image);
    await axios.delete(`${process.env.REACT_APP_API_URL}/images/${image}`);
  } catch (error) {
    console.log(error);
    return rejectWithValue(error?.response?.data?.message)
  }
};
