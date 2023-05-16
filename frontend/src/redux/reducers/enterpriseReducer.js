const INITIAL_STATE = {
  enterprises: [],
  isFetching: true,
};

const enterpriseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REQUEST_STARTED":
      return { ...state, isFetching: true };
    case "REQUEST_SUCCESSFUL":
      return {
        ...state,
        isFetching: false,
        enterprises: action.payload,
      };
    case "REQUEST_FAILED":
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default enterpriseReducer;
