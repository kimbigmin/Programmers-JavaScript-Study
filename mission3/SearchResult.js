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
    this.$target.innerHTML = `<div>
      ${this.state
        .map((el) => {
          return `<img src=${el.imageUrl}/>`;
        })
        .join("")}
    </div>`;
  };

  this.render();
}
