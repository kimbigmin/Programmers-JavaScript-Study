import { dispatch } from "./api.js";

export default function SearchHistory({ $app, initialState, onClick }) {
  this.state = initialState;
  this.onClick = onClick;

  this.$target = document.createElement("div");

  $app.appendChild(this.$target);

  console.log(this.state);
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `<ul>
      ${this.state.history
        .map(
          (el) => `<li class="list" data-name="${el.search}">${el.search}</li>`
        )
        .join("")}
    </ul>`;
  };

  this.$target.addEventListener("click", (e) => {
    const $clickedList = e.target.closest(".list");

    if ($clickedList) {
      dispatch($clickedList.dataset.name);
    }
  });

  this.render();
}
