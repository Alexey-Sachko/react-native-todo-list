import React from "react";
import { FlatList } from "react-native";
import TodoItem from "./TodoItem";
import { TodoItemType } from "../services/TodoService";

type Props = {
  todoItems: TodoItemType[];
  onComplete: (id: string) => void;
  onRemove: (id: string) => void;
};

const TodoList: React.FC<Props> = ({ todoItems, onComplete, onRemove }) => {
  return (
    <FlatList
      data={todoItems}
      renderItem={({ item: { isComplete, title, id } }) => (
        <TodoItem
          title={title}
          isComplete={isComplete}
          onComplete={() => onComplete(id)}
          onRemove={() => onRemove(id)}
        />
      )}
      keyExtractor={({ id }) => id.toString()}
    />
  );
};

export default TodoList;
