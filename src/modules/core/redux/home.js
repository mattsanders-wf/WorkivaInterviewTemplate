// Related actions
export const ADD_MESSAGE = 'ADD_MESSAGE';

// Initial state
const initialState = {
  messages: [],
};

// Selectors for this state
export const selectors = {
  all(state) {
    return state.home;
  },
  getMessages(state) {
    return state.home.messages;
  },
};

// State
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message]
      };
    default:
      return state;
  }
};

// General functions which use dispatch (to dispatch actions) to interact with state
// NOTE: Thunks normally go in their own directory (containers/redux/thunks)
export const addMessage = (value) => {
  return (dispatch) => {
    // Timeout, simulate RPC
    setTimeout(() => {
      dispatch({
        type: ADD_MESSAGE,
        message: value
      });
    }, 500);
  }
};
