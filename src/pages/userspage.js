import React, { useState } from 'react';

const UsersPage = () => {
  // Mock data
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
  ]);

  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);

  const handleAddUser = () => {
    const updatedUsers = [...users, { ...newUser, id: Date.now() }];
    setUsers(updatedUsers);
    setNewUser({ name: '', email: '', role: '' });
  };

  const handleEditUser = (user) => {
    setIsEditing(true);
    setEditingUserId(user.id);
    setNewUser({ name: user.name, email: user.email, role: user.role });
  };

  const handleUpdateUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === editingUserId ? { ...user, ...newUser } : user
    );
    setUsers(updatedUsers);
    setIsEditing(false);
    setNewUser({ name: '', email: '', role: '' });
    setEditingUserId(null);
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">User Management</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit User' : 'Add New User'}</h2>
        <input
          type="text"
          placeholder="Name"
          className="p-2 border border-gray-300 rounded mb-2"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded mb-2"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          className="p-2 border border-gray-300 rounded mb-2"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        />
        <button
          onClick={isEditing ? handleUpdateUser : handleAddUser}
          className="bg-blue-600 text-white p-2 rounded"
        >
          {isEditing ? 'Update User' : 'Add User'}
        </button>
      </div>

      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleEditUser(user)}
                  className="bg-yellow-500 text-white p-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="bg-red-600 text-white p-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
