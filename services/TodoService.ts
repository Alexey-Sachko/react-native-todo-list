export type TodoItemType = {
  id: string;
  title: string;
  isComplete: boolean;
};

type UpdatingTodo = Partial<Omit<TodoItemType, "id">> &
  Record<"id", TodoItemType["id"]>;

class TodoService {
  newTodo(title: string) {
    return { id: new Date().getTime().toString(), isComplete: false, title };
  }

  addTodo(prev: TodoItemType[], title: string) {
    return [...prev, this.newTodo(title)];
  }

  deleteTodo(prev: TodoItemType[], id: string) {
    const toDeleteIdx = prev.findIndex(el => el.id === id);

    if (toDeleteIdx === -1) {
      return prev;
    }

    return [...prev.slice(0, toDeleteIdx), ...prev.slice(toDeleteIdx + 1)];
  }

  updateTodo(prev: TodoItemType[], updating: UpdatingTodo) {
    const toUpdateIdx = prev.findIndex(el => el.id === updating.id);

    if (toUpdateIdx === -1) {
      return prev;
    }

    return [
      ...prev.slice(0, toUpdateIdx),
      { ...prev[toUpdateIdx], ...updating },
      ...prev.slice(toUpdateIdx + 1)
    ];
  }
}

export default new TodoService();
