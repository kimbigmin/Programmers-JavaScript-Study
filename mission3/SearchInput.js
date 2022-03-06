import SearchResult from "./SearchResult.js";

export default function SearchInput({ $app, initialState, onChangeInput }) {
  this.state = initialState;
  this.$target = document.createElement("input");

  this.$target.id = "search-keyword";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.$target.addEventListener("keyup", onChangeInput);

  const searchResult = new SearchResult({
    $app,
    initialState: this.state.data,
  });

  searchResult.render();
}
