/* eslint-disable import/prefer-default-export */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000'
  }),

  tagTypes: ['Images'],

  endpoints: (builder) => ({
    fetchImages: builder.query({
      query: () => ({ url: '/images' }),
      providesTags: ['Images']
    }),

    addImage: builder.mutation({
      query: (data) => ({
        url: '/images',
        method: 'POST',
        body: data,
        formData: true
      }),
      invalidatesTags: ['Images']
    }),

    deleteImage: builder.mutation({
      query: (data) => ({
        url: `images/${data}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Images']
    })
  })
});

export const {
  useFetchImagesQuery,
  useAddImageMutation,
  useDeleteImageMutation
} = apiSlice;
