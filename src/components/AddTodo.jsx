import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (input == "" || input == undefined) return; 
    dispatch(addTodo(input));
    setInput("");
  };
  

  return (
    <div>
      <div className="max-w-md mx-auto">
        <form
          className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={addTodoHandler}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="todo"
            >
              Todo:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="todo"
              type="text"
              placeholder="Enter your todo"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
