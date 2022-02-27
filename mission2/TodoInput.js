function TodoInput({ $target, onAddTodo, onRemoveAllClick }) {
  
  const $todoInput = document.createElement('form');
  $todoInput.type = 'text';

  $target.appendChild($todoInput);

  this.onAddTodo = onAddTodo;
  this.onRemoveAllClick = onRemoveAllClick;

  this.render = () => {
    $todoInput.innerHTML = `
      <input type="text">
      <button>Enter</button>
      <button class="remove-all-button">Remove All</button>
    `
  }

  this.render();

  $todoInput.addEventListener('submit', (e) => {
    e.preventDefault(); // form이 제출못하도록 하는것(?)

    const $input = $todoInput.querySelector('input');
    const { value } = $input;

    if (value.length > 0) {
      this.onAddTodo(value);
      $input.value = '';
    }
    }
  )
  
  $todoInput.addEventListener('click', (e) => {
    if (e.target.className === 'remove-all-button') {
      onRemoveAllClick();
    }
  });




}