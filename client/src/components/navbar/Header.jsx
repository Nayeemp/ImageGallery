/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Searchbar from './Searchbar';
import UserIcon from './UserIcon';

function Header() {
  return (
    <header
      className="bg-slate-100 flex justify-between items-center shadow-md px-7"
    >
      {/* <!-- logo --> */}
      <h2 className="text-lg font-bold">iShop</h2>
      {/* <!-- logo end --> */}

      <Searchbar />

      <div className="flex justify-between py-3">
        <UserIcon />
      </div>
    </header>
  );
}

export default Header;
