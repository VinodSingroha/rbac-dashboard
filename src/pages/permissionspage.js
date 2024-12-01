import React, { useState } from 'react';

const PermissionsPage = () => {
  const [permissions, setPermissions] = useState([
    { role: 'Admin', perms: ['Read', 'Write', 'Delete'] },
    { role: 'Editor', perms: ['Read', 'Write'] },
    { role: 'Viewer', perms: ['Read'] },
  ]);

  const [newPermission, setNewPermission] = useState('');
  const [selectedRole, setSelectedRole] = useState('Admin');

  const handleAddPermission = () => {
    if (newPermission && !permissions.find(p => p.role === selectedRole).perms.includes(newPermission)) {
      const updatedPermissions = permissions.map((p) => {
        if (p.role === selectedRole) {
          return { ...p, perms: [...p.perms, newPermission] };
        }
        return p;
      });
      setPermissions(updatedPermissions);
      setNewPermission('');
    }
  };

  const handleRemovePermission = (role, perm) => {
    const updatedPermissions = permissions.map((p) => {
      if (p.role === role) {
        return { ...p, perms: p.perms.filter((permItem) => permItem !== perm) };
      }
      return p;
    });
    setPermissions(updatedPermissions);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Permissions Management</h1>

      <div className="mb-6">
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2"
        >
          {permissions.map((roleData) => (
            <option key={roleData.role} value={roleData.role}>
              {roleData.role}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="New Permission"
          className="p-2 border border-gray-300 rounded mb-2"
          value={newPermission}
          onChange={(e) => setNewPermission(e.target.value)}
        />
        <button
          onClick={handleAddPermission}
          className="bg-blue-600 text-white p-2 rounded"
        >
          Add Permission
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Permissions for {selectedRole}</h3>
        <ul className="list-disc pl-6">
          {permissions
            .find((p) => p.role === selectedRole)
            .perms.map((perm, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{perm}</span>
                <button
                  onClick={() => handleRemovePermission(selectedRole, perm)}
                  className="bg-red-600 text-white p-2 rounded ml-4"
                >
                  Remove
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default PermissionsPage;
