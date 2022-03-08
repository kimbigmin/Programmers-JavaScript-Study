import SearchInput from "./SearchInput.js";
import { request } from "./api.js";

export default function App($app) {
  this.state = {
    search: "",
    data: [],
  };

  this.setState = (nextState) => {
    this.state = { ...nextState };
    searchInput.setState(this.state);
  };

  const searchInput = new SearchInput({
    $app,
    initialState: this.state,
    onChangeInput: async (e) => {
      console.log(e.target.value);
      if (e.target.value) {
        this.state.search = e.target.value;
      }

      const response = await request(this.state.search);
      this.setState({
        ...this.state,
        data: response,
      });
    },
  });
}
