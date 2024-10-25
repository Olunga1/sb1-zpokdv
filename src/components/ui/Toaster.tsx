import React from 'react';
import { X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
}

const Toast = ({ message, type = 'info', onClose }: ToastProps) => {
  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  }[type];

  return (
    <div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex justify-between items-center`}>
      <span>{message}</span>
      <button onClick={onClose} className="ml-4">
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export const Toaster = () => {
  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {/* Toasts will be rendered here dynamically */}
    </div>
  );
};