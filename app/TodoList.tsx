"use client";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; 
import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

interface Task {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState<string>("");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const openModal = (id: number | null = null) => {
    if (id !== null) {
      const taskToEdit = tasks.find(task => task.id === id);
      if (taskToEdit) {
        setTaskText(taskToEdit.text);
        setEditingTaskId(id);
      }
    } else {
      setTaskText("");
      setEditingTaskId(null);
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTaskText("");
    setEditingTaskId(null);
  };

  const addTask = () => {
    if (taskText.trim() === "") return;

    const newTask: Task = {
      id: Date.now(),
      text: taskText,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    closeModal();
  };

  const updateTask = () => {
    if (editingTaskId === null || taskText.trim() === "") return;

    const updatedTasks = tasks.map(task => 
      task.id === editingTaskId ? { ...task, text: taskText } : task
    );

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    closeModal();
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleSave = () => {
    if (editingTaskId !== null) {
      updateTask();
    } else {
      addTask();
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">My TODO List</h2>
      <button
        onClick={() => openModal()}
        className="bg-green-600 text-white rounded-lg px-6 py-2 mb-4 hover:bg-green-700 transition duration-300"
      >
        Add New Task
      </button>

      <ul className="w-full max-w-md">
        <AnimatePresence>
          {tasks.map(task => (
            <motion.li
              key={task.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className="flex justify-between items-center bg-gray-100 rounded-lg p-4 mb-2 shadow-sm hover:shadow-lg transition duration-300"
            >
              <span className="text-gray-800">{task.text}</span>
              <div>
                <button onClick={() => openModal(task.id)} className="text-yellow-600 hover:text-yellow-700 mr-2 transition duration-300">
                  <FaEdit />
                </button>
                <button onClick={() => deleteTask(task.id)} className="text-red-600 hover :text-red-700">
                  <FaTrash />
                </button>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        taskText={taskText}
        setTaskText={setTaskText}
        onSave={handleSave}
      />
    </div>
  );
};

export default TodoList;