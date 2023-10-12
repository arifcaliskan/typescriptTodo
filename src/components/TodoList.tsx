import React from "react";
import { Todo } from "../model";
import "./styles.css";
import SingleTodo from "./SingleTodo";
interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo, index) => (
        <SingleTodo todo={todo} key={todo.id} index={index} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  );
};
export default TodoList;
