import React, { useState } from "react";
import MenuItem from "./MenuItem";

const MenuTree = ({ menus, setSelectedMenu }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="space-y-4">
      <div className="flex mb-4 gap-x-2">
        <button
          type='button'
          onClick={() => setIsExpanded(true)}
          className="bg-blue-gray-800 hover:bg-blue-gray-800/90 rounded-[48px] text-white font-bold px-8 py-3 text-sm"
        >
          Expand All
        </button>
        <button
          type='button'
          onClick={() => setIsExpanded(false)}
          className="bg-blue-gray-300 hover:bg-blue-gray-300/90 rounded-[48px] text-blue-gray-600 font-bold px-8 py-3 text-sm"
        >
          Collapse All
        </button>
      </div>

      <ul>
        {menus.map((menu) => (
          <MenuItem
            key={menu.id}
            menu={menu}
            setSelectedMenu={setSelectedMenu}
            depth={1}
            isExpanded={isExpanded}
            toggleExpand={toggleExpand}
          />
        ))}
      </ul>
    </div>
  );
};

export default MenuTree;
