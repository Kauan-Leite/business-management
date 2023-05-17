const INITIAL_STATE = {
  enterprises: [],
  isFetching: true,
  enterpriseByID: {
    id: '',
    nome: '',
    address: {
      street: '',
      number: '',
      district: '',
      city: '',
      state: '',
    }
  },
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
    case "REQUEST_SUCCESSFUL_ID":
      return {
        ...state,
        isFetching: false,
        enterpriseByID: action.payload,
      }
    case "REQUEST_SUCCESSFUL_EDIT":
        return {
          ...state,
          isFetching: false,
          editItem: action.payload,
        }
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
