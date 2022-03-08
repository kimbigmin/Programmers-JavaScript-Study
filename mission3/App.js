import SearchInput from "./SearchInput.js";
import { request, SEARCH_EVENT_DISPATCH, dispatch } from "./api.js";
import SearchHistory from "./SearchHistory.js";
import SearchResult from "./SearchResult.js";

export default function App($app) {
  this.state = {
    search: "",
    data: [],
    history: [],
  };

  this.setState = (nextState) => {
    this.state = { ...nextState };
    searchInput.setState(this.state);
    searchResult.setState(this.state);
    searchHistory.setState(this.state);
  };

  const searchHistory = new SearchHistory({
    $app,
    initialState: this.state,
  });

  const searchInput = new SearchInput({
    $app,
    initialState: this.state,
    onChangeInput: async (e) => {
      if (e.target.value && e.key !== "Backspace") {
        this.state.search = e.target.value;
        dispatch(e.target.value);
      }
    },
  });

  const searchResult = new SearchResult({
    $app,
    initialState: this.state,
  });

  const getDataBySearch = () => {
    window.addEventListener(SEARCH_EVENT_DISPATCH, async (e) => {
      const history = [...this.state.history].filter(
        (el) => el.search === e.detail.value
      );

      if (history.length !== 0) {
        this.setState({
          ...this.state,
          search: history[0].search,
          data: history[0].data,
        });
      } else {
        const response = await request(e.detail.value);
        this.setState({
          ...this.state,
          search: e.detail.value,
          data: response,
          history: [
            ...this.state.history,
            {
              search: e.detail.value,
              data: response,
            },
          ],
        });
        console.log(this.state);
      }
    });
  };

  getDataBySearch();
}
