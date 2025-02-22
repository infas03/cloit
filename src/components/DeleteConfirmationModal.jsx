import React from 'react';

const DeleteConfirmationModal = ({ isOpen, onClose, title, handleDelete }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-[9999]">
        <div className="bg-white flex flex-col w-[500px] p-12 rounded-lg shadow-lg justify-center items-center text-center">
          <h2 className="text-base font-bold text-red-600">Do you really want to delete this {title}?</h2>
          <h1 className='text-xs text-black'>Once deleted, the {title} details cannot be recovered.</h1>
          <div className="flex gap-5 mt-5">
            <button
              type="button"
              onClick={() => onClose()}
              className="bg-red-600 hover:bg-red-600/90 text-white text-sm font-bold h-12 w-32 rounded-xl"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => handleDelete()}
              className="bg-blue-700 hover:bg-blue-700/90 text-white text-sm font-bold h-12 px-6 rounded-xl"
            >
              Delete <span className="capitalize">{title}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirmationModal;
