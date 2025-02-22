import { deleteMenu } from "@/redux/actions/menuActions";
import { Trash } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const MenuItem = ({
  menu,
  setSelectedMenu,
  depth,
  isExpanded,
  toggleExpand,
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(isExpanded);
  const [isDelete, setIsDelete] = useState(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(isExpanded);
  }, [isExpanded]);

  const onCancelHandle = () => {
    setIsDelete(null);
  };

  const handleDelete = (menuId) => {
    dispatch(deleteMenu(menuId));
  };

  return (
    <div
      className="hs-accordion-treeview-root"
      role="tree"
      aria-orientation="vertical"
    >
      <div className="hs-accordion-group" role="group">
        <div
          className="hs-accordion"
          role="treeitem"
          aria-expanded={isOpen}
          id={`menu-item-${menu.id}`}
        >
          <div className="hs-accordion-heading py-0.5 flex items-center gap-x-2 w-full group">
            <button
              className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              aria-expanded={isOpen}
              aria-controls={`menu-collapse-${menu.id}`}
              onClick={toggleOpen}
            >
              <svg
                className={`size-4 text-gray-800 transition-transform ${
                  isOpen ? "" : "-rotate-90"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6 9l6 6l6-6"
                />
              </svg>
            </button>

            <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
              <div className="flex items-center gap-x-2">
                <button
                  type="button"
                  onClick={() => setSelectedMenu({ ...menu, isUpdate: true })}
                >
                  <span className="text-sm text-gray-800">{menu.name}</span>
                </button>
                <button
                  onClick={() => setSelectedMenu(menu)}
                  className="w-5 h-5 rounded-full bg-arctic-blue-600 text-center font-bold text-white text-xs flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  +
                </button>
                <button
                  onClick={() => setIsDelete(menu)}
                  className="w-5 h-5 rounded-full bg-red-500 text-center font-bold text-white text-xs flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Trash size="12" color="#ffffff" variant="Bold" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {isOpen && menu.children && menu.children.length > 0 && (
          <div
            id={`menu-collapse-${menu.id}`}
            className="hs-accordion-group relative before:absolute before:top-0 before:start-3 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100"
            role="group"
            aria-labelledby={`menu-item-${menu.id}`}
          >
            <div className="tree-view-space ps-7">
              {menu.children.map((child) => (
                <MenuItem
                  key={child.id}
                  menu={child}
                  setSelectedMenu={setSelectedMenu}
                  depth={depth + 1}
                  isExpanded={isExpanded}
                  toggleExpand={toggleExpand}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <DeleteConfirmationModal
        isOpen={isDelete}
        title={menu?.name}
        onClose={onCancelHandle}
        handleDelete={() => handleDelete(menu?.id)}
      />
    </div>
  );
};

export default MenuItem;
