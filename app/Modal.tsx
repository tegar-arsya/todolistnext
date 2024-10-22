// components/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskText: string;
  setTaskText: (text: string) => void;
  onSave: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, taskText, setTaskText, onSave }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80 relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Add/Edit Task</h2>
        <textarea
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none mb-4"
          rows={3}
          placeholder="Enter task description..."
        />
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-200"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
