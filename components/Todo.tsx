import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import uuid from "uuid";
import TodoList from "./TodoList";

export type Todo = {
  id: number | string;
  title: string;
  isComplete: boolean;
};

type Props = {};

const Todo: React.FC<Props> = () => {
  const [todoItems, setTodoItems] = useState<Todo[]>([
    { id: 1, title: "Задача 1", isComplete: false },
    { id: 2, title: "Задача 2", isComplete: false },
    { id: 3, title: "Задача 3", isComplete: false }
  ]);
  const [value, setValue] = useState("");

  const changeTextHandler = (text: string) => setValue(text);

  const addTodoHandler = () => {
    if (value.length > 0) {
      setTodoItems(prev => [
        ...prev,
        { id: uuid(), isComplete: false, title: value }
      ]);
      setValue("");
    }
  };

  return (
    <>
      <TodoList todoItems={todoItems} />
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={changeTextHandler}
        onSubmitEditing={addTodoHandler}
      />
    </>
  );
};

export default Todo;

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    height: 40,
    paddingHorizontal: 20,
    borderWidth: StyleSheet.hairlineWidth
  }
});
