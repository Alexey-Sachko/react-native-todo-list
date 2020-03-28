import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import TodoList from "./TodoList";
import TodoService, { TodoItemType } from "../services/TodoService";

const initialTodos = [
  TodoService.newTodo("text"),
  TodoService.newTodo("some text"),
  TodoService.newTodo("text 3")
];

type Props = {};

const Todo: React.FC<Props> = () => {
  const [todoItems, setTodoItems] = useState<TodoItemType[]>(initialTodos);
  const [value, setValue] = useState("");

  const changeTextHandler = (text: string) => setValue(text);

  const addTodoHandler = () => {
    if (value.length > 0) {
      setTodoItems(prev => TodoService.addTodo(prev, value));
      setValue("");
    }
  };

  const setCompleteHandler = (id: string) => {
    setTodoItems(prev =>
      TodoService.updateTodo(prev, { id, isComplete: true })
    );
  };

  const removeTodoHandler = (id: string) => {
    setTodoItems(prev => TodoService.deleteTodo(prev, id));
  };

  return (
    <>
      <TodoList
        todoItems={todoItems}
        onComplete={setCompleteHandler}
        onRemove={removeTodoHandler}
      />
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
