import React from "react";
import { FlatList, StyleSheet, ScrollView } from "react-native";
import TodoItem from "./TodoItem";
import { Todo } from "./Todo";

type Props = {
  todoItems: Todo[];
};

const TodoList: React.FC<Props> = ({ todoItems }) => {
  return (
    <FlatList
      data={todoItems}
      renderItem={({ item: { isComplete, title } }) => (
        <TodoItem title={title} isComplete={isComplete} />
      )}
      keyExtractor={({ id }) => id.toString()}
    />
  );
};

export default TodoList;
