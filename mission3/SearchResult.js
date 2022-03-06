export default function SearchResult({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.id = "search-result";
  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `
      ${this.state.data.map((el) => `<img src="${el.imageUrl}">`).join("")}
    `;
  };

  this.render();
}
