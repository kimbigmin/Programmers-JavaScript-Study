function TodoList({ $target, initialState, onTodoClick, onRemove }) {
  // new 미입력 체크
  if (!new.target)
    throw new Error("Error Message: 생성자 함수 new 키워드를 입력 해 주세요.");

  // 파라미터에 배열 입력 체크
  if (!Array.isArray(initialState)) {
    throw new Error("Error Message: 올바른 데이터를 입력해주세요.");
  }

  const $todoList = document.createElement("div");
  // 생성자 함수 초기화
  this.state = initialState;
  this.onTodoClick = onTodoClick;
  this.onRemove = onRemove;

  $target.appendChild($todoList);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $todoList.innerHTML = `
      <ul>
        ${this.state
          .map(
            ({ text, isCompleted }, index) => `
          <li class="TodoList_item" data-index="${index}">${
              isCompleted ? `<s>${text}</s>` : text
            } <button>삭제</button></li>`
          )
          .join("")}
      </ul>`;
  };

  // 이벤트 위임 구현
  $todoList.addEventListener("click", (e) => {
    const $li = e.target.closest(".TodoList_item");
    const { index: indexString } = $li.dataset;
    const index = parseInt(indexString);

    e.target.nodeName === "BUTTON" ? onRemove(index) : onTodoClick(index);
  });

  this.render();
}
