import React, { useState } from 'react';

interface CollapseProps {
  collapsed?: boolean;
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ collapsed = true, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  return (
    <div className="w-full">
      <button
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? 'Show' : 'Hide'} content
      </button>
      <div
        className={`mt-4 ${isCollapsed ? 'hidden' : 'block'}`}
        aria-expanded={!isCollapsed}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
