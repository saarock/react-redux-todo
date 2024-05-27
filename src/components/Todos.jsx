import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [input, setInput] = useState("");

  const handleUpdateClick = (id, text) => {
    setEditingTaskId(id);
    setInput(text);
  };

  const handleUpdateConfirm = (id) => {
    dispatch(updateTodo({ id, text: input }));
    setEditingTaskId(null);
    setInput("");
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-lg font-semibold mb-4">Todos</h2>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center border-b border-gray-200 py-2"
            >
              {editingTaskId === todo.id ? (
                <>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter your todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button
                    className="text-blue-600 hover:text-blue-800 focus:outline-none bg-blue-400 p-2 rounded-md"
                    onClick={() => handleUpdateConfirm(todo.id)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span className="text-gray-700">{todo.text}</span>
                  <button
                    className="text-blue-600 hover:text-blue-800 focus:outline-none bg-blue-400 p-2 rounded-md"
                    onClick={() => handleUpdateClick(todo.id, todo.text)}
                  >
                    Update
                  </button>
                </>
              )}
              <button
                className="text-red-600 hover:text-red-800 focus:outline-none bg-red-300 p-2 rounded-md"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
