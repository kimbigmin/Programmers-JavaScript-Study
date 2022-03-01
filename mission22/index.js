const data = [
  {
    text: "JS 공부하기",
    isCompleted: true,
  },
  {
    text: "JS 복습하기",
    isCompleted: false,
  },
];

const inputHandler = () => {
  const $input = document.getElementById("list");

  data.push({
    text: $input.value,
    isCompleted: false,
  });

  $input.value = null;
  todolist.setState(data);
};

const $button = document.getElementById("enter-btn");

$button.addEventListener("click", inputHandler);

const todolist = new TodoList({
  $target: document.getElementById("todo-list"),
  data: data,
});

todolist.render();
