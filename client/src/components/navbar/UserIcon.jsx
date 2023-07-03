/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import UserDropdown from './UserDropdown';

function UserIcon() {
  const [userUserDropdown, setUserUserDropdown] = useState(true);

  const userUserDropdownHandler = () => {
    if (userUserDropdown) {
      setUserUserDropdown(false);
    } else {
      setUserUserDropdown(true);
    }
  }

  return (
    <div className="py-3 px-5">
      <div className="relative">
        <span className="text-2xl hover:cursor-pointer hover:text-lime-500" onClick={() => userUserDropdownHandler()}>
          <i className="fas fa-cog" />
        </span>
        <UserDropdown userUserDropdown={userUserDropdown} />
      </div>
    </div>
  )
}

export default UserIcon;
