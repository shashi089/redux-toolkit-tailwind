import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoslice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      Todos
      {todos.map((element) => {
        return (
          <div key={element.id}>
            {element.text}{" "}
            <button
              onClick={() => dispatch(removeTodo(element.id))}
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none
        hover:bg-indigo-600 ronded text-lg"
            >
              Remove Todo
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
