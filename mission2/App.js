function App({ $target }) {
  
  this.state = [
    {
      text: 'js 공부하기',
      isCompleted: false
    },
    {
      text: '잠 자기',
      isCompleted: true
    }
  ];
  
  this.setState = nextState => {
    this.state = nextState;
    todoList.setState(this.state);
    todoCount.setState({
      totalCount: this.state.length,
      completedCount: this.state.filter(todo => todo.isCompleted).length
    });
  }

  const todoList = new TodoList({
    $target,
    initialState: this.state,
    onTodoClick: (index) => {
      const nextState = [...this.state];
      nextState[index].isCompleted = !nextState[index].isCompleted;
      this.setState(nextState);
    },
    onRemove: (index) => {
      const nextState = [...this.state];
      nextState.splice(index, 1);
      this.setState(nextState);
    }
  });

  
  const todoInput = new TodoInput({
    $target,
    onAddTodo: (text) => {
      this.setState([
        ...this.state,
        {
          text,
          isCompleted: false
        }
      ])
    },
    onRemoveAllClick: () => {
      this.setState([]);
    }
    
});
  const todoCount = new TodoCount({ $target, initialState:{
    totalCount: this.state.length,
    completedCount: this.state.filter(todo => todo.isCompleted).length
  }});


  todoList.render(this.state);

}