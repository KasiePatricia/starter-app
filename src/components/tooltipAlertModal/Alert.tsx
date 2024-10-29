import React, { useEffect, useState } from 'react';

interface AlertProps {
  isDefaultShown?: boolean;
  timeout?: number;
  type: 'warning' | 'error' | 'info';
  message: string;
}

const Alert: React.FC<AlertProps> = ({ isDefaultShown = false, timeout = 250, type, message }) => {
  const [isShown, setIsShown] = useState(isDefaultShown);
  const [isLeaving, setIsLeaving] = useState(false);

  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    setIsShown(true);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isDefaultShown, timeout]);

  const closeAlert = () => {
    setIsLeaving(true);
    timeoutId = setTimeout(() => {
      setIsLeaving(false);
      setIsShown(false);
    }, timeout);
  };

  return (
    isShown && (
      <div
        className={`relative p-4 rounded-md text-base mb-2 ${isLeaving ? 'animate-fadeOut' : ''} ${
          type === 'warning'
            ? 'bg-yellow-100 border border-yellow-300 text-yellow-800'
            : type === 'error'
            ? 'bg-red-100 border border-red-300 text-red-800'
            : 'bg-blue-100 border border-blue-300 text-blue-800'
        }`}
        role="alert"
      >
        <button
          className="absolute top-0 right-0 px-3 py-1 text-xl font-bold text-gray-600"
          onClick={closeAlert}
        >
          &times;
        </button>
        {message}
      </div>
    )
  );
};

export default Alert;
