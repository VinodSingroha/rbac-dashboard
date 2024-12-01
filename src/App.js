import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import NavBar from './components/navbar'; // Importing the NavBar component

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <NavBar />

      <main className="flex-1 p-6">
        <h1 className="text-3xl font-semibold mb-4">Welcome to the Admin Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dashboard Cards */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            <p className="mb-4">View, add, and manage users in your system.</p>
            <Link
              to="/users"
              className="bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Manage Users
            </Link>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Role Management</h2>
            <p className="mb-4">Create, edit, and assign roles to users.</p>
            <Link
              to="/roles"
              className="bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Manage Roles
            </Link>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Permissions Management</h2>
            <p className="mb-4">Assign permissions to different roles for access control.</p>
            <Link
              to="/permissions"
              className="bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Manage Permissions
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
