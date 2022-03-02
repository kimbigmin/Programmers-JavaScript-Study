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

const $input = document.getElementById("list");
const $button = document.getElementById("enter-btn");
const $deleteBtns = document.getElementsByClassName("delete-btn");
const $lists = document.getElementsByClassName("todo");

// 입력 핸들러
const inputHandler = () => {
  if (!$input.value) return;

  data.push({
    text: $input.value,
    isCompleted: false,
  });

  todolist.setState(data);
  $input.value = null;
};

const deleteHandler = (e) => {
  console.log(e.target);
};

// 핸들러 등록
$button.addEventListener("click", inputHandler);

// 렌더링
const todolist = new TodoList({
  $target: document.getElementById("todo-list"),
  data: data,
});

todolist.render();

console.log($deleteBtns);
console.log($lists);

$deleteBtns.forEach((el) => {
  el.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.dataset.list === undefined) return;

    const $parentNode = document.querySelector("ul");
    const removeList = [...$lists].filter(
      (el) => e.target.dataset.list === el.dataset.list
    );

    $parentNode.removeChild(removeList[0]);
  });
});
