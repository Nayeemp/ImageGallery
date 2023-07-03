/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  addOperation: true,
  deleteOperation: false,
  searchText: ''
};

const operationSlice = createSlice({
  name: 'operation',
  initialState,
  reducers: {

    changeAddOperationStatus: (state, action) => {
      state.addOperation = action.payload;
    },

    changeDeleteOperationStatus: (state, action) => {
      state.deleteOperation = action.payload;
    },

    search: (state, action) => {
      state.searchText = action.payload;
    }

  }
});

export default operationSlice.reducer;
export const { changeAddOperationStatus, changeDeleteOperationStatus, search } = operationSlice.actions;
