import React, { ReactNode, useState } from 'react';

interface TooltipProps {
  children: ReactNode;
  text: string;
  [key: string]: any;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, text, ...rest }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <div
        className={`absolute bg-black bg-opacity-70 text-white text-sm p-1.5 rounded-md top-full mt-1.5 ${show ? 'block' : 'hidden'}`}
      >
        {text}
        <span className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 border-5 border-transparent border-b-black" />
      </div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};
