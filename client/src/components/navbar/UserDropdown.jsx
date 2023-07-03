/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAddOperationStatus, changeDeleteOperationStatus } from '../../features/operation/operationSlice';

function UserDropdown({ userUserDropdown }) {
  const { addOperation, deleteOperation } = useSelector((state) => state.operations);
  const dispatch = useDispatch();

  return (
    <div
      className={`absolute z-50 right-0 top-13 bg-white rounded-lg shadow text-base divide-y divide-gray-300 h ${userUserDropdown && 'hidden'}`}
    >
      <div className="px-8 py-3 w-60 text-center">
        <span className="block text-sm text-gray-900 dark:text-white font-bold">
          Features

        </span>

      </div>
      <ul className="py-2" aria-labelledby="user-menu-button">

        <li>
          <span
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex justify-between items-center"
          >
            <span className="font-bold">Add Photo Feature : </span>

            <label className="relative inline-flex items-center  cursor-pointer">
              <input type="checkbox" checked={addOperation} className="sr-only peer" onChange={(e) => dispatch(changeAddOperationStatus(e.target.checked))} />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
            </label>

          </span>
        </li>

        <li>
          <span
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex justify-between items-center"
          >
            <span className="font-bold">Delete Photo Feature : </span>

            <label className="relative inline-flex items-center  cursor-pointer">
              <input type="checkbox" checked={deleteOperation} className="sr-only peer" onChange={(e) => dispatch(changeDeleteOperationStatus(e.target.checked))} />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
            </label>

          </span>
        </li>

      </ul>
    </div>
  );
}

export default UserDropdown;
