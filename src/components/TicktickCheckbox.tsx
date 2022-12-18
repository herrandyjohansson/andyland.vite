import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Todo } from "../models/todo";
import Api from "../utils/api";

interface Props {
  todo: Todo;
}

const TicktickCheckbox: React.FC<Props> = ({ todo }) => {
  const queryClient = useQueryClient();

  const [svgColor, setSvgColor] = React.useState("#4f545c");
  const deleteTodo = (id: number) => {
    mutation.mutate(todo);
  };

  const mutation = useMutation({
    mutationFn: (newTodo: Todo) => {
      return Api.completingTodoById(newTodo.id);
    },
    onSuccess: (data) => {
      queryClient.refetchQueries(["todos"]);
    },
  });

  return (
    <>
      <div className="flex items-center mr-4 mb-2">
        <input
          key={todo.id}
          type="checkbox"
          onClick={(e) => {
            setSvgColor("rgb(22 163 74");
            deleteTodo(todo.id);
          }}
          className="opacity-0 absolute w-8 h-8"
        />
        <div
          className={`border-2 border-grey-600 rounded-md w-10 h-10 flex flex-shrink-0 justify-center items-center mr-2`}
        >
          <TickSvgCheckbox color={svgColor} />
        </div>
        <label>{todo.description}</label>
      </div>
    </>
  );
};

export const TickSvgCheckbox: React.FC<any> = ({ svgColor }) => {
  return (
    <svg
      className={`fill-current hidden w-5 h-5 ticktick-checkbox-animation`}
      version="1.1"
      viewBox="0 0 17 12"
    >
      <g fillRule={"evenodd"}>
        <g transform="translate(-9 -11)" fill={svgColor} fillRule={"nonzero"}>
          <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
        </g>
      </g>
    </svg>
  );
};

export default TicktickCheckbox;
