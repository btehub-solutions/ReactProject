import { useState } from 'react';

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
}

const ProfileCard = ({ name, role, image }: ProfileCardProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <div className={`max-w-sm rounded-xl overflow-hidden shadow-lg transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}>
        <div className="p-6 space-y-4">
          <img
            className="w-32 h-32 rounded-full mx-auto object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
            src={image}
            alt={name}
          />
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {role}
            </p>
          </div>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-full py-2 px-4 rounded-md transition-colors duration-300 ${
              isDarkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
            }`}
          >
            {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;