/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../../features/operation/operationSlice';

function Searchbar() {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.operations);
  return (
    <div className="max-w-sm w-full py-2 relative">
      <div className="absolute left-2 top-4 text-lg opacity-50">
        <i className="fa fa-search hover:text-green-400" />
      </div>

      {searchText && (
      <div className="absolute right-2 top-4 text-lg" onClick={() => dispatch(search(''))}>
        <i className="fa fa-times hover:text-red-500" />
      </div>
      )}

      <input
        type="text"
        placeholder="search"
        value={searchText}
        className="border-solid border-2 border-gray-300 py-2 w-full pl-7 rounded-md hover:outline-green-500"
        onChange={(e) => dispatch(search(e.target.value))}
      />
    </div>
  );
}

export default Searchbar;
