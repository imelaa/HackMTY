// components/Toast.tsx
import React from 'react';

interface ToastProps {
  title: string;
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ title, message, onClose }) => {
  return (
    <div className="fixed top-4 right-4 bg-white border border-gray-300 shadow-lg rounded-lg p-4 z-50">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold text-lg">{title}</h4>
          <p className="text-gray-700">{message}</p>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
