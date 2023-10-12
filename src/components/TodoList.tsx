import React from "react";
import { Todo } from "../model";
import "./styles.css";
interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
};
export default TodoList;
