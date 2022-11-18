import { useState } from "react";
import TicktickCheckbox from "./TicktickCheckbox";
import { BsListCheck } from "react-icons/bs";
import { IoAddOutline } from "react-icons/io5";
interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export const Ticktick = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, task: "Angular idé", completed: false },
    { id: 1, task: "task 2", completed: false },
    { id: 2, task: "task 3", completed: false },
    { id: 3, task: "task 4", completed: false },
    { id: 4, task: "task 5", completed: true },
  ]);

  const removeTodo = (index: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === index) {
        todo.completed = true;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo = (task: Todo) => {
    const newTodos = [...todos, task];
    setTodos(newTodos);
  };

  return (
    <div className="grid grid-cols-2">
      <TicktickList
        list={"andy"}
        todos={todos}
        removeTodo={removeTodo}
        addTodo={addTodo}
      />
      <TicktickList
        list={"sofia"}
        todos={todos}
        removeTodo={removeTodo}
        addTodo={addTodo}
      />
    </div>
  );
};

const TicktickList: React.FC<any> = ({ list, todos, removeTodo }) => {
  return (
    <div className="ticktick-wrapper">
      <div className="flex pb-2">
        <BsListCheck size={"38"} />
        <span className="uppercase flex items-center pl-2">{list}</span>
      </div>
      <div>
        <input
          type={"text"}
          id={"task"}
          placeholder={"+ Add task"}
          onFocus={(e) => (e.target.placeholder = "")}
          className={"bg-grey-800 rounded-lg p-2 text-grey-100"}
        />
      </div>
      <div className="flex flex-col pt-2">
        {todos
          .filter((item: Todo) => !item.completed)
          .map((_todo: Todo) => {
            return (
              <TicktickCheckbox
                key={_todo.id}
                todo={_todo}
                remove={removeTodo}
              />
            );
          })}
      </div>
    </div>
  );
};
