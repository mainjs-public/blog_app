const initState = {
  loading: false,
  data: [],
  pending: false,
};

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CATEGORY_REQUEST':
      return { ...state, loading: true };
    case 'CATEGORY_REQUEST_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
  return state;
};

export default categoryReducer;
