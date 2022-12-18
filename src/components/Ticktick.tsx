import TicktickCheckbox from "./TicktickCheckbox";
import { BsListCheck } from "react-icons/bs";
import {
  Mutation,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import Api from "../utils/api";
import { Todo, Todos } from "../models/todo";
import React from "react";

export const Ticktick = () => {
  const { data: todos, isLoading } = useQuery<Todos[]>(["todos"], async () =>
    Api.fetchTodos()
  );

  if (isLoading) return <div>Loading</div>;

  return (
    <div className="grid grid-cols-2">
      {todos?.map((item) => (
        <TicktickList
          key={item.list}
          list={item}
          todos={item.todos.filter((x) => !x.isCompleted)}
        />
      ))}
    </div>
  );
};

interface Props {
  list: Todos;
  todos: Todo[];
}

const TicktickList: React.FC<Props> = ({ list, todos }) => {
  const [inputVal, setInputVal] = React.useState<any>("");
  const queryClient = useQueryClient();

  const addTodo = (desc: string, listId: number) => {
    mutation.mutate({
      description: desc,
      listId: listId,
    });
  };

  const mutation = useMutation({
    mutationFn: (newTodo: any) => {
      return Api.addTodo(newTodo.description, newTodo.listId);
    },
    onSuccess: () => {
      queryClient.refetchQueries(["todos"]);
    },
  });

  const _handleKeyDown = (e: any, description: string) => {
    if (e.key === "Enter") {
      addTodo(description, list.listId);
      setInputVal("");
    }
  };

  return (
    <div className="ticktick-wrapper">
      <div className="flex pb-2">
        <BsListCheck size={"38"} />
        <span className="uppercase flex items-center pl-2">{list.list}</span>
      </div>
      <div>
        <input
          type={"text"}
          id={"task"}
          placeholder={"+ Add task"}
          onFocus={(e) => (e.target.placeholder = "")}
          className={"bg-grey-800 rounded-lg p-2 text-grey-100"}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => {
            _handleKeyDown(e, inputVal);
          }}
          value={inputVal}
          key={"input-" + list.listId}
        />
      </div>
      <div className="flex flex-col pt-2">
        {todos.map((_todo) => {
          return <TicktickCheckbox key={_todo.id} todo={_todo} />;
        })}
      </div>
    </div>
  );
};
