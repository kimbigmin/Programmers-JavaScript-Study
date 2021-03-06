export const request = async (search) => {
  try {
    const response = await fetch(
      `https://jjalbot.com/api/jjals?text=${search}`
    );

    if (response.ok) {
      return await response.json();
    }

    throw new Error(`에러가 발생했습니다. ${e.message}`);
  } catch (e) {
    console.log(e);
  }
};

export const debounce = (callback, delay) => {
  let timerId;

  return (event) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay, event);
  };
};

export const SEARCH_EVENT_DISPATCH = "search";

export const dispatch = (sendingValue) => {
  const searchEvent = new CustomEvent(SEARCH_EVENT_DISPATCH, {
    detail: {
      value: sendingValue,
    },
  });
  window.dispatchEvent(searchEvent);
};
