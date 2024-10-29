import { useBodyScrollLock } from "@hooks/useBodyScrollLock";
import React, { useCallback, useEffect } from 'react';

interface ModalProps {
  isVisible: boolean;
  title: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, title, content, footer, onClose }) => {
  // Use the hook and pass isVisible as the lock condition
  useBodyScrollLock(isVisible);

  const keydownHandler = useCallback(({ key }: KeyboardEvent) => {
    if (key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg m-5 overflow-hidden bg-white rounded-lg shadow-lg animate-slide-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-medium">{title}</h3>
          <button className="text-2xl" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="p-4">
          {content}
        </div>
        {footer && (
          <div className="flex items-center justify-end p-4 border-t border-gray-200">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;