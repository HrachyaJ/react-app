import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    avatar: '/api/placeholder/200/200' // Placeholder avatar
  });

  // Load profile from localStorage on component mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      try {
        const parsedProfile = JSON.parse(savedProfile);
        setProfile(parsedProfile);
      } catch (error) {
        console.error('Error parsing profile:', error);
      }
    } else {
      // Set default profile if no saved profile exists
      const defaultProfile = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        phone: '+1 (555) 123-4567',
        address: '123 Main Street, Anytown, USA 12345',
        avatar: '/api/placeholder/200/200'
      };
      setProfile(defaultProfile);
      localStorage.setItem('userProfile', JSON.stringify(defaultProfile));
    }
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedProfile = { ...profile, [name]: value };
    setProfile(updatedProfile);
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const updatedProfile = { ...profile, avatar: event.target.result };
        setProfile(updatedProfile);
        localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setIsEditing(false);
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Personal Information</h2>
        <button 
          onClick={handleEditToggle}
          className="text-blue-600 hover:text-blue-800"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      {isEditing ? (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Address</label>
            <textarea
              name="address"
              value={profile.address}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              rows="3"
            />
          </div>
          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <span className="text-gray-600">First Name:</span>
              <p className="font-medium">{profile.firstName}</p>
            </div>
            <div>
              <span className="text-gray-600">Last Name:</span>
              <p className="font-medium">{profile.lastName}</p>
            </div>
          </div>
          <div>
            <span className="text-gray-600">Email:</span>
            <p className="font-medium">{profile.email}</p>
          </div>
          <div>
            <span className="text-gray-600">Phone:</span>
            <p className="font-medium">{profile.phone}</p>
          </div>
          <div>
            <span className="text-gray-600">Address:</span>
            <p className="font-medium">{profile.address}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Order History Component
const OrderHistory = () => {
  const orders = [
    {
      id: 'ORD-001',
      date: '2024-03-15',
      total: 299.99,
      status: 'Delivered',
      items: [
        { name: 'Wireless Headphones', price: 99.99, quantity: 1 },
        { name: 'Smart Watch', price: 149.99, quantity: 1 }
      ]
    },
    {
      id: 'ORD-002',
      date: '2024-02-22',
      total: 79.99,
      status: 'Shipped',
      items: [
        { name: 'Portable Speaker', price: 79.99, quantity: 1 }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Order History</h2>
      {orders.map((order) => (
        <div key={order.id} className="border-b pb-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <span className="font-medium">Order #{order.id}</span>
              <span className="ml-4 text-gray-600">{order.date}</span>
            </div>
            <span 
              className={`px-3 py-1 rounded-full text-sm ${
                order.status === 'Delivered' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}
            >
              {order.status}
            </span>
          </div>
          <div className="space-y-2">
            {order.items.map((item) => (
              <div key={item.name} className="flex justify-between">
                <span>{item.name}</span>
                <span>
                  {item.quantity} x ${item.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="text-right mt-2 font-bold">
            Total: ${order.total.toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
};

// Security Settings Component
const SecuritySettings = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert('New passwords do not match');
      return;
    }
    // In a real app, this would trigger an API call to change password
    setShowChangePassword(false);
    setPasswords({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Security Settings</h2>
      
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <span>Change Password</span>
          <button 
            onClick={() => setShowChangePassword(!showChangePassword)}
            className="text-blue-600 hover:text-blue-800"
          >
            {showChangePassword ? 'Cancel' : 'Change'}
          </button>
        </div>
        
        {showChangePassword && (
          <form onSubmit={handleSubmitPassword} className="mt-4 space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={passwords.currentPassword}
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={passwords.newPassword}
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={passwords.confirmPassword}
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div> <br />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Update Password
            </button>
          </form>
        )}
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center">
          <span>Two-Factor Authentication</span>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

// Main Profile Page Component
const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
      >
        <span className="material-symbols-outlined mr-1">arrow_back</span>
        Back
      </button>

      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <ProfileInfo />
        <OrderHistory />
        <SecuritySettings className="md:col-span-2" />
      </div>
    </div>
  );
};

export default ProfilePage;