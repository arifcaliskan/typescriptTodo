import { useReducer } from "react";

export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number };

const todoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];

    default:
      break;
  }
};

const model = () => {
  const [state, dispatch] = useReducer(todoReducer, []);
  return <div>model</div>;
};

export default model;
