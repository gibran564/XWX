'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddCardButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="flex flex-col items-center rounded-lg py-4 space-y-2 bg-opacity-20 bg-gray-700 hover:bg-opacity-30 cursor-pointer px-4 gap-4`" onClick={onClick}>
      <button className="rounded-full bg-blue-500 p-4 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default AddCardButton;
