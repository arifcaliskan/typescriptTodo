import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
// const InputField: React.FC<Props> = ({todo, setTodo}) => ...
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // useEffect(() => {
  //   inputRef.current?.focus();
  // }, []);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Task"
        className="input-box"
      />
      <button type="submit" className="input-submit">
        Push
      </button>
    </form>
  );
};

export default InputField;
