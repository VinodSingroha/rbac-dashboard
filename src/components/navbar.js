import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-6">
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/roles">Roles</Link></li>
        <li><Link to="/permissions">Permissions</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
