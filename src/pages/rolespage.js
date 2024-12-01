import React, { useState } from 'react';

const RolesPage = () => {
  const [roles, setRoles] = useState(['Admin', 'Editor', 'Viewer']);
  const [newRole, setNewRole] = useState('');

  const handleAddRole = () => {
    if (newRole && !roles.includes(newRole)) {
      setRoles([...roles, newRole]);
      setNewRole('');
    }
  };

  const handleDeleteRole = (role) => {
    setRoles(roles.filter((r) => r !== role));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Role Management</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="New Role"
          className="p-2 border border-gray-300 rounded mb-2"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
        />
        <button
          onClick={handleAddRole}
          className="bg-blue-600 text-white p-2 rounded"
        >
          Add Role
        </button>
      </div>

      <ul className="list-disc pl-6">
        {roles.map((role, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{role}</span>
            <button
              onClick={() => handleDeleteRole(role)}
              className="bg-red-600 text-white p-2 rounded ml-4"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RolesPage;
