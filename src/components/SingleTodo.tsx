import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

type Props = {
  todo: Todo;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  index: number;
};
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos, index }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const focusInputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    focusInputRef.current?.focus();
    focusInputRef.current?.select();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(!edit);
  };
  return (
    <form className="todos-single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          type="text"
          ref={focusInputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos-single-text"
        />
      ) : (
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
      )}

      {todo.isDone ? (
        <s className="todos-single-text">{todo.todo}</s>
      ) : (
        <span className="todos-single-text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          <AiFillDelete />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDone(todo.id);
          }}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
