import { debounce } from "./api.js";

export default function SearchInput({ $app, initialState, onChangeInput }) {
  this.state = initialState;
  this.$target = document.createElement("input");
  this.onChangeInput = onChangeInput;

  this.$target.id = "search-keyword";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.$target.value = this.state.search;
  };

  this.$target.addEventListener("keyup", debounce(this.onChangeInput, 500));
}
