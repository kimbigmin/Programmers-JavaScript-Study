import SearchInput from "./SearchInput.js";

export default function App($app) {
  this.state = {
    search: "",
    data: [],
  };

  this.setState = (nextState) => {
    this.state = { ...nextState };
    searchInput.setState(this.state);
    searchResult.setState(this.state);
  };

  const searchInput = new SearchInput({
    $app,
    initialState: this.state,
    onChangeInput: async (e) => {
      if (e.target.value) {
        this.state.search = e.target.value;
      }

      const request = async () => {
        try {
          const response = await fetch(
            `https://jjalbot.com/api/jjals?text=${this.state.search}`
          );

          return await response.json();
        } catch (e) {
          throw new Error(`에러가 발생했습니다. ${e.message}`);
        }
      };
      this.state.data = await request();

      console.log(this.state.data);
    },
  });

  console.log(this.state);
}