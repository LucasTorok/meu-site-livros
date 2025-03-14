import React from 'react';

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed top-20 right-5 bg-[#F3F2EC] p-6 border border-[#848380] rounded-lg shadow-lg w-96 z-50 mt-5">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Mensagem</h2>
        <button onClick={onClose} className="text-gray-600 cursor-pointer">
          X
        </button>
      </div>
      <p className="mt-4">{message}</p>
    </div>
  );
};

export default Modal;
