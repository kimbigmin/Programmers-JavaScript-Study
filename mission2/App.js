function App({ $target }) {
  if (!localStorage.getItem("todo")) {
    localStorage.setItem("todo", JSON.stringify([]));
    this.state = JSON.parse(localStorage.getItem("todo"));
  } else {
    this.state = JSON.parse(localStorage.getItem("todo"));
  }

  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState(this.state);
    todoCount.setState({
      totalCount: this.state.length,
      completedCount: this.state.filter((todo) => todo.isCompleted).length,
    });
  };

  const todoList = new TodoList({
    $target,
    initialState: this.state,
    onTodoClick: (index) => {
      const nextState = [...this.state];
      nextState[index].isCompleted = !nextState[index].isCompleted;
      localStorage.setItem("todo", JSON.stringify(nextState));
      this.setState(nextState);
    },
    onRemove: (index) => {
      const nextState = [...this.state];
      nextState.splice(index, 1);
      localStorage.setItem("todo", JSON.stringify(nextState));
      this.setState(nextState);
    },
  });

  const todoInput = new TodoInput({
    $target,
    onAddTodo: (text) => {
      localStorage.setItem(
        "todo",
        JSON.stringify([
          ...this.state,
          {
            text,
            isCompleted: false,
          },
        ])
      );
      this.setState(JSON.parse(localStorage.getItem("todo")));
    },
    onRemoveAllClick: () => {
      localStorage.setItem("todo", JSON.stringify([]));
      this.setState([]);
    },
  });
  const todoCount = new TodoCount({
    $target,
    initialState: {
      totalCount: this.state.length,
      completedCount: this.state.filter((todo) => todo.isCompleted).length,
    },
  });

  todoList.render(this.state);
}
