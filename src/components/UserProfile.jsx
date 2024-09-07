import React, { useEffect, useState } from 'react';
import userData from './user.json';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(userData);
  }, []);

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="relative h-screen flex flex-col justify-center items-center  text-white overflow-hidden">
      {/* Profile Section */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Profile Picture */}
        <div className="w-48 h-48 mb-6 rounded-full overflow-hidden bg-violet-600 border-4 border-violet-500 shadow-lg">
          <img
            src={`https://ui-avatars.com/api/?name=${user.username}&background=6B46C1&color=FFFFFF&size=128`}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Join Date */}
        <h1 className="text-5xl font-bold mb-2">{user.username}</h1>
        <p className="text-lg text-violet-200">Joined on {new Date(user.joined).toLocaleDateString()}</p>

        {/* User Details */}
        <div className="mt-8 p-6 rounded-lg bg-white bg-opacity-30 shadow-lg backdrop-blur-lg">
          <h2 className="text-3xl font-semibold mb-4">User Details</h2>
          <p className="text-xl mb-4"><strong>Email:</strong> {user.email}</p>
          <p className="text-xl mb-4"><strong>Bio:</strong> {user.bio}</p>
          <p className="text-xl mb-4"><strong>Location:</strong> {user.location}</p>
          <p className="text-xl"><strong>Joined:</strong> {new Date(user.joined).toLocaleDateString()}</p>
          <button className="mt-6 bg-violet-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-violet-400 transition">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <svg className="absolute inset-0 -z-10" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="background-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#6B46C1', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#4A2C77', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#background-gradient)"
          d="M0,160L30,138.7C60,117,120,75,180,74.7C240,75,300,117,360,133.3C420,149,480,139,540,144C600,149,660,169,720,160C780,149,840,117,900,106.7C960,96,1020,96,1080,96C1140,96,1200,96,1260,128C1320,160,1380,224,1410,256L1440,288L1440,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default UserProfile;

