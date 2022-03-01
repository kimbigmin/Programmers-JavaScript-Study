function TodoList({ $target, data }) {
  if (data === null || data === undefined || !Array.isArray(data)) {
    throw new Error("올바른 데이터를 입력해주세요.");
  }

  if (!new.target) {
    throw new Error("new 를 입력해주세요");
  }

  this.data = data;

  this.render = () => {
    $target.innerHTML = `
      <ul>
        ${this.data
          .map(
            ({ text, isCompleted }) =>
              `<li>${isCompleted ? `<s>${text}</s>` : text}</li>`
          )
          .join("")}
      </ul>`;
  };

  this.setState = (nextData) => {
    this.data = nextData;
    this.render();
  };
}
