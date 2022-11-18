import React from "react";

interface Props {
  remove: (index: number) => void;
  todo: Todo;
}

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}
const TicktickCheckbox: React.FC<Props> = ({ todo, remove }) => {
  const [svgColor, setSvgColor] = React.useState("#4f545c");
  const handleClick = (id: number) => {
    remove(id);
  };

  return (
    <>
      <div className="flex items-center mr-4 mb-2">
        <input
          key={todo.task}
          defaultChecked={todo.completed}
          type="checkbox"
          onClick={(e) => {
            setSvgColor("rgb(22 163 74");
            // POST delete to API
            setTimeout(() => {
              handleClick(todo.id);
            }, 400);
          }}
          className="opacity-0 absolute w-8 h-8"
        />
        <div
          className={`border-2 border-grey-600 rounded-md w-10 h-10 flex flex-shrink-0 justify-center items-center mr-2`}
        >
          <TickSvgCheckbox color={svgColor} />
        </div>
        <label>{todo.task}</label>
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
