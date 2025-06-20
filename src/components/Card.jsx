// src/components/Card.jsx
import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-xl border border-blue-200 dark:border-gray-700 rounded-2xl p-6 transition-all hover:scale-[1.01] duration-300">
      {children}
    </div>
  );
};

export default Card;
