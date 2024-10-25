import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, MapPin, Phone, Mail, Edit } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Please log in to view your profile</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-48 bg-green-600">
          <div className="absolute -bottom-16 left-8">
            <div className="bg-white p-2 rounded-full">
              <div className="bg-gray-200 rounded-full p-4">
                <User className="h-16 w-16 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-20 px-8 pb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600">{user.role === 'farmer' ? 'Farmer' : 'Consumer'}</p>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              <Edit className="h-4 w-4" />
              <span>Edit Profile</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="h-5 w-5 mr-2" />
              <span>+254 123 456 789</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Mail className="h-5 w-5 mr-2" />
              <span>{user.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;